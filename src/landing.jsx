import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about.jsx"; // Add About component
import OurMentors from "./pages/mentors"; // Add Our Mentors component
import Footer from "./components/footer";
import SignUp from "./pages/signup.jsx";

function Landing() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourmentors" element={<OurMentors />} />
        <Route path="/user" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Landing;


