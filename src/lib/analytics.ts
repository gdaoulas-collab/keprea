const GA_ID = "G-8J2LKBGHD7";

export function initGA4() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga4-script")) return;

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) { window.dataLayer.push(args); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID);
}
