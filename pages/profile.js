import React from "react";
import Layout from "../app/layout";
import {
  IoPerson,
  IoMail,
  IoCalendar,
  IoMaleFemale,
  IoResize,
  IoFitness,
} from "react-icons/io5";

const ProfilePage = () => {
  // test user data (replace with actual data from backend)
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    gender: "Male",
    height: "180 cm",
    weight: "75 kg",
    // Add more user data as needed
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>

        {/* User profile information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-bold mb-2">Personal Information</h2>
            <div className="flex items-center mb-2">
              <IoPerson className="text-gray-500 mr-2" />
              <p className="text-lg">{userData.name}</p>
            </div>
            <div className="flex items-center mb-2">
              <IoMail className="text-gray-500 mr-2" />
              <p className="text-lg">{userData.email}</p>
            </div>
            <div className="flex items-center mb-2">
              <IoCalendar className="text-gray-500 mr-2" />
              <p className="text-lg">{userData.age} years old</p>
            </div>
            <div className="flex items-center mb-2">
              <IoMaleFemale className="text-gray-500 mr-2" />
              <p className="text-lg">{userData.gender}</p>
            </div>
          </div>
          {/* Physical Information */}
          <div>
            <h2 className="text-xl font-bold mb-2">Physical Information</h2>
            <div className="flex items-center mb-2">
              <IoResize className="text-gray-500 mr-2" />
              <p className="text-lg">{userData.height}</p>
            </div>
            <div className="flex items-center mb-2">
              <IoFitness className="text-gray-500 mr-2" />
              <p className="text-lg">{userData.weight}</p>
            </div>
            {/* Add more physical information as needed */}
          </div>
        </div>
        {/* Edit profile button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
