function TimeManagement() {
  return (
    <div className="px-2 py-2 bg-gray-950 rounded-lg border border-gray-900 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/20 transition-shadow duration-300 text-sm mb-3">
      <h3 className="text-lg italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-1 mb-1">
        Organización y productividad
      </h3>

      <p className="leading-tight flex flex-col gap-2 text-sm">
        <span
          title="Gestión de tareas estilo Kanban"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Trello
        </span>
        <span
          title="Organización personal y de equipo: notas, bases de datos, wikis"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Notion
        </span>
        <span
          title="Gestión de proyectos en equipo"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Monday
        </span>
        <span
          title="Organización de eventos, tareas y reuniones"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Google Calendar
        </span>
        <span
          title="Tableros de proyectos dentro de GitHub"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          GitHub Projects
        </span>
      </p>
    </div>
  );
}

export default TimeManagement;
