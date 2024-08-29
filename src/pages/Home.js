// Home.js
import React from 'react';
import CourseList from '../components/CourseList';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to LearnVerse</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore a wide range of courses to enhance your skills and knowledge. Start learning today!
      </p>
      
      <CourseList />

      <section>
        <h2 className="text-3xl font-semibold mb-4">Learning Roadmap</h2>
        <div className="space-y-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">MERN Stack</h3>
            <img src="https://via.placeholder.com/800x400.png?text=MERN+Stack+Roadmap" alt="MERN Stack Roadmap" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <p className="text-gray-700 mb-4">
              The MERN stack includes MongoDB, Express.js, React, and Node.js. Ideal for building dynamic single-page applications.
            </p>
            <ul className="list-disc pl-6">
              <li>Learn MongoDB for database management.</li>
              <li>Master Express.js for server-side development.</li>
              <li>Get proficient with React for frontend development.</li>
              <li>Understand Node.js for backend development.</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">MEAN Stack</h3>
            <img src="https://via.placeholder.com/800x400.png?text=MEAN+Stack+Roadmap" alt="MEAN Stack Roadmap" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <p className="text-gray-700 mb-4">
              Similar to the MERN stack, but uses Angular instead of React for frontend development.
            </p>
            <ul className="list-disc pl-6">
              <li>Learn MongoDB for database management.</li>
              <li>Master Express.js for server-side development.</li>
              <li>Get proficient with Angular for frontend development.</li>
              <li>Understand Node.js for backend development.</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
            <img src="https://via.placeholder.com/800x400.png?text=Frontend+Development+Roadmap" alt="Frontend Development Roadmap" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <p className="text-gray-700 mb-4">
              Focus on building user interfaces with HTML, CSS, and JavaScript frameworks.
            </p>
            <ul className="list-disc pl-6">
              <li>Learn HTML for structuring content.</li>
              <li>Master CSS for styling and layout.</li>
              <li>Understand JavaScript for interactivity.</li>
              <li>Explore frameworks like React or Angular for advanced development.</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
            <img src="https://via.placeholder.com/800x400.png?text=Backend+Development+Roadmap" alt="Backend Development Roadmap" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <p className="text-gray-700 mb-4">
              Focus on server-side logic, databases, and API development.
            </p>
            <ul className="list-disc pl-6">
              <li>Learn server-side languages like Node.js.</li>
              <li>Master frameworks like Express.js.</li>
              <li>Understand databases like MongoDB or SQL.</li>
              <li>Explore API development and integration.</li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
            <img src="https://via.placeholder.com/800x400.png?text=Full-Stack+Development+Roadmap" alt="Full-Stack Development Roadmap" className="w-full h-64 object-cover rounded-lg mb-4"/>
            <p className="text-gray-700 mb-4">
              Combine frontend and backend skills to build complete applications.
            </p>
            <ul className="list-disc pl-6">
              <li>Integrate frontend and backend technologies.</li>
              <li>Build and deploy full-featured applications.</li>
              <li>Understand end-to-end development processes.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
