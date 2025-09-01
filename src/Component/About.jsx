import AboutImage from '../assets/AboutImage.png'
import { motion } from 'framer-motion'

function About() {
    return (
        <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-gray-900">
            {/* Heading */}
            <motion.div
                className="text-white font-bold"
                initial={{ opacity: 0, y: 100 }}           // start position (hidden)
                whileInView={{ opacity: 1, y: 0 }}        // scroll hoke view me aaye to animate
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}                 // ek hi baar chale
            >
                <div className="text-center mb-10 md:mb-16 px-4">
                    <p className="text-white text-3xl md:text-4xl font-bold mb-3">
                      📖 About Me
                    </p>
                    <div className=" mx-auto w-20 md:w-24 h-1 bg-amber-400 rounded-full"></div>
                </div>

                {/* Sub heading */}
                <p className="text-gray-300 text-base md:text-lg text-center max-w-xl mx-auto mb-12 px-6">
                    Learn more about my background, experience, and what drives my passion for development
                </p>

                {/* Content */}
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 px-6">

                    {/* Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            className="w-full max-w-sm md:max-w-md rounded-2xl shadow-lg shadow-amber-500/20 border-2 md:border-4 border-gray-800 md:hover:scale-105 transition-transform duration-500"
                            src={AboutImage}
                            alt="About me"
                        />
                    </div>

                    {/* Text */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <p className="text-2xl md:text-3xl text-amber-400 font-semibold mb-4 md:mb-6">
                            My Journey
                        </p>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed px-2 md:px-0">
                            I am a <span className="text-amber-400 font-medium">Full Stack Developer</span> with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy building seamless user experiences and robust server-side solutions.
                            <br /><br />
                            My journey in web development has equipped me with the skills to tackle complex challenges and deliver high-quality code. I am passionate about learning new technologies and continuously improving my skills.
                            <br /><br />
                            I thrive in collaborative environments and enjoy working with teams to bring innovative ideas to life. Whether it's developing a new feature, optimizing performance, or debugging issues, I approach each task with enthusiasm and a commitment to excellence.
                        </p>
                    </div>
                </div>
            </motion.div>

        </section>
    )
}
export default About
