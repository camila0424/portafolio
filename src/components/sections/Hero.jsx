import Logo from "../../images/logo.png";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-screen bg-black text-white overflow-hidden px-4 pt-20 md:pt-13"
    >
      <div className="flex flex-col items-center justify-center text-center h-full gap-6 md:gap-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-2">
            Desarrolladora
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent mb-1">
            Full Stack
          </h1>
          <h3 className="text-lg md:text-3xl italic text-white">Junior</h3>
        </div>

        <img
          src={Logo}
          alt="Logo de Camila Bedoya"
          className="w-32 md:w-40 md:-mt-7 h-auto"
        />

        <h2 className="text-3xl md:text-5xl md:-mt-10 font-bold bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent pb-2.5">
          Camila Bedoya
        </h2>

        <h3 className="text-lg md:text-2xl font-medium italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent">
          Construyendo el futuro, línea por línea.
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 mt-3 md:-mt-3">
          <button className="bg-purple-600 hover:bg-black shadow-lg shadow-purple-600/50 text-white px-6 py-2 rounded text-lg transition">
            Ver proyectos
          </button>
          <button className="bg-purple-600 hover:bg-black shadow-lg shadow-purple-600/50 text-white px-6 py-2 rounded text-lg transition">
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
