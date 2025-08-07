import GitHub from "../../images/social/gitHub_dark.svg";
import Linkedin from "../../images/social/linkedin.svg";
function Footer() {
  return (
    <>
      <section className="bg-gray-900 py-4 px-4 ">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 CamilaBedoya. Todos los derechos reservados.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/camila0424"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="GitHub" className="w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/camila-bedoya/"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" className="w-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
