import { useState, useEffect } from "react";
import GitHub from "../../../images/social/gitHub_dark.svg";

interface Tech {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  desc: string;
  image: string;
  techIcons: Tech[];
  github: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si estamos en mobile-----------------------------
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar tooltip al hacer click fuera en mobile-----------------------------
  useEffect(() => {
    if (!isMobile) return;
    const handleClickOutside = () => setActiveTooltip(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);

  // Manejar click en mobile ------------------------
  const handleIconClick = (e: React.MouseEvent, techName: string) => {
    if (!isMobile) return;
    e.stopPropagation();
    setActiveTooltip((prev) => (prev === techName ? null : techName));
  };

  return (
    <div className="px-4 py-6 bg-gray-900 rounded-lg border border-gray-800 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {/* Contenedor de imagen con relación de aspecto 16:9 */}
      <div className="relative w-full pt-[56.25%] overflow-hidden rounded-t-lg bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.desc}</p>

        {/* Tecnologías (iconos) con tooltip */}
        <div className="mb-4">
          {/* Texto previo a los iconos */}
          <p className="text-sm text-blue-300 font-semibold mb-2">
            Tecnologías:
          </p>

          {/* Contenedor de iconos */}
          <div className="flex flex-wrap gap-2">
            {project.techIcons.map((tech) => (
              <div
                key={`${project.title}-${tech.name}`}
                className="relative group"
                onClick={(e) => handleIconClick(e, tech.name)}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6 cursor-pointer"
                />
                <span
                  className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-700/90 rounded transition-opacity duration-300 whitespace-nowrap
            ${isMobile
                      ? activeTooltip === tech.name
                        ? "opacity-100"
                        : "opacity-0"
                      : "opacity-0 group-hover:opacity-100"
                    }`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>


        {/* Botones (GitHub y Demo) */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-purple-700 hover:bg-purple-900 shadow-lg shadow-purple-600/50 text-white py-2 px-4 rounded transition-colors text-sm font-medium space-x-2"
          >
            <span>Ver código en</span>
            <img src={GitHub} alt="GitHub" className="w-4 h-4" />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-fuchsia-700 hover:bg-fuchsia-600 shadow-lg shadow-purple-600/50 text-white py-2 px-4 rounded text-center transition-colors text-sm font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
