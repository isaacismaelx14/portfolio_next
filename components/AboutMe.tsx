import PersonalProfile from "./_PersonalProfile";
import Skills from "./_Skills";
import Technologies from "./_Technologies";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <div className="about-me__container">
        <div className="about-me__container--start" id="personal-profile">
          <PersonalProfile />
        </div>
        <div className="about-me__container--end" id="skills">
          <Skills />
        </div>
      </div>
      <Technologies />
    </section>
  );
}

export default AboutMe;
