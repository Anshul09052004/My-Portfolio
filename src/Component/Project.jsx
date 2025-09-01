import { useState } from "react";
import AboutImage from "../assets/AboutImage.png";
import { motion } from "framer-motion";

function Project() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id, link) => {
    if (window.innerWidth < 768) {
      // 👉 Sirf mobile ke liye click logic
      if (activeCard === id) {
        window.open(link, "_blank", "noopener,noreferrer");
        setActiveCard(null);
      } else {
        setActiveCard(id);
      }
    }
  };

  return (
    <section id="project" className="py-16 px-4">
      <motion.div
        className="text-white font-bold"
        initial={{ opacity: 0, y: 100 }}           // start position (hidden)
        whileInView={{ opacity: 1, y: 0 }}        // scroll hoke view me aaye to animate
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}                 // ek hi baar chale
      >
        <div className="text-center mb-8">
          <p className="text-white text-3xl mb-2">💻 Latest Projects</p>
          <div className="mx-auto w-40 h-2 bg-amber-300 rounded-full"></div>
        </div>

        <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
          <div
            onClick={() =>
              handleCardClick("prompt-engineer", "https://github.com/Anshul09052004")
            }
            className="relative group flex-grow transition-all w-56 h-[400px] duration-500 md:hover:w-full block cursor-pointer"
          >
            <img
              className="h-full w-full object-cover object-center"
              src={AboutImage}
              alt="image"
            />
            <div
              className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 transition-all duration-300 
              ${activeCard === "prompt-engineer" ? "opacity-100" : "opacity-0"} 
              md:opacity-0 md:group-hover:opacity-100`}
            >
              <h1 className="text-3xl">Prompt engineers</h1>
              <p className="text-sm">
                Bridging the gap between human intent and machine understanding
                through expert prompt design.
              </p>
            </div>
          </div>
        </div>

      </motion.div>

    </section>
  );
}

export default Project;
