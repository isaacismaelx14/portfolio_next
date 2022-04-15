import type { NextPage } from "next";
import AboutMe from "../components/AboutMe";
import Home from "../components/Home";

const Main: NextPage = () => {
  return (
    <main className="main">
      <Home />
      <AboutMe />
    </main>
  );
};

export default Main;
