import React from 'react';

const Courses = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Our Courses</h1>
      <p className="text-lg text-gray-700 mb-6">
        Browse through our extensive course library to find the perfect match for your learning journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Replace these with dynamically loaded courses */}
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">Course 1</h2>
          <p className="text-gray-600">Description of Course 1</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">Course 2</h2>
          <p className="text-gray-600">Description of Course 2</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">Course 3</h2>
          <p className="text-gray-600">Description of Course 3</p>
        </div>
        {/* Add more course cards here */}
      </div>
    </div>
  );
};

export default Courses;
