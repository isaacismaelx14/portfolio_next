import type { NextPage } from "next";
import AboutMe from "../components/AboutMe";
import Home from "../components/Home";
import Technologies from "../components/Technologies";

const Main: NextPage = () => {
  return (
    <main className="main">
      <Home />
      <AboutMe />
      <Technologies />
    </main>
  );
};

export default Main;
