
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "https://placehold.co/600x400",
    title: "Bus Booking System",
    tech: "React • Node • MongoDB",
  },
  {
    image: "https://placehold.co/600x400",
    title: "AI Chat Assistant",
    tech: "React • Python • OpenAI",
  },
  {
    image: "https://placehold.co/600x400",
    title: "E-Commerce Platform",
    tech: "React • Express • MongoDB",
  },
];

function Projects() {
  return (
    <section className="projects" id="project">

      <h2>Featured Projects</h2>

      <p>Some of our recent works.</p>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            tech={project.tech}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;