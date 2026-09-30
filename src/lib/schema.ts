import { SITE_URL } from "./site";

export interface FaqItem {
  question: string;
  answer: string;
}

/** JSON-LD string for a FAQPage — pass to a <script type="application/ld+json"> inside <Head>. */
export function faqJsonLd(items: FaqItem[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });
}

export interface ServiceJsonLdOptions {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}

/** JSON-LD string for a Service — pass to a <script type="application/ld+json"> inside <Head>. Factual fields only: no offers, price, or ratings. */
export function serviceJsonLd(options: ServiceJsonLdOptions): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    serviceType: options.serviceType,
    url: `${SITE_URL}${options.path}`,
    provider: {
      "@type": "Organization",
      name: "Keprea",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "France",
    },
  });
}

export interface ArticleJsonLdOptions {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}

/** JSON-LD string for an Article — pass to a <script type="application/ld+json"> inside <Head>. */
export function articleJsonLd(options: ArticleJsonLdOptions): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    mainEntityOfPage: `${SITE_URL}${options.path}`,
    ...(options.image ? { image: options.image } : {}),
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    author: {
      "@type": "Organization",
      name: "Keprea",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Keprea",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/lovable-uploads/eprea_Main_Logo.png`,
      },
    },
  });
}
