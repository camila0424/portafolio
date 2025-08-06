import Frontend from "./Frontend";
import Backend from "./Backend";
import Design from "./Design";
import WorkflowTools from "./WorkflowTools";
import TimeManagement from "./TimeManagement";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white min-h-screen flex flex-col items-center text-center pt-16 px-4 pb-4 overflow-x-hidden"
    >
      <div className="max-w-7xl w-full flex flex-col items-center">
        <p className="text-2xl italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-3 mb-5">
          Estas son las{" "}
          <span className="text-3xl bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
            Tecnologías
          </span>{" "}
          con las que actualmente trabajo.
        </p>

        {/* Contenedor de skills */}
        <div className="flex flex-col md:flex-row md:flex-nowrap gap-4">
          <Frontend />
          <Backend />
          <Design />
          <WorkflowTools />
          <TimeManagement />
        </div>
      </div>
    </section>
  );
}

export default Skills;
