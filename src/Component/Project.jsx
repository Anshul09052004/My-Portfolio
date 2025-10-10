import { useState } from "react";
import { motion } from "framer-motion";
import Shoppify from "../../public/Shoppify.png";
import HealthQueue from "../../public/HealthQueue.png";
import { FaArrowRight } from "react-icons/fa6";

function Project() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "E-Commerce Website - Shopper",
      img: Shoppify,
      link: "https://shoppify-app.vercel.app",
    },
    {
      title: "Doctor Appointment Booking System",
      img: HealthQueue,
      link: "https://healthqueue-frontend.onrender.com",
    },
  ];

  const toggleInfo = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="project" className="py-16 px-4 bg-gray-900">
      <motion.div
        className="text-white font-bold max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-3xl font-bold mb-2">💻 Latest Projects</p>
          <div className="mx-auto w-40 h-2 bg-amber-300 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer border border-gray-700 hover:border-amber-400 transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
              onClick={() => toggleInfo(index)}
            >
              {/* Image with Zoom Effect */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Card Title */}
              <h1 className="text-center text-2xl font-semibold mt-3 mb-4 text-amber-300 tracking-wide">
                {project.title}
              </h1>

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-end items-center p-6 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeIndex === index ? "opacity-100" : ""
                }`}
              >
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-400 to-white animate-gradient opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300 text-center">
                  {project.title}
                </h1>

                {/* Attractive Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-6 px-6 py-3 bg-white/90 text-gray-900 font-bold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-amber-400 hover:via-yellow-300 hover:to-amber-500 hover:text-white"
                >
                  Click to Visit
                  <FaArrowRight className="ml-2 inline-block" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Project;
