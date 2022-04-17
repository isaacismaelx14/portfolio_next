import type { NextPage } from "next";
import AboutMe from "../components/AboutMe";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

const Main: NextPage = () => {
  return (
    <main className="main">
      <Home />
      <AboutMe />
      <Technologies />
      <div className="container">
        <Projects />
      </div>
    </main>
  );
};

export default Main;
