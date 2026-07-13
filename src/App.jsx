import "./App.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Git",
  ];

  return (
    <>
      <Header
        name="Bhumit Maheshwari"
        themeColor="#4a6fa5"
      />

      <NavBar />

      <div className="app-wrapper">
        <About
          college="Charusat University"
        />

        <Skills
          skillList={skills}
        />

        <Projects />
      </div>

      <Footer
        email="bhumit@example.com"
      />
    </>
  );
}

export default App;