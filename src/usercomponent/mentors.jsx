import React from 'react';

const mentors = [
  {
    id: 1,
    name: 'Alex Johnson',
    image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    jobTitle: 'Senior Software Engineer ( Google )', 
    expertise: 'Development, Machine Learning',
  },
  {
    id: 2,
    name: 'Maria Gonzalez',
    image: 'https://via.placeholder.com/150',
    jobTitle: 'Data Scientist ( Facebook )',
    expertise: 'Data Science, AI',
  },
  {
    id: 3,
    name: 'John Smith',
    image: 'https://via.placeholder.com/150',
    jobTitle: 'Product Manager ( Amazon )',
    expertise: 'Product Management, Marketing',
  },
  {
    id: 4,
    name: 'Sarah Clark',
    image: 'https://via.placeholder.com/150',
    jobTitle: 'UX Designer ( Apple )',
    expertise: 'Design, User Experience',
  },
  {
    id: 5,
    name: 'Chris Lee',
    image: 'https://via.placeholder.com/150',
    jobTitle: 'Software Engineer ( Microsoft )',
    expertise: 'Development, Cloud Computing',
  },
  {
    id: 6,
    name: 'Emily Davis',
    image: 'https://via.placeholder.com/150',
    jobTitle: 'Marketing Manager ( Tesla )',
    expertise: 'Marketing, Content Creation',
  }
];

const MentorSection = () => {
  return (
    <div className="bg-yellow-700/20 min-h-screen py-10 px-5 md:px-20 rounded-lg">
      <h2 className="text-4xl font-bold text-white text-center mb-10">Connect with Mentors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={mentor.image} alt={mentor.name} className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-black">{mentor.name}</h3>
              <p className="text-gray-600">{mentor.jobTitle}</p>
              <p className="text-black mt-2"><strong>Expertise:</strong> {mentor.expertise}</p>
              <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
