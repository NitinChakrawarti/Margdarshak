import React from 'react';
import MentorProfile from './mentorprofile';
import { useContext } from 'react';
import { BackContext } from '../context/backcontext';
const mentors = [
  {
    id: 1,
    name: 'Alex Johnson',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',

    jobTitle: 'Senior Software Engineer ( Google )',
    expertise: 'Development, Machine Learning',
  },
  {
    id: 2,
    name: 'Maria Gonzalez',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    jobTitle: 'Data Scientist ( Facebook )',
    expertise: 'Data Science, AI',
  },
  {
    id: 3,
    name: 'John Smith',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    jobTitle: 'Product Manager ( Amazon )',
    expertise: 'Product Management, Marketing',
  },
  {
    id: 4,
    name: 'Sarah Clark',
    image: 'https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&w=600',
    jobTitle: 'UX Designer ( Apple )',
    expertise: 'Design, User Experience',
  },
  {
    id: 5,
    name: 'Chris Lee',
    image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600',
    jobTitle: 'Software Engineer ( Microsoft )',
    expertise: 'Development, Cloud Computing',
  },
  {
    id: 6,
    name: 'Emily Davis',
    image: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600',
    jobTitle: 'Marketing Manager ( Tesla )',
    expertise: 'Marketing, Content Creation',
  }
];

const MentorSection = () => {
  const [mentordata, setmentordata] = React.useState({});
  const backContext = useContext(BackContext);
  const mentorConnect = (mentor) => {
    backContext.setBack(true);
    setmentordata(mentor);
  };

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
