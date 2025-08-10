import bgImage from '../assets/images/bg-shape.webp';
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import gridimage1 from '../assets/images/Jl-24.png'
import gridimage2 from '../assets/images/Jl22.png'
import gridimage3 from '../assets/images/emily_h25.png'
import gridimage4 from '../assets/images/Joseph-tuenr-1.png'
import gridimage5 from '../assets/images/jane_h23.png'
import gridimage6 from '../assets/images/Micky.png';

import gridimage8 from '../assets/images/leona.png';
import gridimage9 from '../assets/images/Irene.png';
import { useEffect, useRef, useState } from 'react';
export default function TheSriTeam() {
    const images = [
        { id: 1, image: gridimage1, paragraph: "Subject leader & Maths Teacher" ,
            title:"We're reimagining education for tomorrow's genius. Our world-class educators, with exceptional qualifications and global experience, are dedicated to achieving excellence for your child."
        },
        { id: 2, image: gridimage2, paragraph: "Mandarin Teacher" ,title:"We're reimagining education for tomorrow's genius. Our world-class educators, with exceptional qualifications."},
        { id: 3, image: gridimage3, paragraph: "Founding principal and CEO",
            title:"We're reimagining education for tomorrow's genius. Our world-class educators, with exceptional qualifications."
         },
        { id: 4, image: gridimage4, paragraph: "Primary Teacher" ,
            title:"We're reimagining education for tomorrow's genius. Our world-class educators, with exceptional qualifications."
        },
        { id: 5, image: gridimage5, paragraph: "Primary Teacher",
            title:"We're reimagining education for tomorrow's genius. Our world-class educators, with exceptional qualifications."
         },
        { id: 6, image: gridimage6, paragraph: "Decorator of Educator and system",
            title:"We're reimagining education for tomorrow's genius. Our world-class educators, with exceptional qualifications."
         },

        { id: 8, image: gridimage8, paragraph: "Primary Teacher" ,
            title:"We're reimagining education for tomorrow's genius. Our world-class educators, with exceptional qualifications."
        },
        { id: 9, image: gridimage9, paragraph: "Spanish Teacher",
            title:"We're reimagining education for tomorrow's genius. Our world-class educators, with exceptional qualifications."
         }
    ];


    const swiperRef = useRef(null);
    const cursorRef = useRef(null);
    const containerRef = useRef(null);
    const [side, setSide] = useState("right");
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const container = containerRef.current;
        const cursor = cursorRef.current;
        if (!container || !cursor) return;

        const moveCursor = (e) => {
            const bounds = container.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const y = e.clientY - bounds.top;

            cursor.style.transform = `translate(${x - 50}px, ${y - 50}px)`;

            // Detect left or right half
            setSide(x < bounds.width / 2 ? "left" : "right");
        };

        const clickHandler = (e) => {
            // If clicked inside a View button or overlay → open details instead of slide
            const viewBtn = e.target.closest(".view-btn");
            if (viewBtn) return; // let that button's onClick handle opening modal

            const bounds = container.getBoundingClientRect();
            const x = e.clientX - bounds.left;

            if (!swiperRef.current) return;
            if (x < bounds.width / 2) {
                swiperRef.current.slidePrev();
            } else {
                swiperRef.current.slideNext();
            }
        };

        container.addEventListener("mousemove", moveCursor);
        container.addEventListener("click", clickHandler);

        return () => {
            container.removeEventListener("mousemove", moveCursor);
            container.removeEventListener("click", clickHandler);
        };
    }, []);


    return (
        <section
        id="sriteam"
            className="relative flex flex-col justify-center items-center text-blue-950 py-16 px-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gray-100"></div>

            {/* Content */}
            <div className="relative text-center justify-center items-center flex flex-col space-y-6">
                <p className="text-sm md:text-base tracking-widest font-semibold uppercase">
                    THE SRI TEAM
                </p>

                <h2 className="text-5xl md:text-7xl font-normal leading-tight max-w-[700px] mb-5">
                    The educators driving our vision
                </h2>

                <p className="md:text-lg leading-relaxed max-w-[450px] mb-4">
                    We're reimagining education for tomorrow's genius. Our world-class educators, with exceptional
                    qualifications and global experience, are dedicated to achieving excellence for your child.
                    <br />
                    <br />
                    We are proud to announce the appointment of{' '}
                    <span className="font-semibold">James Monaghan</span> as the Founding Principal and CEO of the GEMS School
                    of Research and Innovation. Mr. Monaghan is a globally respected education leader with over 30 years of
                    experience across the UK, USA, South Korea, and the UAE.
                </p>
            </div>





            <section
                ref={containerRef}
                className="h-screen w-full flex items-center justify-center bg-gray-100 relative overflow-hidden"
            >
                {/* Blur Cursor */}
                <div
                    ref={cursorRef}
                    className="absolute top-0 left-0 w-[100px] h-[100px] rounded-full bg-blue-900/20 backdrop-blur-md pointer-events-none z-50 flex items-center justify-center text-white text-3xl select-none opacity-0"
                    style={{
                        transition: "transform 0.1s ease-out, opacity 0.2s ease",
                    }}
                >
                    {side === "left" ? "‹" : "›"}
                </div>

                {/* Swiper */}
                <div className={selectedItem ? "blur-sm" : ""}>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        effect="coverflow"
                        grabCursor={false}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination]}
                        className="w-full h-[450px] md:h-[600px]"
                    >
                        {images.map((item, i) => (
                            <SwiperSlide
                                key={i}
                                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden max-w-[300px] md:max-w-[400px]"
                            >
                                <img
                                    src={item.image}
                                    alt={item.paragraph}
                                    className="w-full h-[300px] md:h-[500px] object-cover"
                                />
                                <div className="p-4 text-center">
                                    <p className="text-sm text-gray-600">{item.paragraph}</p>
                                    <button
                                        className="view-btn mt-2 px-4 py-2 bg-white  text-blue-950 rounded"
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        View
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Details Modal */}
                {selectedItem && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                        <div className="bg-white max-w-xl h-screen w-full p-6 rounded-lg shadow-lg relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                                onClick={() => setSelectedItem(null)}
                            >
                                ✕
                            </button>
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.paragraph}
                                className="md:h-[500px] md:w-[400px] object-cover rounded"
                            />
                            <h2 className="text-2xl font-bold mt-4">{selectedItem.title}</h2>
                            <p className="mt-2 text-gray-700">{selectedItem.paragraph}</p>
                        </div>
                    </div>
                )}
            </section>


        </section>
    );
}
