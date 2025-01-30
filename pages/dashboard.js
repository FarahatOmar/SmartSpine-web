import React, { useState, useEffect } from "react";
import Layout from "../app/layout";
import Link from "next/link";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const DashboardPage = () => {
  // State to store real-time posture data
  const [postureData, setPostureData] = useState({
    spineAngle: 0,
    shoulderAngle: 0,
    hipAngle: 0,
  });
  const posture = [
    { date: "2022-01-01", sitting: 8, standing: 6 },
    { date: "2022-01-02", sitting: 7, standing: 7 },
    { date: "2022-01-03", sitting: 6, standing: 8 },
    { date: "2022-01-04", sitting: 7, standing: 7 },
    { date: "2022-01-05", sitting: 8, standing: 6 },
    { date: "2022-01-06", sitting: 6, standing: 8 },
    { date: "2022-01-07", sitting: 7, standing: 7 },
  ];
  const [performanceMetrics, setPerformanceMetrics] = useState({
    averageDeviation: 0,
    improvementTrend: [], // Array of posture improvement trend data
    adherenceToGoals: 0,
  });
  const sampleGamificationData = {
    challenges: [
      {
        id: 1,
        title: "Maintain Good Posture for 30 Minutes",
        description:
          "Keep your spine aligned and shoulders relaxed for 30 minutes straight.",
        reward: "Earn 50 points upon completion.",
      },
    ],
    achievements: [
      {
        id: 1,
        name: "Posture Pro",
        description: "Maintained good posture for 7 consecutive days.",
        icon: "/badges/posture-pro-badge.png",
      },
    ],
    rewards: [
      {
        id: 1,
        name: "50 Points",
        description: "Earned by completing posture challenges.",
        image: "/rewards/50-points.png",
      },
    ],
  };

  // Simulated function to fetch real-time posture data from sensors
  const fetchPostureData = () => {
    // Simulated data for demonstration purposes
    const simulatedPostureData = {
      spineAngle: getRandomInt(90),
      shoulderAngle: getRandomInt(90),
      hipAngle: getRandomInt(90),
    };
    // Update state with simulated posture data
    setPostureData(simulatedPostureData);
  };

  // useEffect hook to simulate fetching real-time posture data
  useEffect(() => {
    const interval = setInterval(() => {
      fetchPostureData();
    }, 1000); // Fetch data every 1 second (adjust as needed)
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Calculate average posture deviation
    const averageDeviation =
      (postureData.spineAngle +
        postureData.shoulderAngle +
        postureData.hipAngle) /
      3;
    // Update state with average deviation
    setPerformanceMetrics((prevState) => ({
      ...prevState,
      averageDeviation,
    }));
  }, [postureData]);

  // Helper function to generate random integer between 0 and max
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const idealAngles = {
    spineAngle: 90,
    shoulderAngle: 90,
    hipAngle: 90,
  };
  const calculatePostureRecommendation = () => {
    const recommendation = {};
    if (postureData.spineAngle < idealAngles.spineAngle) {
      recommendation.spine = "Sit up straight and maintain a neutral spine.";
    }
    if (postureData.shoulderAngle < idealAngles.shoulderAngle) {
      recommendation.shoulder =
        "Relax your shoulders and keep them aligned with your ears.";
    }
    if (postureData.hipAngle < idealAngles.hipAngle) {
      recommendation.hip =
        "Ensure your hips are level and not tilted forward or backward.";
    }
    return recommendation;
  };
  const postureRecommendation = calculatePostureRecommendation();

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center mb-20 p-5">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">SmartSpine</h1>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link href="/feedback">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page Title */}
      <h1 className="text-3xl font-bold p-6 mb-8">Dashboard</h1>
      {/* Posture Metrics */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Posture Metrics</h2>
        {/* Bar chart for posture metrics */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={posture}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sitting"
              name="Sitting Duration (hours)"
              stroke="#8884d8"
            />
            <Line
              type="monotone"
              dataKey="standing"
              name="Standing Duration (hours)"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <p className="text-lg font-bold mr-2">
                Average Posture Deviation:
              </p>
              <p className="text-lg">
                {performanceMetrics.averageDeviation.toFixed(2)}°
              </p>
            </div>
            {/* Additional performance metrics can be displayed here */}
          </div>
        </div>

        {/* Real-time Posture Visualization */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Real-time Body Posture</h2>
          {/* Visualization for real-time body posture */}
          <div className="flex items-center justify-center">
            {/* Display visual representation of body posture */}
            <div className="border border-gray-400 p-4">
              <p className="text-lg">Spine Angle: {postureData.spineAngle}°</p>
              <p className="text-lg">
                Shoulder Angle: {postureData.shoulderAngle}°
              </p>
              <p className="text-lg">Hip Angle: {postureData.hipAngle}°</p>
              {/* Add more body parts and angles as needed */}
            </div>
          </div>
        </div>

        {/* Ideal Posture and Recommendations */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">
            Ideal Posture and Recommendations
          </h2>
          {/* Display ideal posture angles */}
          <div className="mb-4">
            {/* <h3 className="text-lg font-bold">Ideal Posture Angles</h3> */}
            <p className="text-lg">Spine Angle: {idealAngles.spineAngle}°</p>
            <p className="text-lg">
              Shoulder Angle: {idealAngles.shoulderAngle}°
            </p>
            <p className="text-lg">Hip Angle: {idealAngles.hipAngle}°</p>
          </div>
          {/* Display posture recommendations */}
          <div>
            <h3 className="text-lg font-bold">Posture Recommendations</h3>
            {/* Iterate through posture recommendations and display visual representations */}
            {Object.keys(postureRecommendation).map((key) => (
              <div key={key} className="flex items-center mb-2">
                {/* Visual representation of bad posture */}
                <div className="mr-4"></div>
                {/* Recommendation text */}
                <p>{postureRecommendation[key]}</p>
                {/* Visual representation of ideal posture */}
                <div className="ml-auto"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Gamification Elements Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Gamification
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Challenges</h3>
            {sampleGamificationData.challenges.map((challenge) => (
              <div key={challenge.id} className="mb-2">
                <p className="font-semibold text-blue-600">{challenge.title}</p>
                <p className="text-sm text-gray-700">{challenge.description}</p>
                <p className="text-sm text-gray-600">{challenge.reward}</p>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Achievements
            </h3>
            {sampleGamificationData.achievements.map((achievement) => (
              <div key={achievement.id} className="mb-2">
                <p className="font-semibold text-blue-600">
                  {achievement.name}
                </p>
                <p className="text-sm text-gray-700">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Rewards</h3>
            {sampleGamificationData.rewards.map((reward) => (
              <div key={reward.id} className="mb-2">
                <p className="font-semibold text-blue-600">{reward.name}</p>
                <p className="text-sm text-gray-700">{reward.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
