import React from 'react';
import { TbFileCv, TbUserScreen } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";

const resourceData = [
  {
    icon: <TbFileCv size="4vmax" />,
    title: "Resume Builder",
    description: "Create, preview, and download resumes.",
  },
  {
    icon: <TbUserScreen size="4vmax" />,
    title: "Interview Preparation",
    description: "Mock interview practice and tips.",
  },
  {
    icon: <FaNetworkWired size="4vmax" />,
    title: "Networking Tips",
    description: "Articles and videos on building professional networks.",
  },
];

const Resources = () => {
  return (
    <section id="resources" className="py-16 bg-white px-4 md:px-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {resourceData.map((resource, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4">
              <div>{resource.icon}</div>
              <h3 className="text-xl font-bold">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
