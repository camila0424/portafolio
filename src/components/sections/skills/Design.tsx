import { useState, useEffect, useRef } from "react";

interface Tool {
  name: string;
  desc: string;
}

function Design() {
  const tools: Tool[] = [
    { name: "Figma", desc: "Diseño de interfaces, prototipos y sistemas de diseño colaborativos" },
    { name: "Adobe Illustrator", desc: "Diseño gráfico basado en vectores para logotipos, ilustraciones y branding" },
    { name: "Adobe Photoshop", desc: "Edición de imágenes, retoque fotográfico y creación de gráficos digitales" },
    { name: "Prezi", desc: "Creación de presentaciones visuales e interactivas para comunicar ideas" },
    { name: "Canva", desc: "Diseño gráfico accesible para redes sociales, presentaciones y contenido visual" },
  ];

  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveTooltip(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="px-2 py-4 bg-gray-950 rounded-lg border border-gray-900 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/20 transition-shadow duration-300 text-sm mb-3"
    >
      <h3 className="text-lg italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-1 mb-3">
        Diseño visual y herramientas creativas
      </h3>
      <p className="leading-tight flex flex-col gap-4 text-sm items-center">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="relative w-44 flex justify-center"
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <button
              type="button"
              onClick={() =>
                setActiveTooltip(activeTooltip === tool.name ? null : tool.name)
              }
              className="w-full text-center px-3 py-2 bg-gray-800 text-white rounded-full border border-purple-500 shadow-sm shadow-purple-500/50 hover:bg-purple-900 hover:shadow-purple-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {tool.name}
            </button>
            {activeTooltip === tool.name && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full text-center bg-gray-700 text-white text-xs rounded-md p-2 shadow-lg z-10 animate-fade-in">
                {tool.desc}
              </div>
            )}
          </div>
        ))}
      </p>
    </div>
  );
}

export default Design;
