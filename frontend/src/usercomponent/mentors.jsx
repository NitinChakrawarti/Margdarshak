import React, { useEffect } from 'react';
import MentorProfile from './mentorprofile';
import { useContext } from 'react';
import { BackContext } from '../context/backcontext';
import axios from 'axios';

const MentorSection = () => {
  const [mentordata, setmentordata] = React.useState({});
  const backContext = useContext(BackContext);
  const [mentors, setMentors] = React.useState([]);
  const mentorConnect = (mentor) => {
    backContext.setBack(true);
    setmentordata(mentor);
  };
  useEffect(()=>{
    axios.get(import.meta.env.VITE_MENTORS_API+'/mentors')
    .then((response) => {
      setMentors(response.data);
    }
    )
    .catch((error) => {
      console.error('There was an error!', error);
    });
  })

  return (
    <>
      {backContext.back ? <MentorProfile mentordata={mentordata} />
        : 
        <div className={`bg-yellow-700/20 min-h-screen py-10 px-5 md:px-20 rounded-lg block`}>
          <div className="flex flex-wrap gap-8 md:justify-normal justify-center">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg shadow-md overflow-hidden w-80">
                <img src={mentor.image} alt={mentor.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-black">{mentor.name}</h3>
                  <p className="text-gray-600">{mentor.jobTitle}</p>
                  <p className="text-black mt-2"><strong>Expertise:</strong> {mentor.expertise}</p>
                  <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300" onClick={() => mentorConnect(mentor)}>
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default MentorSection;
