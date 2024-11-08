import React from 'react';
import Goal from '../assets/goal.gif'
import Progress from '../assets/progress.gif'
import Feedback from '../assets/feedback.gif'


const CareerPlanning = () => {
  return (
    <section id="career-planning" className="py-16 bg-gray-100 px-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Career Planning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-4 bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4">
            <div className='h-20 w-20'>
              <img src={Goal} />
            </div>
            <h3 className="text-xl font-bold ">Set Goals</h3>
            <p className="text-gray-600">Define and set specific career goals.</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4">
            <div className='h-20 w-20'>
              <img src={Progress} />
            </div>
            <h3 className="font-bold text-xl">Milestone Tracker</h3>
            <p className="text-gray-600">Track progress towards each goal.</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4">
            <div className='h-20 w-20'>
              <img src={Feedback} />
            </div>
            <h3 className="font-bold text-xl">Feedback and Reviews</h3>
            <p className="text-gray-600">Receive feedback from career coaches or mentors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPlanning;
