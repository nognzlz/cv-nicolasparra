import { Heading } from "@/components/Heading";
import { Intro } from "./Intro";
import { Technologies } from "./Technologies";
import { Career } from "./Career";
import { getWorkExperiences } from "./actions";

export default async () => {
  const workExperiences = await getWorkExperiences();

  return (
    <div className="container mx-auto flex flex-col items-center my-8 gap-y-4">
      <Heading>ABOUT ME</Heading>
      <Intro />
      <Technologies />
      <Career workExperiences={workExperiences} />
    </div>
  );
};
