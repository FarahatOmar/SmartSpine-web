import React from "react";
import Layout from "../app/layout";
import Link from "next/link";
import "chart.js";

const IndexPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center mb-20 p-5">
        <div>
          <h1 className="text-3xl font-bold">SmartSpine</h1>
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
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-20 p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to SmartSpine App</h1>
        <p className="text-lg mb-6">
          Take control of your posture with our solution.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/sign-up">Get started</Link>
        </button>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-9 p-10">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">
            Real-Time Posture Monitoring
          </h2>
          <p className="text-lg">
            Track your posture in real-time and receive instant feedback to
            improve your sitting and standing habits.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">
            Personalized Recommendations
          </h2>
          <p className="text-lg">
            Receive personalized recommendations and exercises tailored to your
            posture improvement goals.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-2">
            Data Insights and Analytics
          </h2>
          <p className="text-lg">
            Gain valuable insights into your posture habits over time with
            detailed analytics and visualizations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
