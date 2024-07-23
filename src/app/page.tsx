import { Hero } from "@/components/Hero";
import { Nunito } from "next/font/google";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { getWorkExperiences } from "./actions";

const nunito = Nunito({ weight: "400", subsets: ["latin"] });

export default async function Home() {
  const workExperiences = await getWorkExperiences();

  return (
    <>
      <Hero />
      <AboutMe workExperiences={workExperiences} />

      {/* <div className="flex w-90% md:w-[750px] mx-auto flex-col items-center p-12 bg-gradient-radial from-slate-300/25 from-10% via-transparent via-55% to-transparent">
        <Computer className="md:w-64 md:h-64 w-48 h-48" />
      </div>
      <p
        className={clsx(
          "container text-gray-200 text-center text-xl max-w-[900px] px-4 mx-auto",
          nunito.className
        )}
      >
        Software development services
      </p> */}
      {/* <div className="flex flex-col my-8 items-center gap-y-4">
        <Link href="/about-me">
          <Button>Know more about me</Button>
        </Link>
        <Link href="contact-me">
          <Button>Get in touch</Button>
        </Link>
      </div> */}
    </>
  );
}
