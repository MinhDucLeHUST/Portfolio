import React, { useState, useRef } from "react";
import "./App.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  const tabs = ["about", "skills", "projects"];
  const [modalType, setModalType] = useState(null);
  const contactRef = useRef(null);
  const [showContact, setShowContact] = useState(false);
  const handleHireMe = () => {
    setShowContact(true);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">My Portfolio</h1>
        <nav className="nav">
          <button onClick={() => setModalType("about")}>About Me</button>
          <button onClick={() => setModalType("skills")}>Skills</button>
          <button onClick={() => setModalType("projects")}>Projects</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Hi 👋, <br /> I'm <span className="highlight">Minh Duc</span>
          </h2>
          <p>I am a Software Embedded Engineer with experience since 2022</p>
        </div>
        {/* <div className="hero-image">
          <img src={avatar} alt="Profile" />
        </div> */}
      </section>

      {/* Modal */}
      {modalType && (
        <div className="modal-overlay" onClick={() => setModalType(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModalType(null)}>
              &times;
            </button>

            {/* Tab bar */}
            <div className="modal-tabs">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`modal-tab ${modalType === tab ? "active" : ""}`}
                  onClick={() => setModalType(tab)}
                >
                  {tab === "about"
                    ? "About Me"
                    : tab === "skills"
                    ? "Skills"
                    : "Projects"}
                </div>
              ))}
            </div>

            {/* Modal body */}
            <div className="modal-body">
              {modalType === "about" && <About />}
              {modalType === "skills" && <Skills />}
              {modalType === "projects" && <Projects />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
