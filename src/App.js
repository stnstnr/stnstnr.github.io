import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Hero from "./components/Hero/Hero";

import Games from "./pages/Games";
import Labs from "./pages/Labs";
import Contact from "./pages/Contact";

import "./styles/global.css";
import "./styles/theme.css";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/games" element={<Games />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
