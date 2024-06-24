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
    <main>
      <Header />
      <PageWrapper>
        <PageContent>
          <Hero />
          <p
            className={clsx(
              "container mt-8 text-white text-center text-xl max-w-[900px] px-4 mx-auto",
              nunito.className
            )}
          >
            I am a seasoned full-stack developer, working in the software
            industry for 10 years. During my professional career, I collaborated
            to build small and large projects. I have always worked using agile
            methodologies. I am a very attentive person, always concerned about
            maintaining communication with the rest of the team.
          </p>
        </PageContent>
      </PageWrapper>
      <Footer />
    </main>
  );
}
