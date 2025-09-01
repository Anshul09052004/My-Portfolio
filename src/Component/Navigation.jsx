import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-scroll';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    return (
        <nav
            className={`flex justify-between items-center text-black text-xl p-6 md:p-4 fixed top-0 left-0 right-0 bg-amber-200 z-50 transition-transform duration-300 ${
                showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-bold text-3xl md:text-5xl">
                anshul's Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
                <Link to="home" smooth duration={1500} className="hover:text-indigo-500 cursor-pointer">Home</Link>
                <Link to="about" smooth duration={1500} className="hover:text-indigo-500 cursor-pointer">About</Link>
                <Link to="skill" smooth duration={1500} className="hover:text-indigo-500 cursor-pointer">Skill</Link>
                <Link to="project" smooth duration={1500} className="hover:text-indigo-500 cursor-pointer">Project</Link>
                <Link to="contact" smooth duration={1500} className="hover:text-indigo-500 cursor-pointer">Contact</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    className="text-3xl hover:text-sky-500"
                >
                    {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full right-0 bg-amber-200 text-black rounded-b-3xl px-8 py-8 text-xl flex flex-col space-y-4 md:hidden z-50">
                    <Link to="home" smooth duration={1500} className="hover:text-sky-500" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="about" smooth duration={1500} className="hover:text-sky-500" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="skill" smooth duration={1500} className="hover:text-sky-500" onClick={() => setIsOpen(false)}>Skill</Link>
                    <Link to="project" smooth duration={1500} className="hover:text-sky-500" onClick={() => setIsOpen(false)}>Project</Link>
                    <Link to="contact" smooth duration={1500} className="hover:text-sky-500" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navigation;
