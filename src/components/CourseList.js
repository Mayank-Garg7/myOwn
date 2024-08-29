// CourseList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import frontend from '../assets/images/frontend.jpg';
import backend from '../assets/images/backend.jpg';
import fullstack from '../assets/images/fullstack.jpg';

const courses = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Master the essentials of web design and development by learning HTML, CSS, and JavaScript. Build stunning and responsive websites from scratch.',
    image: frontend,
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Dive into server-side programming with Node.js and Express.js. Learn how to build robust and scalable APIs and work with databases like MongoDB.',
    image: backend,
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'Combine your knowledge of frontend and backend technologies to create complete web applications. This course covers everything from databases to user interfaces.',
    image: fullstack,
  },
];

const CourseList = () => {
  const navigate = useNavigate();

  const handleCourseClick = (path) => {
    navigate(`/courses/${path}`);
  };

  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-semibold mb-8">Explore Our Courses</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 cursor-pointer"
            onClick={() => handleCourseClick(course.id)}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-700 mb-4">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
