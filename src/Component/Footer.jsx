import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <motion.div
        className="text-white font-bold"
        initial={{ opacity: 0, y: 100 }}           // start position (hidden)
        whileInView={{ opacity: 1, y: 0 }}        // scroll hoke view me aaye to animate
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}                 // ek hi baar chale
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
        
    
          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-4 text-lg font-medium md:flex-row md:gap-10">
            <Link
              className="cursor-pointer hover:text-amber-300 transition-all"
              to="home"
              smooth={true}
              duration={600}
            >
              Home
            </Link>
            <Link
              className="cursor-pointer hover:text-amber-300 transition-all"
              to="about"
              smooth={true}
              duration={600}
            >
              About
            </Link>
            <Link
              className="cursor-pointer hover:text-amber-300 transition-all"
              to="skill"
              smooth={true}
              duration={600}
            >
              Skill
            </Link>
            <Link
              className="cursor-pointer hover:text-amber-300 transition-all"
              to="project"
              smooth={true}
              duration={600}
            >
              Project
            </Link>
            <Link
              className="cursor-pointer hover:text-amber-300 transition-all"
              to="contact"
              smooth={true}
              duration={600}
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com/Anshul09052004"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-[#8597c1]  hover:bg-amber-300 hover:text-black transition-all duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/anshul-prajapat/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-[#8597c1]  hover:bg-amber-300 hover:text-black transition-all duration-300"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              href="mailto:anshulprajapat982@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-[#8597c1] hover:bg-amber-300 hover:text-black transition-all duration-300"
            >
              <MdOutlineEmail className="text-2xl" />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-10 text-center text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()}{" "}
            
            <span className="text-amber-300 font-semibold ml-1 mr-1 ">
              Anshul Prajapat
            </span>
            . All rights reserved.
          </p>
        </div>

      </motion.div>

    </footer>
  );
}

export default Footer;
