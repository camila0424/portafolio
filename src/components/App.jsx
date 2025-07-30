import "../styles/App.scss";
import Header from "./layout/Header";
import Hero from "./sections/Hero";
import AboutMe from "./sections/about_me/AboutMe";
import Backend from "./sections/about_me/Backend";
import Design from "./sections/about_me/Design";
import Frontend from "./sections/about_me/Frontend";
import TimeManagement from "./sections/about_me/TimeManagement";
import WorkflowTools from "./sections/about_me/WorkflowTools";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section>
        <AboutMe />

        <div>
          <Frontend />
          <Backend />
          <WorkflowTools />
          <Design />
          <TimeManagement />
        </div>
      </section>
    </>
  );
}

export default App;
