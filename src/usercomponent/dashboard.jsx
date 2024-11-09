import React, { useState } from 'react';
import Profile from './profile';
import MyLearnings from './mylearnings';
import ConnectMentors from './connectmentor';
import Goals from './goals';
import Progress from './progress';
import Chats from './chats';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  const [activeComponent, setActiveComponent] = useState('Profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Profile':
        return <Profile />;
      case 'My Learnings':
        return <MyLearnings />;
      case 'Connect with Mentors':
        return <ConnectMentors />;
      case 'Goals':
        return <Goals />;
      case 'Progress':
        return <Progress />;
      case 'Chats':
        return <Chats />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="flex md:flex-row flex-col bg-gray-50 min-h-screen">
      {/* Hamburger Icon for Mobile Sidebar Toggle */}
      <div className='h-16 shadow-lg w-full z-30 bg-white md:hidden fixed' >
        <div className='flex justify-end items-center'>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden fixed top-3 left-4  p-2 bg-yellow-700 text-white rounded-md focus:outline-none"
          >
            {/* Hamburger Icon */}
            {isSidebarOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <div className='flex justify-center items-center h-full py-4 pr-6'>
            <h1 className='font-bold text-xl'>मार्गदर्शक</h1>
          </div>
        </div>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        setActiveComponent={setActiveComponent}
        setIsSidebarOpen={setIsSidebarOpen}
        className="sticky top-3"
      />

   
      <div className="flex-1 pt-5 mt-20 md:mt-8 md:pt-0 md:pl-10 md:ml-64 ">{renderComponent()}</div>
    </div>
  );
};

export default DashboardLayout;
