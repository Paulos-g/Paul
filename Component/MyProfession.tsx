import { FaEnvelope, FaLocationDot, FaGraduationCap } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Profession() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const coreAreas = [
    "Full-Stack Web Development",
    "Backend APIs",
    "React + Next.js",
    "Node.js + Express",
    "TypeScript",
    "PostgreSQL",
    "AWS EC2 & S3",
    "DevOps Practices (CI/CD, Docker)",
  ];

  return (
    <div className="portfolio-container">
      <div className="content-layout">
        <div className="profile-card">
          <p className="bio-text">
            I am a developer who works on making software systems that can grow
            and make a difference. I have worked on both full-stack development
            and applied AI. I like using my strong backend skills and modern web
            technologies to solve real-world problems. I'm always looking for
            new ways to use intelligent systems in real-life situations.
          </p>

          <div className="info-section">
            <div className="info-item">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="info-details">
                <span className="info-label">Email</span>
                <span className="info-value">paulosgirmachew28@gmail.com</span>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <FaLocationDot />
              </div>
              <div className="info-details">
                <span className="info-label">Location</span>
                <span className="info-value">Addis Ababa, Ethiopia</span>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <FaGraduationCap />
              </div>
              <div className="info-details">
                <span className="info-label">Education</span>
                <span className="info-value">B.Tech in Computer Science</span>
              </div>
            </div>
          </div>

          <div className="core-areas-section">
            <h3 className="section-subtitle">Core Areas</h3>
            <div className="tags-container">
              {coreAreas.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Education History */}
        <div className="education-section">
          <h2 className="education-title">Education</h2>

          <div className="education-list">
            <div
              className="education-card "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-left">
                <h3 className="edu-degree">B.s Computer Science</h3>
                <p className="institution">University Of Gondar</p>
                <p className="timeline">Oct 25 - present</p>
              </div>
              <div className="card-right"></div>
            </div>

            <div
              className="education-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-left">
                <h3 className="edu-degree">Intermediate Education</h3>
                <p className="institution">
                  St.Michael Scholls & Abugida Schools
                </p>
                <p className="timeline">2018 - 2022</p>
              </div>
              <div className="card-right"></div>
            </div>

            <div
              className="education-card"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="card-left">
                <h3 className="edu-degree">Secondary Schooling</h3>
                <p className="institution">St michael Schools</p>
                <p className="timeline">2020</p>
              </div>
              <div className="card-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profession;
