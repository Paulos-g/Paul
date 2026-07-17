import { useState } from "react";
import { FaCode, FaGlobe, FaCloud, FaDatabase } from "react-icons/fa";
import { FaCss3Alt, FaReact, FaAws, FaServer, FaNodeJs } from "react-icons/fa";
import { SiVercel, SiPostman, SiExpress } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import Scrambled from "./SmallScrable";

function Skills() {
  const [activeTab, setActiveTab] = useState("programming");

  const languageList = [
    // Programming Languages
    {
      id: 1,
      name: "JavaScript",
      category: "programming",
      icon: <FaCode />,
    },
    {
      id: 2,
      name: "TypeScript",
      category: "programming",
      icon: <FaCode />,
    },
    {
      id: 3,
      name: "C++",
      category: "programming",
      icon: <FaCode />,
    },
    {
      id: 4,
      name: "Java",
      category: "programming",
      icon: <FaCode />,
    },

    // Frontend Development
    {
      id: 5,
      name: "CSS",
      category: "frontend",
      icon: <FaCss3Alt />,
    },
    {
      id: 6,
      name: "React.js",
      category: "frontend",
      icon: <FaReact />,
    },
    {
      id: 7,
      name: "Tailwind CSS",
      category: "frontend",
      icon: <SiTailwindcss />,
    },
    {
      id: 8,
      name: "Next.js",
      category: "frontend",
      icon: <SiNextdotjs />,
    },

    // Backend Development
    {
      id: 9,
      name: "Node.js",
      category: "backend",
      icon: <FaNodeJs />,
    },
    {
      id: 10,
      name: "Express.js",
      category: "backend",
      icon: <SiExpress />,
    },
    {
      id: 11,
      name: "REST API",
      category: "backend",
      icon: <FaServer />,
    },
    {
      id: 12,
      name: "Postman API",
      category: "backend",
      icon: <SiPostman />,
    },

    // Cloud & Deployment
    {
      id: 13,
      name: "AWS",
      category: "cloud",
      icon: <FaAws />,
    },
    {
      id: 14,
      name: "Vercel",
      category: "cloud",
      icon: <SiVercel />,
    },
  ];

  const navItems = [
    {
      id: "programming",
      label: "Programming Languages",
      icon: <FaCode />,
    },
    {
      id: "frontend",
      label: "Frontend Development",
      icon: <FaGlobe />,
    },
    {
      id: "backend",
      label: "Backend Development",
      icon: <FaDatabase />,
    },
    {
      id: "cloud",
      label: "Cloud & Deployment",
      icon: <FaCloud />,
    },
  ];

  const filteredSkills = languageList.filter(
    (skill) => skill.category === activeTab,
  );

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar-skill">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Animated Heading */}
      <div className="Programming Box">
        <h2
          className="text-3xl font-bold text-white"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Scrambled
            key={activeTab}
            text={navItems.find((item) => item.id === activeTab)?.label ?? ""}
          />
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="language-grid">
        {filteredSkills.length === 0 && (
          <p>No skills available for this category.</p>
        )}

        {filteredSkills.map((skill, index) => (
          <div
            key={skill.id}
            className="language-card"
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="700"
          >
            <div className="icon-wrapper">{skill.icon}</div>

            <span className="language-name">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* AI & Developer Tooling */}
      <div
        className="ai-tooling-container"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="tooling-title">AI & Developer Tooling</h3>

        <div className="badges-wrapper">
          {["Git", "GitHub", "Postman", "Docker", "CrewAI", "Gemini"].map(
            (tool, index) => (
              <span
                key={tool}
                className="tool-badge"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {tool}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
