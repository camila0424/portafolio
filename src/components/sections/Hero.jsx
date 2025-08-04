import Logo from "../../images/logo.png";
function Hero() {
  return (
    <section
      id="hero"
      className="bg-black  text-white w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
    >
      {/* Títulos */}
      <div>
        <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-600 mb-2 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
          Desarrolladora Full Stack
        </h1>
        <h3 className="text-3xl mt-2  italic text-white">Junior</h3>
      </div>

      {/* Imagen debajo del texto */}
      <img
        src={Logo}
        alt="Logo de Camila Bedoya"
        className="w-70 h-auto -mt-13"
      />
      <h2 className="text-5xl  bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent -mt-15 mb-8">
        Camila Bedoya
      </h2>

      <h3 className="text-2xl font-medium italic bg-gradient-to-r from-purple-700  via-indigo-400  to-purple-700 bg-clip-text text-transparent mt-0 mb-15">
        Contruyendo el futuro, línea por línea.
      </h3>

      {/* Botones */}
      <div className="flex gap-6  mb-10">
        <button className="bg-purple-600 hover:bg-black shadow-lg shadow-purple-600/50 text-white px-5 py-2  rounded  transition">
          Ver proyectos
        </button>
        <button className="bg-purple-600 hover:bg-black shadow-lg shadow-purple-600/50 text-white px-5 py-2 rounded  transition">
          Contacto
        </button>
      </div>
    </section>
  );
}

export default Hero;
