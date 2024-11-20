import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about.jsx"; // Add About component
import OurMentors from "./pages/mentors"; // Add Our Mentors component
import Footer from "./components/footer";
import SignUp from "./pages/signup.jsx";
import { Pagenotfound } from "./pages/pagenotfound.jsx";

function Landing() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourmentors" element={<OurMentors />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Landing;


