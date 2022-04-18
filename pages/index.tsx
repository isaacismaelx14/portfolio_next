import type { NextPage } from 'next';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

const Main: NextPage = () => {
    return (
        <main className="main">
            <Home />
            <AboutMe />
            <Technologies />
            <div className="container">
                <Projects />
            </div>
            <Contact />
        </main>
    );
};

export default Main;
