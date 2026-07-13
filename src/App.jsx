import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header
        name="Bhumit Maheshwari"
        themeColor="#4a6fa5"
      />

      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home skillList={skills} college="Charusat University" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer email="bhumit@example.com" />
    </div>
  );
}

export default App;