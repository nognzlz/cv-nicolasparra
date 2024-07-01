import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import clsx from "clsx";
import { Nunito } from "next/font/google";
import { PageWrapper } from "@/components/Layout/PageWrapper";
import { PageContent } from "@/components/Layout/PageContent";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <PageWrapper>
        <PageContent>
          <Hero />
          <p
            className={clsx(
              "container mt-8 text-gray-200 text-center text-xl max-w-[900px] px-4 mx-auto",
              nunito.className
            )}
          >
            Software development services
          </p>
        </PageContent>
      </PageWrapper>
      <Footer />
    </>
  );
}
