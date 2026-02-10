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
  title: "Rizwan Zia – Frontend Developer | React, Next.js & UI/UX Portfolio",
  description:
    "I’m Rizwan, a frontend developer based in Pakistan, specializing in React, Next.js, Typescript, and modern web interfaces. I build responsive, accessible, and performance-driven web experiences.",
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
