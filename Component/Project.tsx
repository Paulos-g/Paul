import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectProps {
  imageUrl: string[];
  title: string;
  alt: string;
  description: string;
  list: string[];
  id: number;
  icon: React.ReactNode[];
  projectUrl: string;
}

function Projects({
  imageUrl,
  title,
  alt,
  description,
  list,
  icon,
  projectUrl,
}: ProjectProps) {
  return (
    <div className="projects" data-aos="fade-up" data-aos-delay="100">
      <div className="project-image-container">
        {imageUrl.map((img, index) => (
          <img key={index} src={img} alt={alt} />
        ))}
      </div>
      <div className="project-description-container">
        <h3 className="project-title">{title}</h3>
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

        <div className="project-actions">
          <a
            className="Btn project-view-button"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View live project</span>
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
