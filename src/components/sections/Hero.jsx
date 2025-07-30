import Logo from "../../images/logo.png";
function Hero() {
  return (
    <section>
      <img src={Logo} alt="Logo de Camila Bedoya" />
      <h1>Desarrolladora</h1>
      <h1>Full Stack</h1>
      <h3>Junior</h3>
      <button>Ver proyectos</button>
      <button>Contacto</button>
    </section>
  );
}

export default Hero;
