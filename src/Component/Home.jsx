import myImg from '../assets/images.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-scroll';



function Home() {


    return (
        <>
            <section id='home'>
                <div className='text-center'>
                    <div className=' sm:flex justify-center mt-10 max-auto'>
                        <img className=' mt-22  rounder-full ml-2 sm: size-60 rounded-full ' src={myImg} alt="img" />
                    </div>
                    <p className=' m-4 sm:flex justify-center gap-3 text-5xl mt-10 text-white'>Hi, I'm  <span className='text-amber-300'>Anshul Prajapat</span></p>
                    <p className=' text-3xl text-amber-100 sm: text-center mt-5 '> Full Stack Developer Passionate about creating beautiful and functional web applications</p>
                    <div className='mt-8'>
                        
                       <Link  to='project' smooth={true} duration={1500} > <button  className=' hover:bg-amber-300 p-4 m-4 bg-amber-200 rounded-2xl hov'>View My Work</button></Link>
                        <button className=' hover:bg-amber-300 p-4 m-4 bg-amber-200 rounded-2xl'> <MdOutlineFileDownload className='inline text-2xl ' /> Download Resume</button>
                    </div>
                    <div className='md:text-white gap-15 border-2  p-3 rounded-4xl  flex justify-center mt-6 border-amber-300 mx-auto w-90'>
                        <button>
                            <a href="https://github.com/Anshul09052004" target="_blank" rel="noreferrer">< FaGithub className='text-4xl text-amber-200 hover:text-amber-300' /> </a>
                        </button>
                        <button>
                            <a href="https://www.linkedin.com/in/anshul-prajapat/" target="_blank" rel="noreferrer">
                            < FaLinkedinIn className=' hover:text-amber-300 text-4xl text-amber-200' />
                            </a>
                            </button>
                        <button>
                            <a href="mailto:anshulprajapat982@gmail.com" target="_blank" rel="noreferrer">
                            <MdOutlineEmail className='text-4xl text-amber-200 hover:text-amber-300' />
                            </a>
                            </button>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Home
