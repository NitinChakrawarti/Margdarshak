import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
// import About from "./pages/about"; // Add About component
// import OurMentors from "./pages/ourmentors"; // Add Our Mentors component
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourmentors" element={<OurMentors />} />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;


