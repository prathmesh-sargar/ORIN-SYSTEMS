import ReadyNext from "../components/sections/ReadyNext/ReadyNext";
import Growth from "../components/sections/Growth/Growth";
import Hero from "../components/sections/Hero/Hero";
import Blogs from "../components/sections/Blogs/Blogs";
import Company from "../components/sections/Company/Company";

export default function Home() {
  return (
    <>
      <Hero />
      <Growth />
      <ReadyNext />
      <Company />
      <Blogs/>
    </>
  );
}
