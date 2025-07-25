import React from "react";
import { LuChevronsRightLeft } from "react-icons/lu";
import { GoDatabase } from "react-icons/go";
import { IoEarth } from "react-icons/io5";
import { FaTools, FaReact } from "react-icons/fa";

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
  <span className="bg-gray-200 hover:bg-amber-300 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
    {children}
  </span>
);

// Custom Card component
const Card = ({ icon, title, description, items }) => (
  <div className="bg-amber-200 shadow-md rounded-4xl p-6">
    <div className="flex items-center gap-2 mb-4 text-xl font-semibold">
      {icon}
      <h3>{title}</h3>
    </div>
    <p className="text-black mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  </div>
);

// Main Skill Component
function Skill() {
  return (
    <section id="skill" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className='text-white text-3xl text-center mt- mb-8 underline decoration-9 decoration-amber-300 underline-offset-8'>
            Skills
          </p>
          <p className="text-white max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">All Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-amber-300 hover:bg-amber-300 text-xl px-4 py-2 rounded-full text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
