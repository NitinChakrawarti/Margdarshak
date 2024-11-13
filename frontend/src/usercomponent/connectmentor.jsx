import React from 'react';
import MentorSection from './mentors';
const ConnectMentors = () => {
  return (
    <>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800">Connect with Mentors</h2>
      <p className="text-gray-600 mt-2">Find mentors to guide you in your career path.</p>
    </div>
    <div>
      <MentorSection />
    </div>
    </>
  );
};

export default ConnectMentors;
