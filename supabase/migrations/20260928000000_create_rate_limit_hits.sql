-- Rate limiting store for public edge functions (contact form, field feedback form).
-- Accessed only via the service role key from edge functions, which bypasses RLS,
-- so no public policies are needed here.
CREATE TABLE public.rate_limit_hits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  rate_key TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_rate_limit_hits_key_created ON public.rate_limit_hits (rate_key, created_at);

ALTER TABLE public.rate_limit_hits ENABLE ROW LEVEL SECURITY;
