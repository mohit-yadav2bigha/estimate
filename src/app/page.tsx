import Hero from "./components/hero";
import Accurate from "./components/accurate";
import Serve from "./components/serve";
import Services from "./components/services";
import Software from "./components/software";
import Expertise from "./components/expertise";
import Faq from "./components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Accurate />
      <Serve />
      <Services />
      <Software />
      <Expertise />
      <Faq />
    </>
  );
}