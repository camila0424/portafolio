import "../styles/tailwind.css";
import Footer from "./layout/Footer";

import Header from "./layout/Header";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import AboutMe from "./sections/about_me/AboutMe";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
