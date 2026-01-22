import { Link } from 'react-scroll'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from 'framer-motion'
import resumepdf from '../../public/AnshulPrajapatResume.pdf'
import "./home.css";

const openresume = () => {
    window.open(resumepdf, '_blank')
}

function Home() {
    return (
        <>
            <section
                id="home"
                className="pt-40 md:pt-70 pb-46 md:pb-25 bg-gradient-to-b from-gray-900 to-black"
            >
                <motion.div
                    className="text-black font-bold"
                    initial={{ opacity: 0, y: 100 }}           // start position (hidden)
                    whileInView={{ opacity: 1, y: 0 }}        // scroll hoke view me aaye to animate
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}                 // ek hi baar chale
                >
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 px-6 md:px-12">

                        {/* Left: Profile Image */}
                        <div className="hidden md:flex md:justify-start w-full md:w-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                                className="ml-7 w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg shadow-amber-500/20 border-4 border-gray-500 bg-transparent p-4"
                            >
                                <g
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="80"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {/* left chevron shifted left */}
                                    <path d="M280 360 L140 512 L280 664" />

                                    {/* right chevron shifted right */}
                                    <path d="M744 360 L884 512 L744 664" />

                                    {/* center slash rotated 45° */}
                                    <path
                                        d="M502 170 L566 854"
                                        transform="rotate(23 512 512)"
                                    />
                                </g>
                            </svg>
                        </div>




                        {/* Right: Content */}
                        <div className="text-center md:text-left w-full md:w-1/2 mt-6 md:mt-0">
                            <p className="text-white text-4xl md:text-5xl font-bold">
                                Hi, I'm  <span className=" text-4xl ml-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-500 to-purple-500 animate-gradient">
                                    Anshul Prajapat
                                </span>
                            </p>
                            <p className="text-lg md:text-2xl text-amber-100 mt-4 leading-relaxed">
                                Full Stack Developer passionate about creating beautiful and functional web applications
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link to="project" smooth duration={1500}>
                                    <button className=" text-lg hover:bg-amber-300 hover:-translate-y-0.5 transition-all duration-300 px-8 py-3 bg-amber-200  rounded-2xl font-medium ">
                                        View My Work
                                    </button>
                                </Link>
                                <button
                                    onClick={openresume}
                                    className=" m-auto text-xl hover:-translate-y-0.5 transition-all duration-300 hover:bg-amber-300 px-1 py-3 bg-amber-200 rounded-2xl font-medium  flex items-center gap-2 md:px-6">
                                    <MdOutlineFileDownload className="text-3xl" />
                                    Download Resume
                                </button>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center md:justify-start gap-6 border-2 border-[#8597c1] rounded-3xl pl-6 pr-3 py-3 mt-10
                        md:border-none md:gap-10 
                        ">
                                <a href="https://github.com/Anshul09052004" target="_blank" rel="noreferrer">
                                    <FaGithub className="text-3xl md:text-4xl text-amber-200 hover:text-amber-300 transition-all duration-300 hover:-translate-y-1" />
                                </a>
                                <a href="https://www.linkedin.com/in/anshul-prajapat/" target="_blank" rel="noreferrer">
                                    <FaLinkedinIn className="text-3xl md:text-4xl text-amber-200 hover:text-amber-300 transition-all duration-300 hover:-translate-y-1" />
                                </a>
                                <a href="mailto:anshulprajapat982@gmail.com" target="_blank" rel="noreferrer">
                                    <MdOutlineEmail className="text-3xl md:text-4xl text-amber-200 hover:text-amber-300 transition-all duration-300 hover:-translate-y-1" />
                                </a>
                            </div>

                        </div>
                    </div>

                </motion.div>

            </section>

        </>
    )
}
export default Home

