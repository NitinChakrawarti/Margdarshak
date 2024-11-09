import React, { useState } from 'react';

const Profile = () => {
  const [userType, setUserType] = useState('Tech');
  const [selectedTags, setSelectedTags] = useState([]);

  const techTags = ['Development', 'Machine Learning', 'Data Science'];
  const nonTechTags = ['Finance', 'Management', 'Marketing'];

  const handleTagToggle = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">User Profile</h3>
      <form className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-2 p-2 border rounded-lg"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 p-2 border rounded-lg"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-600">Contact No.</label>
          <input
            type="tel"
            placeholder="Enter your contact number"
            className="w-full mt-2 p-2 border rounded-lg"
          />
        </div>

        {/* User Type */}
        <div>
          <label className="block text-gray-600">Category</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full mt-2 p-2 border rounded-lg"
          >
            <option value="Tech">Tech</option>
            <option value="Non-Tech">Non-Tech</option>
          </select>
        </div>

        {/* Tags Selection */}
        <div>
          <label className="block text-gray-600 mb-2">Skills/Interest</label>
          <div className="flex flex-wrap gap-2">
            {(userType === 'Tech' ? techTags : nonTechTags).map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagToggle(tag)}
                className={`px-4 py-2 rounded-lg border ${selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className='w-40'>
          <button
            type="submit"
            className="mt-4 w-full p-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Save Profile
          </button>
        </div>

      </form>
    </div>
  );
};

export default Profile;
