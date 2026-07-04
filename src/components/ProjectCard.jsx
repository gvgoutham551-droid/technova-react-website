import "../styles/ProjectCard.css";

function ProjectCard({ image, title, tech }) {
  return (
    <div className="project-card" >

      <img src={image} alt={title} />

      <div className="project-content">

        <h3>{title}</h3>

        <p>{tech}</p>

        <div className="project-buttons">
          <button>Live Demo</button>
          <button>GitHub</button>
        </div>

      </div>

    </div>
  );
}

export default ProjectCard;