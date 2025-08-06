function ProjectCard({ project }) {
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
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techIcons.map((tech) => (
            <div
              key={`${project.title}-${tech.name}`}
              className="relative group"
            >
              <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Botones (GitHub y Demo) */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-purple-900 hover:bg-purple-800 text-white py-2 px-4 rounded text-center transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-fuchsia-700 hover:bg-fuchsia-600 text-white py-2 px-4 rounded text-center transition-colors text-sm font-medium"
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
