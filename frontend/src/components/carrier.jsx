import React from 'react';
import Goal from '../assets/goal.gif'
import Progress from '../assets/progress.gif'
import Feedback from '../assets/feedback.gif'

const carreer = [
  {
    head: "Set Goals",
    descp: "Define and set specific career goals.",
    img: Goal
  },
  {
    head: "Milestone Tracker",
    descp: "Track progress towards each goal.",
    img: Progress
  },
  {
    head: "Feedback and Reviews",
    descp: "Feedback from career coaches or mentors.",
    img: Feedback
  },

]
const CareerPlanning = () => {
  return (
    <section id="career-planning" className="py-16 bg-gray-100 px-4 md:px-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Career Planning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {
            carreer.map((ele, index) => (
              <div key={index} className="p-4 bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4">
                <div className='h-20 w-20'>
                  <img src={ele.img} />
                </div>
                <h3 className="text-xl font-bold ">{ele.head}</h3>
                <p className="text-gray-600">{ele.descp}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section >
  );
};

export default CareerPlanning;
