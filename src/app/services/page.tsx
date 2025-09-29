import Hero from "../components/hero";
import Fast from "./fast";
import Speed from "./speed";
import Services from "../components/services";
import Faq from "../components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Fast />
      <Speed />
      <Services />
      <Faq />
    </>
  );
}