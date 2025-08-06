import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white min-h-screen flex flex-col items-center text-center pt-26 pb-10 px-4"
    >
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent text-center mb-10">
        Proyectos
      </h2>
      <p className="text-2xl italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-3 mb-5">
        El código de este{" "}
        <span className="text-3xl bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
          portafolio
        </span>{" "}
        está diseñado con Tailwin Css{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
