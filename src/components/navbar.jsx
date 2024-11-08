import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navele = [
  {
    button: "Home",
    link: "/"
  },
  {
    button: "About",
    link: "/about"
  },
  {
    button: "Our Mentors",
    link: "/ourmentors"
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-yellow-700">
              Margdarshak
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navele.map((ele, index) => (
              <Link
                to={ele.link}
                className="text-gray-800 hover:text-yellow-700 transition duration-300 font-semibold"
                key={index}
              >
                {ele.button}
              </Link>
            ))}
            <button className="mt-4 md:mt-0 px-6 py-2 text-yellow-700 rounded-lg shadow-lg font-semibold bg-white hover:bg-white/50 transition duration-300">
              Sign Up
            </button>
            <button className="mt-4 md:mt-0 px-6 py-2 bg-yellow-700 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
              Sign In
            </button>

          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-yellow-800 hover:text-yellow-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* <Link
              to="/" 
              className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link> */}
            {navele.map((ele, index) => (
              <Link
                to={ele.link}
                className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium" key={index}
              >
                {ele.button}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
