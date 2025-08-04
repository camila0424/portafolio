import "../styles/tailwind.css";

import Header from "./layout/Header";
import Hero from "./sections/Hero";
import AboutMe from "./sections/about_me/AboutMe";
import Skills from "./sections/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
