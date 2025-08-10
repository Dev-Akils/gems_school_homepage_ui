import { useEffect, useState } from 'react';
import bgvedio from '../assets/vedios/bg_video.mp4';
import heroimage from '../assets/vedios/gems-film.mp4';
import Header from './Header';


export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[700px] md:h-screen overflow-hidden">
        <Header />

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={bgvedio}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 bg-opacity-10 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-start translate-x-6 justify-center h-full px-8 max-w-3xl ">
          <h1 className="text-4xl text-white md:text-[90px] md:leading-[108px] font-normal">
            The Finest School in the World
          </h1><br />
          <p className="text-lg md:text-[17px] mt-7 leading-[24px] text-white max-w-[400px]">
            <span className="text-fontcolor1 font-semibold text-orange-800">
              GEMS SCHOOL OF RESEARCH AND INNOVATION
            </span>{' '}
            brings together world-class teachers, the latest AI technologies, and unmatched facilities to reimagine education.
          </p>
        </div>

        {/* Animated Video Box */}
        <div
          className={`transition-all duration-700 ease-in-out z-30 rounded overflow-hidden shadow-lg fixed`}
          style={{
            backgroundColor: 'white',
            width: scrolled ? '0px' : isMobile ? '300px' : '450px',
            height: scrolled ? '0px' : isMobile ? '200px' : '250px',


            bottom: scrolled ? '2.5rem' : '2.5rem',
            right: scrolled ? '2.5rem' : '2.5rem',
            opacity: scrolled ? 0 : 1, // fade out when scrolling
            transform: scrolled ? 'scale(0.8)' : 'scale(1)', // shrink on scroll
            pointerEvents: scrolled ? 'none' : 'auto', // make unclickable when hidden
          }}
        >
          <video
            src={heroimage}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
