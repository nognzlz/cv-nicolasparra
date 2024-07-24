import { getWorkExperiences } from "./actions";
import { Home } from "./Home";

export default async function HomePage() {
  const workExperiences = await getWorkExperiences();

  return <Home workExperiences={workExperiences} />;
}
