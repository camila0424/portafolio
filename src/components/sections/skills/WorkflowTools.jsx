function WorkflowTools() {
  return (
    <div className="px-2 py-2 bg-gray-950 rounded-lg border border-gray-900 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/20 transition-shadow duration-300 text-s mb-3">
      <h3 className="text-lg italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-1 mb-1">
        Flujo de trabajo y colaboración
      </h3>
      <p className="leading-tight flex flex-col gap-2 text-sm">
        <span
          title="Plataforma para control de versiones y colaboración"
          className="inline-block px-1 py-1 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          GitHub
        </span>{" "}
        <span
          title="Testing y documentación de APIs"
          className="inline-block px-1 py-1 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Postman
        </span>{" "}
        <span
          title="Plataforma para despliegue y hosting continuo"
          className="inline-block px-1 py-1 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Vercel
        </span>
      </p>
    </div>
  );
}

export default WorkflowTools;
