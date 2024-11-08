import React from 'react';
import { TbFileCv } from "react-icons/tb";
import { TbUserScreen } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";

const Resources = () => {
  return (
    <section id="resources" className="py-16 bg-white  px-28">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">

          <div className="p-4 bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4">
            <div>
              <TbFileCv size="4vmax" />
            </div>
            <h3 className="text-xl font-bold ">Resume Builder</h3>
            <p className="text-gray-600">Create, preview, and download resumes.</p>
          </div>

          <div className="p-4 bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4">
            <div>
              <TbUserScreen size="4vmax" />
            </div>
            <h3 className="text-xl font-bold ">Interview Preparation</h3>
            <p className="text-gray-600">Mock interview practice and tips.</p>
          </div>

          <div className="p-4 bg-gray-200 rounded-lg flex flex-col justify-center items-center gap-4">
            <div>
              <FaNetworkWired size="4vmax" />
            </div>
            <h3 className="text-xl font-bold ">Networking Tips</h3>
            <p className="text-gray-600">Articles and videos on building professional networks.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
