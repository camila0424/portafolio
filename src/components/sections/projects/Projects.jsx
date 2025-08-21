import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Tailwind from "../../../images/technologies/tailwindcss.svg";
import Vite from "../../../images/technologies/vitejs.svg";
import ReactIcon from "../../../images/technologies/react.svg";
import TypeScr from "../../../images/technologies/typescript.svg";
import JS from "../../../images/technologies/javascript.svg";

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
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent text-center mb-2 pb-2">
        Proyectos
      </h2>

      <p className="text-2xl italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-3 mb-5">
        El código de este{" "}
        <span className="text-3xl bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
          portafolio
        </span>{" "}
        está diseñado con {/* React */}
        <span
          className="relative inline-block group ml-1 focus:outline-none"
          tabIndex={0}
        >
          <img
            src={ReactIcon}
            alt="React"
            className="w-6 h-6 inline-block align-middle"
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity whitespace-nowrap">
            React
          </span>
        </span>
        {/* Tailwind */}
        <span
          className="relative inline-block group ml-2 focus:outline-none"
          tabIndex={0}
        >
          <img
            src={Tailwind}
            alt="TailwindCss"
            className="w-6 h-6 inline-block align-middle"
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity whitespace-nowrap">
            TailwindCss
          </span>
        </span>
        {/* Vite */}
        <span
          className="relative inline-block group ml-2 focus:outline-none"
          tabIndex={0}
        >
          <img
            src={Vite}
            alt="Vite"
            className="w-6 h-6 inline-block align-middle"
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity whitespace-nowrap">
            Vite
          </span>
        </span>
        {/* TypeScript */}
        <span
          className="relative inline-block group ml-2 focus:outline-none"
          tabIndex={0}
        >
          <img
            src={TypeScr}
            alt="TypeScript"
            className="w-6 h-6 inline-block align-middle"
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity whitespace-nowrap">
            TypeScript
          </span>
        </span>
        {/* JavaScript */}
        <span
          className="relative inline-block group ml-2 focus:outline-none"
          tabIndex={0}
        >
          <img
            src={JS}
            alt="JavaScript"
            className="w-6 h-6 inline-block align-middle"
          />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity whitespace-nowrap">
            JavaScript
          </span>
        </span>
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
