import { Metadata } from "next";

interface PageSEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  keywords?: string[];
}

export function customMetaDataGenerator({
  title,
  description = "Seamless HR Solutions and Logistics Excellence",
  canonicalUrl = "https://versilservices.com/",
  ogType = "website",
  keywords = [
    "Business Optimization",
    "Versil Services",
    "Customer Experience",
    "Versil Services",
    "HR Solutions",
    "Logistics Excellence",
  ],
  ogImage = "",
  twitterCard = "summary_large_image",
}: PageSEOProps): Metadata {
  const siteTitle = "Versil Services Website";
  const fullTitle = `${title} | ${siteTitle}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
