import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageWrapper } from "@/components/Layout/PageWrapper";
import { PageContent } from "@/components/Layout/PageContent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
        <Header />
        <PageWrapper>
          <PageContent>{children}</PageContent>
        </PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
