import { useState, useEffect } from "react";
import LogoLetras from "../../images/CB.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para scroll suave
  const smoothScroll = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Cerrar menú al hacer resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Items del menú
  const navItems = [
    { id: "hero", name: "Inicio" },
    { id: "skills", name: "Habilidades" },
    { id: "projects", name: "Proyectos" },
    { id: "about-me", name: "Sobre mí" },
    { id: "contact", name: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 shadow-sm h-14">
      <nav className="container mx-auto flex items-center justify-between h-full px-4">
        {/* Logo */}
        <div
          onClick={() => smoothScroll("hero")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img
            src={LogoLetras}
            alt="Logo Camila Bedoya"
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex items-center space-x-3 h-full">
          {navItems.map((item) => (
            <li key={item.id} className="h-full flex items-center">
              <button
                onClick={() => smoothScroll(item.id)}
                className="text-xs text-gray-300 hover:text-white px-2 py-1 h-full flex items-center transition-colors duration-200 hover:bg-gray-800/30"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Menú Mobile */}
        <button
          className="md:hidden text-gray-300 p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <svg className="w-5 h-5">
            {isMenuOpen ? (
              <path
                stroke="currentColor"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú Mobile Abierto */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-14 left-0 right-0 bg-gray-900 border-t border-gray-700 shadow-lg">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="border-b border-gray-800 last:border-b-0"
                >
                  <button
                    onClick={() => smoothScroll(item.id)}
                    className="w-full text-left text-gray-300 hover:text-white px-4 py-3 hover:bg-gray-800/50 transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
