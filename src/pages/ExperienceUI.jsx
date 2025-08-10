import React, { useEffect, useRef, useState } from "react";
import card1 from '../assets/images/card-bg1.webp';
import card2 from '../assets/images/card-bg2.webp';
import bgImage from '../assets/images/bg-shape.webp';
import journey from '../assets/vedios/virtual_tour.mp4';



export default function ExperienceUI() {

const [index, setIndex] = useState(0);
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);

   

    const data = [
        {id:1,year: "FS1 - FS2", fee: "90,000 AED", text: "Starting your journey in Year 1." },
       {id:2, year: "1 - 2", fee: "110,000 AED", text: "Advancing to middle years." },
        { id:3,year: "2 - 3", fee: "134,000 AED", text: "Preparing for senior school." },
        {id:4, year: "3 - 4", fee: "150,000 AED", text: "Specialized learning for excellence." },
        {id:5, year: "4 - 5", fee: "165,000 AED", text: "Graduating with top achievements." },
    ];

    // Height for each scroll step (adjust as needed)
    const STEP_HEIGHT = 200;

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const sectionTop = sectionRef.current.offsetTop;
            const scrollY = window.scrollY;
            const scrollWithin = scrollY - sectionTop;

            if (scrollWithin >= 0) {
                const newIndex = Math.min(
                    Math.floor(scrollWithin / STEP_HEIGHT),
                    data.length - 1
                );
                setIndex(newIndex);

                // fractional progress in current step
                const stepProgress = (scrollWithin % STEP_HEIGHT) / STEP_HEIGHT;
                setProgress(stepProgress);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [data.length]);

    const yearOffset = progress * 200;
    return (
        <>

            <section
            id="start_your_journey"
                className="relative h-auto bg-cover bg-center flex flex-col justify-center items-center p-4"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Video container */}
                <div className="relative w-full max-w-[1200px] md:h-[500px] rounded overflow-hidden">
                    {/* Video */}
                    <video
                        src={journey}
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Text overlay */}
                    <div className="absolute  inset-0 flex flex-col items-center justify-center p-5 text-white">
                        <p className="text-xl sm:text-2xl md:text-5xl font-normal">
                            Launch virtual tour
                        </p>
                        <button className=" mt-8 text-lg px-5 py-2 duration-500 transation-all ease-in-out rounded hover:bg-white hover:text-blue-950 bg-blue-950 text-white  transition-colors">
                            SEE YOURSELF HERE
                        </button>
                    </div>
                </div>

                <div className=" bg-cover bg-center flex flex-col  px-4"
                    style={{ backgroundImage: `url(${bgImage})` }}>

                    <div className='text-center relative mt-5  md:mt-10 text-blue-950 max-w-[800px] justify-center '>
                        <h2 className='md:text-5xl font-bold text-xl mb-4 mt-4'>Start your journey</h2>
                        <p className='text-lg mb-4 mt-7 leading-9'>Our admissions process is designed to be clear and supportive, guiding your family towards an educational journey that fosters excellence and innovation.
                            Year groups from Year 9 to Year 13 will be introduced in future academic years.</p>
                    </div>

                </div>




                {/* ********************************************* */}

                <section
                    ref={sectionRef}
                    className="sticky px-2 md:px-7 w-full"
                    style={{ height: window.innerHeight + 200 * (data.length - 1) }} // Adjust 500 px as step height
                >
                    {/* Sticky Container */}
                    <div className="sticky top-0 md:h-[600px] h-[400px] flex flex-col items-center justify-center w-full">
                        {/* Crosshair Lines */}
                        <div className="absolute w-full h-px bg-gray-300 top-1/2" />
                        <div className="absolute h-full w-px bg-gray-300 left-1/2" />

                        {/* Labels */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs md:text-sm font-semibold">
                            YEAR GROUP
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs md:text-sm font-semibold">
                            KHDA TUITION FEES
                        </div>

                        {/* Dot */}
                        <div className="absolute w-4 h-4 bg-red-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg" />

                        <div
                            className="absolute -translate-x-32 -translate-y-10 text-lg font-bold text-blue-900 transition-transform duration-100"
                            style={{
                                left: `calc(50% - ${yearOffset}px)`,
                            }}
                        >
                            years:{data[index]?.year}
                        </div>
                        {/* Content Box */}
                        <div className="relative z-10 text-center md:max-w-3xl px-6 py-4 bg-opacity-10 rounded-md shadow-md mt-24">
                            <p className="mb-4 text-base md:text-lg text-gray-700">{data[index]?.text}</p>

                            <p className="text-lg md:text-xl font-extrabold text-blue-950">{data[index]?.fee}</p>
                        </div>
                    </div>

                    {/* Extra space below section so you can scroll past */}
                    <div style={{ height: 1000 }} />
                </section>


                {/* ********************************************* */}


                <div className='text-center justify-center flex relative text-blue-950 max-w-[1000px] '>

                    <p className='text-lg mb-4 mt-4 leading-9 w-full md:w-[50%]'>To find out more about the founding family offer, excellence scholarships, and corporate partnerships, please make contact with the <u>admissions team.</u></p>
                </div>

            </section>



















            <div className="bg-gray-100 w-full min-h-screen  flex justify-center items-center p-4">
                <div className="grid md:grid-cols-2 gap-6 w-full max-w-7xl">

                    {/* Left Card */}
                    <div className="relative rounded-lg overflow-hidden h-[500px]">
                        <div className="h-full w-full overflow-hidden">
                            <div
                                className="h-full w-full transition-transform duration-500 ease-in-out transform hover:translate-x-14 translate-x-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${card1})` }}
                            >
                                <div className="relative bg-black bg-opacity-40 p-6 flex flex-col h-full justify-center">
                                    <div className="absolute inset-0">
                                        {/* top */}
                                        <p className="absolute left-6 top-6 text-sm uppercase text-white tracking-widest max-w-[18rem]">
                                            VISIT OUR EXPERIENCE CENTER
                                        </p>

                                        {/* center */}
                                        <div className="absolute inset-0 flex left-6 items-center justify-start pointer-events-none">
                                            <h2 className="md:text-6xl text-4xl font-normal text-white text-start max-w-[28rem]">
                                                Discover what sets us apart
                                            </h2>
                                        </div>

                                        {/* bottom */}
                                        <button className="absolute left-6 bottom-6 duration-500 transation-all ease-in-out bg-blue-950 text-white max-w-[18rem]  px-4 py-2 rounded hover:bg-gray-100 hover:text-blue-950 transition flex items-center space-x-2">
                                            <span className="text-lg">BOOK AN APPOINTMENT</span>
                                            <span className="text-red-500">→</span>
                                        </button></div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Right Card */}
                    <div className="relative rounded-lg overflow-hidden h-[500px]">
                        <div className="h-full w-full overflow-hidden">
                            <div
                                className="h-full w-full transition-transform duration-500 ease-in-out transform md:translate-x-14 hover:translate-x-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${card2})` }}
                            >
                                <div className="relative bg-black bg-opacity-40 p-6 flex flex-col h-full justify-center">
                                    <div className="absolute inset-0">
                                        {/* top */}
                                        <p className="absolute left-6 top-6 text-sm uppercase text-white tracking-widest max-w-[18rem]">
                                            Enrolment Invitation
                                        </p>

                                        {/* center */}
                                        <div className="absolute inset-0 flex left-6 items-center justify-start pointer-events-none">
                                            <h2 className=" text-4xl md:text-6xl font-normal text-white text-start max-w-[28rem]">



                                                Reimagine
                                                the first step
                                            </h2>
                                        </div>

                                        {/* bottom */}
                                        <button className="absolute left-6 duration-500 transation-all ease-in-out bottom-6 bg-white max-w-[18rem] text-gray-800 px-4 py-2 rounded hover:bg-blue-950 hover:text-white transition flex items-center space-x-2">
                                            <span className="text-lg">START YOUT JOURNEY</span>
                                            <span className="text-red-500">→</span>
                                        </button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>











          



           

        </>


    );
}
