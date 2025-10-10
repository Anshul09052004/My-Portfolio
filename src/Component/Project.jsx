import { useState } from "react";
import { motion } from "framer-motion";
import Shoppify from '../../public/Shoppify.png';
import { FaArrowRight } from "react-icons/fa6";
import HealthQueue from '../../public/HealthQueue.png';

function Project() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => setShowInfo(!showInfo);

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

        {/* Project Card */}
        <div
          className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={toggleInfo} // Mobile tap toggle
        >
          <img src={Shoppify} alt="Shoppify Project" className="w-full h-auto" />

          {/* Overlay */}
          <div
            className={`absolute inset-0 flex flex-col justify-end p-4 bg-black/60 transition-all duration-300 ${showInfo ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
          >
            <h1 className="text-3xl ml-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-400 to-white animate-gradient">
              E-Commerce Website - Shopper
            </h1>

            <a
              className="text-white mt-4 flex items-center"
              href="https://shoppify-app.vercel.app"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} 
            >
              Click to Visit
              <span className="ml-2">
                <FaArrowRight />
              </span>
            </a>
          </div>


        </div>

        <div
          className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={toggleInfo}
        >
          <img src={HealthQueue} alt="Doctor Appointment Project" className="w-full h-auto" />

          {/* Overlay */}
          <div
            className={`absolute inset-0 flex flex-col justify-end p-4 bg-black/60 transition-all duration-300 ${showInfo ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
          >
            <h1 className="text-3xl ml-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-400 to-white animate-gradient">
              Doctor Appointment Booking System
            </h1>

            <a
              className="text-white mt-4 flex items-center"
              href="https://healthqueue-frontend.onrender.com"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()} 
            >
              Click to Visit
              <span className="ml-2">
                <FaArrowRight />
              </span>
            </a>
          </div>


        </div>
      </motion.div>
    </section>
  );
}

export default Project;
