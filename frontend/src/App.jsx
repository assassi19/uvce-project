import React from "react";
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
import History from "./subpages/history";
import PeopleBlog from "./subpages/people-blog";
import DepartmentBlog from "./subpages/department-blog";
import Blog from "./subpages/blog";
import Civil from "./departments/civil";
import Mech from "./departments/mech";
import CSE from "./departments/CSE";
import EEE from "./departments/EEE";
import ECE from "./departments/ECE";
import Arch from "./departments/Arch";
import Footer from "./components/footer";
import Faculty from "./pages/faculty";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/blog" element={<PeopleBlog />} />
        <Route path="/academics" element={<Research />} />
        <Route path="/students" element={<Students />} />
        <Route path="placements" element={<Placements />} />
        <Route path="/library" element={<Library />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/about" element={<About />} />
        <Route path="/events/:id" element={<Blog />} />
        <Route path="/faculty" element={<Faculty />} />

        {/* Departments Routing */}
        <Route path="/departments" element={<Departments />} />
        <Route path="departments/blog" element={<DepartmentBlog />} />
        <Route path="depart-of-civil" element={<Civil />} />
        <Route path="depart-of-mech" element={<Mech />} />
        <Route path="depart-of-computers" element={<CSE />} />
        <Route path="depart-of-Arch" element={<Arch />} />
        <Route path="depart-of-electrical" element={<ECE />} />
        <Route path="depart-of-electronics" element={<EEE />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
