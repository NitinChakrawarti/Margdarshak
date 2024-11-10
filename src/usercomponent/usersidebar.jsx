// import { useContext } from 'react';
// import { BackContext } from '../context/backcontext';
// import { useState } from 'react';

// const Sidebar = ({ setActiveComponent, isOpen, setIsSidebarOpen }) => {

//   const backContext = useContext(BackContext);

//   const sidebarItems = [
//     { label: 'Profile', component: 'Profile' },
//     { label: 'My Learnings', component: 'My Learnings' },
//     { label: 'Connect with Mentors', component: 'Connect with Mentors' },
//     { label: 'Goals', component: 'Goals' },
//     { label: 'Progress', component: 'Progress' },
//     { label: 'Chats', component: 'Chats' },
//   ];

//   const [activeItem, setActiveItem] = useState('Profile');


//   const handleMenuClick = (component) => {
//     backContext.setBack(false)
//     setActiveComponent(component);
//     setActiveItem(component); 
//     setIsSidebarOpen(false); 
//   };

//   return (
//     <div
//       className={`fixed z-20 top-0 left-0 w-64 h-screen bg-yellow-700 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
//         }`}
//     >

//       <div className="p-5 text-center md:pt-16 mb-10">
//         <span className="text-4xl font-bold border-b-2 pb-4 hidden md:block">मार्गदर्शक</span>
//       </div>


//       <div className="space-y-4 p-5">
//         {sidebarItems.map((item) => (
//           <button
//             key={item.component}
//             onClick={() => handleMenuClick(item.component)}
//             className={`block w-full text-left font-bold px-4 py-2 rounded-lg ${activeItem === item.component
//               ? 'bg-white text-yellow-700'
//               : 'text-white/80 hover:text-white'
//               }`}
//           >
//             {item.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




import { useContext } from 'react';
import { BackContext } from '../context/backcontext';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { useState } from 'react';

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const backContext = useContext(BackContext);
  const navigate = useNavigate();  // Initialize useNavigate

  const sidebarItems = [
    { label: 'Profile', component: '/profile' },
    { label: 'My Learnings', component: '/mylearnings' },
    { label: 'Connect with Mentors', component: '/connectmentor' },
 
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

      <div className="space-y-4 p-5">
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
    </div>
  );
};

export default Sidebar;
