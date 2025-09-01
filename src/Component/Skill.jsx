import { GoDatabase } from "react-icons/go";
import { FaTools, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

// Skill list
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML/CSS",
  "Tailwind CSS",
  "Git",
  "MongoDB",
  "AWS",
  "VS Code",
  "Postman",
];

// Custom Badge component
const Badge = ({ children }) => (
  <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium px-3 py-1 rounded-full shadow-sm hover:scale-105 transition-transform">
    {children}
  </span>
);

// Custom Card component
const Card = ({ icon, title, description, items }) => (
  <div className="bg-gradient-to-br from-amber-100 to-amber-300 shadow-lg hover:shadow-xl rounded-3xl p-6 transform hover:-translate-y-2 transition-all duration-300">
    <div className="flex items-center gap-3 mb-4 text-xl font-semibold text-gray-800">
      <span className="text-3xl text-amber-600">{icon}</span>
      <h3>{title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="bg-white/70 text-gray-900 text-sm px-3 py-1 rounded-full shadow-sm hover:bg-amber-400 hover:text-white transition-all"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

// Main Skill Component
function Skill() {
  return (
    <section id="skill" className="py-20 bg-gradient-to-b from-gray-900">
      <motion.div
        className="text-white font-bold"
        initial={{ opacity: 0, y: 100 }}          
        whileInView={{ opacity: 1, y: 0 }}        
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}             
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-white text-4xl font-bold mb-4">⚡Skills </p>
            <div className="mx-auto w-40 h-2 bg-amber-400 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mt-6">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card
              icon={<FaReact />}
              title="Frontend"
              description="Creating beautiful user interfaces"
              items={["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]}
            />
            <Card
              icon={<GoDatabase />}
              title="Backend"
              description="Building robust server-side solutions"
              items={["Node.js", "MongoDB", "AWS"]}
            />
            <Card
              icon={<FaTools />}
              title="Tools"
              description="Development and productivity tools"
              items={["Git", "VS Code", "Postman"]}
            />
          </div>

          {/* All Skills */}
          <div className="mt-20">
            <h3 className="text-3xl font-semibold text-white text-center mb-10">
              🚀 All Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg px-5 py-2 rounded-full shadow-md hover:bg-amber-400 hover:text-black transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </motion.div>

    </section>
  );
}

export default Skill;
