import { FaBriefcase, FaFileAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Certificate from "../public/Certificates/WellsFargo.png";
import HP from "../public/Certificates/Hplife.png";
import Internship from "../public/Certificates/Internship.png";
import EthicalHacking from "../public/Certificates/Ethical_Hacking.png";

interface Experience {
  title: string;
  company: string;
  year: string;
  description: string;
  certificate: string;
  work: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  certificate: string;
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
];

const certifications: Certification[] = [
  {
    title: "HP AI Course",
    issuer: "HP Life",
    year: "2025",
    description:
      "Gained knowledge of how to use AI and leverage AI skills in software development. Learned how to use AI to improve the quality and efficiency of software development.",
    certificate: HP,
  },
  {
    title: "Software Engineer Job Simulation",
    issuer: "Forage",
    year: "2026",
    description:
      "Completed practical frontend, backend, and analytics tasks in a software engineering job simulation.",
    certificate: Internship,
  },
  {
    title: "Ultimate Ethical Hacking Course",
    issuer: "Udemy",
    year: "2026",
    description:
      "Completed the beginner-to-hacker ethical hacking course, with 2.5 hours of course content.",
    certificate: EthicalHacking,
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

function CertificationCard({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) {
  return (
    <article
      className="rounded-xl border border-slate-700 bg-[#182231] p-6 shadow-lg"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay={index * 150}
      data-aos-offset="80"
      data-aos-easing="ease-out-cubic"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xl text-blue-400">
          <FaFileAlt aria-hidden="true" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">{certification.title}</h4>
          <p className="text-slate-400">{certification.issuer}</p>
        </div>
      </div>
      <p className="mb-5 leading-relaxed text-slate-200">
        {certification.description}
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <span className="rounded-full border border-blue-500/50 px-3 py-1 text-sm font-semibold text-blue-400">
          {certification.year}
        </span>
        <a
          href={certification.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md border border-blue-500/50 bg-slate-950 px-4 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white"
        >
          <FaFileAlt aria-hidden="true" />
          View certificate
        </a>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section className="min-h-screen bg-[#0f1726] px-6 py-20 text-white">
      <h2
        className="mb-20 text-center text-4xl font-bold text-sky-500"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Experience &amp; Certifications
      </h2>

      <div className="relative mx-auto max-w-6xl">
        <h3 className="mb-10 text-2xl font-bold text-white">Work Experience</h3>
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-slate-700 md:block" />
          {experiences.map((experience, index) => (
            <div
              key={`${experience.title}-${index}`}
              className="relative mb-16 grid md:grid-cols-2"
            >
              <div
                className="absolute left-1/2 top-2 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 md:block"
                data-aos="zoom-in"
                data-aos-delay={index * 200 + 300}
              />

              {index % 2 === 0 ? (
                <>
                  <ExperienceCard experience={experience} index={index} />
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <ExperienceCard experience={experience} index={index} />
                </>
              )}
            </div>
          ))}
        </div>

        <h3 className="mb-8 mt-20 text-2xl font-bold text-white">
          Certifications
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
