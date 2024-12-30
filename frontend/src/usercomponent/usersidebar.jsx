import { useContext } from 'react';
import { BackContext, LoginContext, UserContext } from '../context/backcontext';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { IoPerson } from "react-icons/io5";
import Cookies from "js-cookie";

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const backContext = useContext(BackContext);
  const loginContext = useContext(LoginContext);
  const userContext = useContext(UserContext);

  const navigate = useNavigate();  // Initialize useNavigate

  const { user, isAuthenticated, logout } = useAuth0();

  const sidebarItems = [
    // { label: 'Profile', component: '/' },
    { label: 'My Learnings', component: '/mylearnings' },
    { label: 'Connect with Mentors', component: '/connectmentor' },
    { label: 'Blogs', component: '/blog' },
    { label: 'Chats', component: '/chats' },
  ];

  const [activeItem, setActiveItem] = useState('/profile');

  const handleMenuClick = (component) => {
    backContext.setBack(false);
    setActiveItem(component);
    setIsSidebarOpen(false);
    navigate(component);  // Navigate to the selected route
  };

  return (
    <div
      className={`fixed z-20 top-0 left-0 w-64 h-screen bg-yellow-700 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
    >
      <div className="p-5 text-center md:pt-16 mb-10">
        <span className="text-4xl font-bold border-b-2 pb-4 hidden md:block">मार्गदर्शक</span>
      </div>

      <div className="h-[70%] flex flex-col justify-between space-y-4 p-5">
        <div>
          <p className=' w-full text-left font-bold py-2 rounded-lg flex px-4 items-center gap-2 '> <IoPerson /> {userContext.user.name} </p>
          {sidebarItems.map((item) => (
            <button
              key={item.component}
              onClick={() => handleMenuClick(item.component)}
              className={`block w-full text-left font-bold px-4 py-2 rounded-lg ${activeItem === item.component
                ? 'bg-white text-yellow-700'
                : 'text-white/80 hover:text-white'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <button
            onClick={() => {
              Cookies.remove("logintoken");
              loginContext.setlogin(false)
              navigate('/signup')
              user
                ? logout({ logoutParams: { returnTo: window.location.origin } })
                : loginContext.setlogin(false) && userContext.setuser(null);
            }}
           
    
            className="block text-left font-bold px-4 text-xl rounded-lg text-white hover:text-white/70"
          >
            Logout
          </button>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
