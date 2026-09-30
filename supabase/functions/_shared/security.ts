// Shared helpers for public-facing edge functions (contact / field feedback forms).

const ALLOWED_ORIGINS = new Set([
  "https://www.keprea.com",
  "https://keprea.com",
]);

export function corsHeadersFor(req: Request): Record<string, string> {
  const origin = req.headers.get("origin") ?? "";
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : "https://www.keprea.com";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Vary": "Origin",
  };
}

export function escapeHtml(input: string): string {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isValidEmail(email: string): boolean {
  return typeof email === "string" && email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

export function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("cf-connecting-ip") ?? "unknown";
}

// deno-lint-ignore no-explicit-any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function checkRateLimit(
  supabase: any,
  rateKey: string,
  opts: { windowMinutes: number; maxHits: number },
): Promise<boolean> {
  const windowStart = new Date(Date.now() - opts.windowMinutes * 60_000).toISOString();

  // Opportunistic cleanup so the table doesn't grow unbounded.
  await supabase
    .from("rate_limit_hits")
    .delete()
    .lt("created_at", new Date(Date.now() - 24 * 60 * 60_000).toISOString());

  const { count, error } = await supabase
    .from("rate_limit_hits")
    .select("id", { count: "exact", head: true })
    .eq("rate_key", rateKey)
    .gte("created_at", windowStart);

  if (error) {
    console.error("Rate limit check failed, allowing request:", error);
    return true;
  }

  if ((count ?? 0) >= opts.maxHits) {
    return false;
  }

  await supabase.from("rate_limit_hits").insert({ rate_key: rateKey });
  return true;
}
