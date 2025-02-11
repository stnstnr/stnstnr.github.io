import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const projects = [
  { id: 1, name: 'VR Tower Defense', description: 'A VR game mixing factory mechanics with tower defense.', image: 'vr_project.png' },
  { id: 2, name: 'Multiplayer Board Game', description: 'A strategic multiplayer board game built in Unity.', image: 'board_game.png' },
  { id: 3, name: 'Payroll Automation', description: 'Python script automating payroll processing.', image: 'automation.png' }
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Header = () => (
  <header>
    <div className="logo-container">
      <img src="/logo.png" alt="Portfolio Logo" />
    </div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/education">Education</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

const Home = () => (
  <div className="content">
    <div className="home-logo-container">
      <img src="/logo.png" alt="Stronghold Software Logo" className="large-logo" />
    </div>
    <h2>Austin Stoner</h2>
    <h3>Software Developer & IT Operations Leader</h3>
    <p>Experienced in software development, automation, and cross-platform system management with a passion for problem-solving and efficiency.</p>
  </div>
);

const Portfolio = () => (
  <div className="project-grid">
    {projects.map((project) => (
      <div key={project.id} className="project-card">
        <img src={project.image} alt={project.name} />
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
);

const Skills = () => (
  <div className="content">
    <h2>Key Skills</h2>
    <ul>
      <li>Software Development (Unity, C#, API Integration)</li>
      <li>Cross-Platform System Management (Windows, macOS, Linux, Networking, Security)</li>
      <li>Automation & Custom Solutions (Python, Visual Basic, Scripting)</li>
      <li>Leadership & Team Management</li>
      <li>Finance & Compliance (Payroll, Taxes, Audits, Regulations)</li>
      <li>Effective Communication & Troubleshooting</li>
    </ul>
  </div>
);

const Experience = () => (
  <div className="content">
    <h2>Professional Experience</h2>
    <h3>Operations Manager & IT Specialist</h3>
    <p>Kind Castle (Retail Chain) | December 2019 – Present</p>
    <ul>
      <li>Manage multiple retail locations across Colorado, supervising 30+ employees.</li>
      <li>Developed custom API-driven menus and Python automation scripts.</li>
      <li>Oversee cross-platform systems, local servers, and network devices.</li>
    </ul>
    <h3>Software Developer</h3>
    <p>SynaptixGames | August 2015 – May 2020</p>
    <ul>
      <li>Published Unity games across PC, mobile, and VR platforms.</li>
      <li>Integrated multiplayer functionality and backend services.</li>
      <li>Implemented agile workflows and Git version control.</li>
    </ul>
  </div>
);

const Education = () => (
  <div className="content">
    <h2>Education</h2>
    <p><strong>Bachelor of Science in Computer Science</strong></p>
    <p>Colorado Mesa University (2011 – 2015)</p>
  </div>
);

const Contact = () => (
  <div className="content">
    <h2>Contact Me</h2>
    <p>Email: austin@stronghold-software.com</p>
    <p>Location: Grand Junction, CO</p>
  </div>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 Austin Stoner. All Rights Reserved.</p>
  </footer>
);

export default App;
