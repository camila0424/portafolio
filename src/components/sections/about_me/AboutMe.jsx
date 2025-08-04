import Experience from "./Experience";

function AboutMe() {
  return (
    <section
      id="about-me"
      className="bg-gray-950 text-white min-h-6 flex flex-col items-center text-center pt-20 pb-1"
    >
      <h2 className="text-6xl bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
        Sobre mí
      </h2>
      <p className="text-2xl italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-3 mb-5">
        En esta sección te cuento quién soy.
      </p>

      <div className="max-w-6xl p-6 mb-4 bg-gray-950 rounded-lg border border-gray-900 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/20 transition-shadow duration-300">
        <div
          className="text-center
        font-s"
        >
          <p className="text-gray-400 leading-relaxed">
            Soy Camila Bedoya, desarrolladora Fullstack con fuerte enfoque en
            frontend y pasión por crear experiencias digitales intuitivas,
            accesibles y visualmente atractivas. Mi trabajo combina creatividad
            y lógica para transformar ideas en interfaces dinámicas, funcionales
            y centradas en el usuario.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Mi experiencia previa como docente me ha dotado de empatía, escucha
            activa y comunicación asertiva, habilidades que potencian mi
            capacidad para crear soluciones tecnológicas humanas, efectivas y
            orientadas al usuario, así como para colaborar en equipos
            multidisciplinarios.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Me motiva formar parte de equipos que valoran la innovación, el
            aprendizaje continuo y el trabajo colaborativo.
          </p>
        </div>
      </div>
      <Experience />
    </section>
  );
}

export default AboutMe;
