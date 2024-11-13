import React from 'react';
// Import specific icons from react-icons library
import { FaUserGraduate, FaHandshake, FaChartLine, FaBullseye, FaBriefcase, FaUsers } from 'react-icons/fa';

const About = () => {
  // Array of card data
  const features = [
    {
      title: 'Personalized Career Assessment',
      description:
        'Our platform offers customized assessments that analyze your strengths, weaknesses, and interests to help you discover suitable career paths tailored just for you.',
      icon: <FaUserGraduate className="w-16 h-16 text-black mb-4" />,
    },
    {
      title: 'Connect with Mentors',
      description:
        'मार्गदर्शक allows you to connect with industry experts and mentors who can guide you, provide career insights, and support your professional growth.',
      icon: <FaHandshake className="w-16 h-16 text-black mb-4" />,
    },
    {
      title: 'Track Your Learning Progress',
      description:
        'With tools to track your progress, मार्गदर्शक helps you stay motivated by setting achievable goals and monitoring your learning journey.',
      icon: <FaChartLine className="w-16 h-16 text-black mb-4" />,
    },
    {
      title: 'Goal Setting & Achievement',
      description:
        'Set both short-term and long-term career goals. मार्गदर्शक provides you with the structure and resources needed to reach each milestone.',
      icon: <FaBullseye className="w-16 h-16 text-black mb-4" />,
    },
    {
      title: 'Job & Internship Opportunities',
      description:
        'Access a curated list of job and internship opportunities that align with your skills and career interests, making the search process easier.',
      icon: <FaBriefcase className="w-16 h-16 text-black mb-4" />,
    },
    {
      title: 'Community & Peer Support',
      description:
        'Join a supportive community where you can share experiences, seek advice, and grow alongside peers on similar career journeys.',
      icon: <FaUsers className="w-16 h-16 text-black mb-4" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-5 md:px-20 pt-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-700 mb-8">
          About मार्गदर्शक
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          Your career companion for guidance, growth, and success.
        </p>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          मार्गदर्शक is a comprehensive platform designed to assist individuals in navigating their career paths. Whether you're a student, a recent graduate, or a professional looking to switch fields, our mission is to provide tailored guidance to help you achieve your goals.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 duration-300">
              {feature.icon}
              <h3 className="text-2xl font-semibold text-yellow-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
