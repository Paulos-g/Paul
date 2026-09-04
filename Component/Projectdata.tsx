// Font Awesome Icons (fa)
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiSupabase, SiPostgresql } from "react-icons/si";
import { FaDatabase, FaServer } from "react-icons/fa6"; // Often requires /fa6 in newer versions

// Simple Icons (si) - This is where the TypeScript icon actually lives!
import { SiTypescript } from "react-icons/si";
import projectImage from "../src/assets/Project.png";
import projectImage2 from "../src/assets/Project2.png";
import Button from "./Button.tsx";

// Note: react-icons/fa has no dedicated PostgreSQL or Express brand icons.
// FaDatabase stands in for PostgreSQL and FaServer stands in for Express below.
// If you'd rather have exact brand logos, swap these two for
// SiPostgresql and SiExpress from "react-icons/si".

const projectsData = [
  {
    id: 1,
    title: "Garden Inn",
    alt: "Garden Inn hotel booking platform preview",
    imageUrl: [projectImage],

    description:
      "A hotel booking platform that lets guests search availability, compare rooms, and reserve stays in a few clicks, with a dashboard for property owners to manage listings and bookings.",
    list: [
      "Built a real-time room availability and booking system with date-range search and instant confirmation.",
      "Designed a secure user authentication flow for guests and property owners with role-based access.",
      "Integrated a PostgreSQL database to manage rooms, bookings, and pricing with relational integrity.",
      "Built a responsive interface so guests can browse and book stays smoothly across devices.",
    ],
    icon: [
      <FaReact key="react" title="React" />,
      <FaCss3Alt key="css" title="CSS3" />,

      <FaDatabase key="postgres" title="PostgreSQL" />,
      <FaNodeJs key="node" title="Node.js" />,
      <FaServer key="express" title="Express" />,
    ],
    button: (
      <Button
        text="View Project"
        onClick={() =>
          window.open("https://garden-inn-project.vercel.app/", "_blank")
        }
      />
    ),
  },
  {
    id: 2,
    title: "Yeka MKC",
    alt: "Project 2 preview",
    imageUrl: [projectImage2],
    description:
      "A Local church website that gives information about the church services and accepts fundraise payments through chapa.",
    list: [
      "Developed a responsive user interface with a focus on usability and accessibility.",
      "Implemented state management using Redux Toolkit for efficient data flow.",
      "Integrated Chapa payment to accept payment from any bank including telebirr.",
      "Integrated RESTful APIs to fetch and update data from the backend services.",
      "Conducted thorough testing to ensure code quality and performance.",
    ],
    icon: [
      <SiTypescript key="" title="TypeScript" />,

      <SiTailwindcss key="tailwind" title="Tailwind CSS" />,
      <SiSupabase key="supabase" title="Supabase" />,
      <SiPostgresql key="postgresql" title="PostgreSQL" />,
      <FaDatabase key="postgres" title="PostgreSQL" />,
      <FaNodeJs key="node" title="Node.js" />,
      <FaServer key="express" title="Express" />,
    ],
    button: (
      <Button
        text="View Project"
        onClick={() => window.open("https://yeka-mkc.vercel.app/", "_blank")}
      />
    ),
  },
];
export default projectsData;
