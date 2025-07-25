import myImg from '../assets/images.png'

function About() {


    return (
        <>
            <section id='about'>
                <p className='text-white text-3xl text-center mt-18 underline decoration-9 decoration-amber-300 underline-offset-8'>
                    About Me
                </p>

                <p className='text-white text-xl mt-10 text-center px-4 md:px-0'>
                    Learn more about my background, experience, and what drives my passion for development
                </p>

                <div className='md:flex text-white text-xl mt-10 flex-col md:flex-row items-center md:items-start'>
                    <div className='mb-10 md:mb-0'>
                        <img
                            className=' md:h-125 w-300 rounded-4xl mx-auto md:ml-20'
                            src={myImg}
                            alt=""
                        />
                    </div>

                    <div className=' sm:ml-60 px-4 md:px-0'>
                        <p className='text-5xl text-center mb-10 md:mb-20'>My Journey</p>
                        <p className='  md: m-4  text-2xl md:text-xl leading-8'>
                            I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy building seamless user experiences and robust server-side solutions. My journey in web development has equipped me with the skills to tackle complex challenges and deliver high-quality code.
                            <br /><br />
                            I am passionate about learning new technologies and continuously improving my skills. I thrive in collaborative environments and enjoy working with teams to bring innovative ideas to life. Whether it's developing a new feature, optimizing performance, or debugging issues, I approach each task with enthusiasm and a commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}
export default About
