import { useState } from 'react';
import Alltasks from './alltasks';

const MyLearnings = () => {
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800">My Learnings</h2>
        <p className="text-gray-600 mt-2">Track your completed tasks and new skills here.</p>
      </div>
      <div className='pl-6'>
        <h1 className="font-semibold text-2xl  my-4">Tasks</h1>
        <Alltasks />
      </div>
    </>
  );
};

export default MyLearnings;
