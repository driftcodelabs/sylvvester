import "./globals.css";
import { getCanonicalUrl, getOrganizationSchema, getWebSiteSchema, SITE_URL } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sylvvester World School",
    template: "%s | Sylvvester World School",
  },
  description:
    "Sylvvester World School is a nurturing preschool in Jaipur focused on joyful early childhood education, creativity, and holistic development.",
  keywords: "preschool in jaipur, best preschool in jaipur, preschool in india, early childhood education",
  applicationName: "Sylvvester World School",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sylvvester World School",
    description:
      "Discover Sylvvester World School, a caring preschool in Jaipur where children learn, explore, and grow with confidence.",
    url: getCanonicalUrl("/"),
    siteName: "Sylvvester World School",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylvvester World School",
    description:
      "A nurturing preschool experience at Sylvvester World School for joyful early childhood learning.",
  },
};

export default function RootLayout({ children }) {
  const schema = [getOrganizationSchema(), getWebSiteSchema()];

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
