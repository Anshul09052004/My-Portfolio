import React from 'react';
import myImg from '../assets/images.png';

const Project = () => {
  const projects = [
    {
      image: myImg,
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      demoLink: 'https://your-portfolio-demo.com'
    },
    {
      image: myImg,
      title: 'Weather App',
      description: 'Weather forecasting app using OpenWeatherMap API and styled with Tailwind.',
      technologies: ['React', 'API', 'Tailwind CSS'],
      demoLink: 'https://your-weather-app.com'
    }
  ];

  return (
    <section id='project'>
    <div className=" min-h-screen py-10 px-5">
      <h2 className="text-3xl text-white text-center underline decoration-8 decoration-amber-300 underline-offset-8 mb-10">
       My Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-amber-200 shadow-md rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 bg-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <h4 className="font-medium">Technologies Used:</h4>
              <ul className="list-disc list-inside mb-4 text-sm text-gray-600">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline font-semibold"
              >
                🔗 Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Project;
