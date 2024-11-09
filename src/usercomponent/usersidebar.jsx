import React, { useState } from 'react';

const Sidebar = ({ setActiveComponent, isOpen, setIsSidebarOpen }) => {


  const sidebarItems = [
    { label: 'Profile', component: 'Profile' },
    { label: 'My Learnings', component: 'My Learnings' },
    { label: 'Connect with Mentors', component: 'Connect with Mentors' },
    { label: 'Goals', component: 'Goals' },
    { label: 'Progress', component: 'Progress' },
    { label: 'Chats', component: 'Chats' },
  ];

  const [activeItem, setActiveItem] = useState('Profile');


  const handleMenuClick = (component) => {
    setActiveComponent(component);
    setActiveItem(component); // Set the clicked item as active
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div
      className={`fixed z-20 top-0 left-0 w-64 h-screen bg-yellow-700 text-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >

      <div className="p-5 text-center md:pt-16 mb-10">
        <span className="text-4xl font-bold border-b-2 pb-4 hidden md:block">मार्गदर्शक</span>
      </div>


      <div className="space-y-4 p-5">
        {sidebarItems.map((item) => (
          <button
            key={item.component}
            onClick={() => handleMenuClick(item.component)}
            className={`block w-full text-left font-bold px-4 py-2 rounded-lg ${
              activeItem === item.component
                ? 'bg-white text-yellow-700'
                : 'text-white/80 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
