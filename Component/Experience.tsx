import { FaBriefcase, FaFileAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Certificate from "../public/Certificates/WellsFargo.png";
import HP from "../public/Certificates/Hplife.png";

interface Experience {
  title: string;
  company: string;
  year: string;
  description: string;
  certificate: string;
  work: string;
}

const experiences: Experience[] = [
  {
    title: "Java Developer Intern",
    company: "Wells Fargo Financial Services",
    year: "2025",
    description:
      "Developed and maintained a data model using Java during an internship. Added new features and improved existing ones. Gained hands-on experience in Java and enhanced problem-solving skills while working remotely.",
    certificate: Certificate,
    work: "https://github.com/Paulos-g/Wells-fargo-project",
  },
  {
    title: "HP AI Course",
    company: "HP Life",
    year: "2025",
    description:
      "Gained knowledge of how to use AI and leverage AI skills in software development. Learned how to use AI to improve the quality and efficiency of software development.",
    certificate: HP,
    work: "https://github.com/Paulos-g/Scorely-project",
  },
];

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const animation = index % 2 === 0 ? "fade-right" : "fade-left";

  return (
    <div
      className="rounded-xl border border-slate-700 bg-[#182231] p-6 shadow-lg md:mx-10"
      data-aos={animation}
      data-aos-duration="900"
      data-aos-delay={index * 200}
      data-aos-offset="150"
    >
      {/* Header */}
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-2xl text-blue-400">
          <FaBriefcase />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">{experience.title}</h3>

          <p className="text-slate-400">{experience.company}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mb-6 text-lg leading-relaxed text-slate-200">
        {experience.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Year */}
        <span className="rounded-full border border-blue-500/50 px-3 py-1 text-sm font-semibold text-blue-400">
          {experience.year}
        </span>

        {/* Certificate */}
        <a
          href={experience.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-blue-500/50 bg-slate-950 px-4 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white"
        >
          <FaFileAlt />
          Experience Certificate
        </a>

        {/* Work */}
        <a
          href={experience.work}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-5 py-2 font-semibold text-white transition hover:scale-105"
        >
          Work
          <FaArrowUpRightFromSquare />
        </a>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section className="min-h-screen bg-[#0f1726] px-6 py-20 text-white">
      {/* Heading */}
      <h2
        className="mb-20 text-center text-4xl font-bold text-sky-500"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Work Experience
      </h2>

      {/* Timeline */}
      <div className="relative mx-auto max-w-6xl">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-slate-700 md:block" />

        {experiences.map((experience, index) => (
          <div
            key={`${experience.title}-${index}`}
            className="relative mb-16 grid md:grid-cols-2"
          >
            {/* Timeline Dot */}
            <div
              className="absolute left-1/2 top-2 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 md:block"
              data-aos="zoom-in"
              data-aos-delay={index * 200 + 300}
            />

            {index % 2 === 0 ? (
              <>
                {/* Left Card */}
                <ExperienceCard experience={experience} index={index} />

                {/* Empty Right Side */}
                <div />
              </>
            ) : (
              <>
                {/* Empty Left Side */}
                <div />

                {/* Right Card */}
                <ExperienceCard experience={experience} index={index} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
