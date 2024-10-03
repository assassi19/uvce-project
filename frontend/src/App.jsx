import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./pages/about";
import People from "./pages/people";
import Research from "./pages/research";
import Header from "./components/header";
import Departments from "./pages/departments";
import Students from "./pages/students";
import Library from "./pages/library";
import Alumini from "./pages/alumini";
import Careers from "./pages/careers";
import Notifications from "./pages/notifications";
import Placements from "./pages/placements";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/research" element={<Research />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/students" element={<Students />} />
        <Route path="placements" element={<Placements />} />
        <Route path="/library" element={<Library />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
