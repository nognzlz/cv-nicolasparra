import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageWrapper } from "@/components/Layout/PageWrapper";
import { PageContent } from "@/components/Layout/PageContent";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicolas Gonzalez Parra",
  description: "Professional web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageWrapper>
          <PageContent>{children}</PageContent>
        </PageWrapper>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-9FLMMN8401" />
    </html>
  );
}
