import Nav from "../Component/Nav";
import AnimatedCursor from "react-animated-cursor";
import { TypeAnimation } from "react-type-animation";
import Button from "../Component/Button";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import Med from "../Component/Media";
import ScrollIndicator from "../Component/ScrollBar";
import Hero from "../Component/ScrambledText";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Profession from "../Component/MyProfession";
import Skills from "../Component/Skills";
import Image from "../Component/Image";
import Projects from "../Component/Project";
import projectsData from "../Component/ProjectData";
import Experience from "../Component/Experience";
import ContactForm from "../Component/Form";
import Footer from "../Component/Footer";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="app-root">
      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color="0,255,170"
        outerAlpha={0.4}
        innerScale={1}
        outerScale={2.5}
        outerStyle={{
          zIndex: 9999,
          boxShadow: "0 0 20px rgba(0,255,170,0.8)",
        }}
      />
      <Nav />
      <div data-aos="fade-up">
        <main
          id="home"
          className="container"
          style={{ paddingTop: 48, paddingBottom: 48 }}
        >
          <div className="content">
            <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>
              Bienvenue sur mon portfolio !.
            </h1>
            <p style={{ fontSize: 18, color: "lightblue" }}>
              Hey I am Paulos(Bebi)
            </p>
            <TypeAnimation
              className="typewriter"
              sequence={[
                "Bebi",
                2000,
                "a Creative Developer",
                2000,
                "Software Engineer",
                2000,
                "I, Build . Deploy . Repair",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
            <p style={{ fontSize: 25 }} className="brand">
              Fullstack Developer & Passionate in music
            </p>
            <p>
              I enjoy Building Emmersive and highstandard web projects, <br />{" "}
              focusing on impactfull and modern fullstack projects , using{" "}
              <br /> modern tech stands i built fast and scalable web apps and{" "}
              <br />
              loves learning new techs.{" "}
            </p>

            <div className="hero-actions">
              <a href="#contact" style={{ textDecoration: "none" }}>
                <Button
                  className="Btn"
                  text="Get in touch"
                  icon={<FaEnvelope />}
                />
              </a>
              <a
                href="/Certificates/Paulos_Girmachew_CV.docx"
                download="Paulos_Girmachew_CV.docx"
              >
                <Button
                  className="btn"
                  text="Download Resume"
                  icon={<FaDownload />}
                />
              </a>
            </div>
            <Med />
          </div>
          <Image />
        </main>
      </div>
      <ScrollIndicator />
      <div id="about" data-aos="fade-up" data-aos-delay="300">
        <Hero text="My professional Slide" />
        <Profession />
      </div>

      <div id="skills" className="Skill-back" data-aos="fade-up">
        <Hero text="Skills" />

        <Skills />
      </div>
      <div id="projects">
        <Hero text="Things I built" />
        {projectsData.map((p) => (
          <Projects key={p.id} {...p} />
        ))}
      </div>
      <div id="experience">
        <Hero text="Experience & Certification." />
        <Experience />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
