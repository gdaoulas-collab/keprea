import { SITE_URL } from "./site";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** JSON-LD string for a BreadcrumbList — pass to a <script type="application/ld+json"> inside <Head>. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  });
}
