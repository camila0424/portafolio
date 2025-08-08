function Backend() {
  return (
    <div className="px-2 py-2 bg-gray-950 rounded-lg border border-gray-900 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/20 transition-shadow duration-300 text-sm mb-3">
      <h3 className="text-lg italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-1 mb-1">
        Backend: Tecnologías y entornos
      </h3>
      <p className="leading-tight flex flex-col gap-2 text-sm">
        <span
          title="Entorno de ejecución para JavaScript en el servidor"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Node.js
        </span>
        <span
          title="Sistema de gestión de bases de datos relacional de código abierto"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          MySQL
        </span>
        <span
          title="Herramienta para testear, documentar y automatizar APIs REST"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Postman
        </span>
        <span
          title="Plataforma de despliegue para aplicaciones web y APIs con soporte para backend"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Render
        </span>
      </p>
    </div>
  );
}

export default Backend;
