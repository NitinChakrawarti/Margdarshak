import React from 'react';

// Import mentors data
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

const Mentor = () => {
  return (
    <section className="bg-gray-50 py-16 px-5 md:px-20 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-8">
          Our Top-Class Mentors
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Learn from the best in the industry. Our mentors bring years of experience from top companies.
        </p>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 duration-300">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-700 mb-1">{mentor.name}</h3>
              <p className="text-gray-600 font-medium">{mentor.jobTitle}</p>
              <p className="text-gray-500 text-sm mt-2"><strong>Expertise:</strong> {mentor.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentor;
