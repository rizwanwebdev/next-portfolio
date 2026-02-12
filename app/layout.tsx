import type { Metadata } from "next";
import { El_Messiri, Poppins } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rizwanweb.site"),

  title: {
    default:
      "Rizwan – Frontend Developer | React, Next.js, TypeScript & UI Engineering",
    template: "%s | Rizwan",
  },

  description:
    "Frontend developer specializing in React, Next.js, and modern UI engineering. I build high-performance, SEO-optimized, and scalable web applications.",

  keywords: [
    "Rizwan",
    "Frontend Developer",
    "Frontend Developer Pakistan",
    "React Developer",
    "Next.js Developer",
    "Shopify Developer",
    "TypeScript Developer",
    "UI/UX Engineer",
    "Web Performance Optimization",
  ],

  authors: [{ name: "Rizwan", url: "https://rizwanweb.site" }],

  creator: "Rizwan",

  openGraph: {
    title:
      "Rizwan – Frontend and Shopify Developer | React & Next.js Specialist",
    description:
      "I design and build responsive, accessible, and performance-focused web applications using React and Next.js.",
    url: "https://rizwanweb.site",
    siteName: "Rizwan – Frontend Developer's Portfolio",
    images: [
      {
        url: "/rizwan-frontend-developer.png",
        width: 1200,
        height: 630,
        alt: "Rizwan – Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rizwan – Frontend Developer | React & Next.js",
    description:
      "Frontend and Shopify developer building scalable, high-performance web applications.",
    images: ["/rizwan-frontend-developer.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${elMessiri.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
