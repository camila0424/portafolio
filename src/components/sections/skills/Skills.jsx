import Frontend from "./Frontend";
import Backend from "./Backend";
import Design from "./Design";
import WorkflowTools from "./WorkflowTools";
import TimeManagement from "./TimeManagement";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white min-h-screen flex flex-col items-center text-center pt-19"
    >
      <div className="flex flex-wrap justify-center gap-4 max-w-7xl">
        <p className="text-3xl italic bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-3 mb-5">
          Estás son las tecnologías con las que actualmente trabajo.
        </p>
        <div className="flex basis-full gap-4 justify-center">
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
