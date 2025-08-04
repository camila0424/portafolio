function Frontend() {
  return (
    <div className="px-2 py-2 bg-gray-950 rounded-lg border border-gray-900 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/20 transition-shadow duration-300 text-s mb-3">
      <h3 className="text-lg italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-1 mb-1">
        Frontend: Lenguajes y herramientas
      </h3>

      <p className="leading-tight flex flex-col gap-2 text-sm">
        <span
          title="Librería de JavaScript para construir interfaces web"
          className="inline-block px-1 py-1 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          React
        </span>{" "}
        <span
          title="Framework para crear apps móviles usando React"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          React Native
        </span>{" "}
        <span
          title="Framework para acelerar el desarrollo con React Native"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Expo
        </span>{" "}
        <span
          title="Lenguaje base del desarrollo web"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          JavaScript
        </span>{" "}
        <span
          title="Estilos en sitios web"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          CSS
        </span>{" "}
        <span
          title="Preprocesador CSS con funcionalidades avanzadas"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Sass
        </span>{" "}
        <span
          title="Plataforma para desplegar apps frontend rápidamente"
          className="inline-block px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 cursor-help"
        >
          Vercel
        </span>
      </p>
    </div>
  );
}

export default Frontend;
