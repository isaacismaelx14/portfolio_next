import Image from "next/image";
function Home() {
  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__container--top">
          <div className="home__img">
            <Image
              src="/img/isaac.jpg"
              alt="Isaac Martinez FullStack Developer"
              title="Isaac Martinez"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="home__text">
            <div className="home__text--subtitle">
              <span>FullStack Developer</span>
            </div>
            <div className="home__text--title">
              <span className="_simbol">&#60;</span>
              <span>Isaac Martinez</span>
              <span className="_simbol">&#47;&#62;</span>
            </div>
          </div>
        </div>
        <div className="home__container--bottom">
          <div className="home__buttons">
            <a href="#about" className="home__buttons--about_me btn">
              About Me
            </a>
            <a href="#contact" className="home__buttons--contact btn">
              Get in contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
