// src/components/Project.jsx
import React, { useState } from 'react';
import img1 from '../../public/img/ProjectImg/Pixify.png';
import img2 from '../../public/img/ProjectImg/WeatherWave.png';
import img3 from '../../public/img/contact-form.webp';
const projects = [
  {
    id: 1,
    title: 'Pixify',
    description:
      'Social Media is a collection of online platforms that enable users to create, share, and interact with content in real-time.',
    image: img1,
    link: 'https://fronted-dev.onrender.com/',
  },
  {
    id: 2,
    title: 'WeatherWave',
    description:'🌤️ WeatherWave –  A simple weather app that lets users search any city to view real-time temperature and weather details using a clean, user-friendly interface.', 
    image: img2,
    link: 'https://weatherwave1.onrender.com/',
  },
  {
    id: 3,
    title: 'Contact-form',
    description:
      'Contact form use Web3Forms to send submissions directly to your email. It’s an easy, serverless way to manage form submissions.',
    image: img3,
    link: 'https://contact-formp.netlify.app/',
  },
  // {
  //   id: 3,
  //   title: 'Job Portal',
  //   description:
  //     'The Job Portal is an online platform that connects job seekers with employers, allowing users to search for job listings, submit applications.',
  //   image: img3,
  //   link: 'https://contact-formp.netlify.app/',
  // },
];

const Project = () => {
  const [idx, setidx] = useState(0);
  return (
    <div className="flex items-center flex-wrap justify-center px-2 py-10 mt-2">
      <div className="sm:w-[67vw] text-white min-h-[50vh] flex flex-wrap gap-8 items-center justify-between rounded-2xl">
        <div className="w-full bg-[var(--main-bg)] min-h-[40vh] rounded-2xl py-10 px-12 flex flex-col gap-8">
          <div className="flex gap-2 items-center justify-center">
            <span className="w-8 h-3.5 bg-red-500 inline-block rounded-full"></span>
            <h2 className="text-2xl font-semibold">Projects</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link} // Use the link from the project object
                target="_blank"
                onMouseEnter={() => setidx(index)}
                rel="noopener noreferrer" // Security measure
                className="relative w-full max-w-xs flex flex-col items-center justify-between rounded-lg bg-[var(--main-bg)] shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />

                <div className="p-4">
                  <h3 className="text-xl text-amber-400 font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-white">{project.description}</p>
                </div>
                <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold">
                    {project.title}
                  </h3>
                  <img
                    src={idx == 0 ? img1 : idx == 1 ? img2 : img3}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                  <p>Click to open</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <p>
              You want friendship with me ?{' '}
              <span
                className="text-green-500 cursor-pointer active:text-green-300"
                onClick={() => window.open('https://t.me/bpatell014')}
              >
                Click here{' '}
              </span>
              to Message me! 👋
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
