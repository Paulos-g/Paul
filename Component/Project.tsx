import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
interface ProjectProps {
  imageUrl: string[];
  title: string;
  alt: string;
  description: string;
  list: string[];
  id: number;
  icon: React.ReactNode[]; // or string[] if you're using plain text/emoji instead of icon components}
  button?: React.ReactNode;
}

function Projects({
  imageUrl,
  title,
  alt,
  description,
  list,
  id,
  icon,
  button,
}: ProjectProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="projects" data-aos="fade-up" data-aos-delay="100">
      <div className="project-image-container">
        {imageUrl.map((img, index) => (
          <img key={index} src={img} alt={alt} />
        ))}
      </div>
      <div className="project-description-container">
        <h3 key={id} className="project-title">
          {title}
        </h3>
        <p className="project-description">{description}</p>

        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}{" "}
        </ul>
        <div className="project-icons">
          {icon.map((iconEl, index) => (
            <span key={index}>{iconEl}</span>
          ))}
        </div>

        {button ? <div className="project-actions">{button}</div> : null}
      </div>
    </div>
  );
}
export default Projects;
