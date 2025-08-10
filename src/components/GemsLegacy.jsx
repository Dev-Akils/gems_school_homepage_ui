import image1 from '../assets/images/legacy_1.png';
import image2 from '../assets/images/legacy_2.png';
import image3 from '../assets/images/legacy_10.png';
import image4 from "../assets/images/legacy_4.png";
import image5 from "../assets/images/legacy_5.png";
import image6 from "../assets/images/legacy_6.png";
import image7 from "../assets/images/legacy_7.png";
import image8 from "../assets/images/legacy_8.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow"; // ✅ needed for coverflow effect
import { useState } from 'react';

const slides = [
    { year: "1959", image: image1, text: "The Varkeys, both teachers from Kerala, India, leave everything..." },
    { year: "1965", image: image2, text: "School expansion begins..." },
    { year: "1970", image: image3, text: "More milestones achieved..." },
    { year: "1970", image: image4, text: "More milestones achieved..." },
    { year: "1970", image: image5, text: "Stepping stone on every one life achieved..." },
    { year: "1971", image: image6, text: "More milestones achieved..." },
    { year: "1973", image: image7, text: "Most Famouse and achieved..." },
    { year: "1978", image: image8, text: "World Academy..." }
];

export default function GemsLegacy() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section 
        id="legacy"
        className="justify-center items-center text-white flex flex-col py-10 px-4 bg-gradient-to-r from-[#072d4b]     to-[#015b97]">

            {/* Text */}
            <div className="flex flex-col justify-center  items-center p-8 md:p-16 space-y-11">
                <h2 className="text-5xl md:text-7xl text-center mb-3  font-normal leading-relaxed">
                    A legacy of more <br /> than 65+ years
                </h2>
                <button className="hover:bg-blue-950  hover:text-white w-full md:max-w-96 px-6 py-2 rounded-lg bg-white text-blue-950 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                    <span className="md:text-lg">DISCOVER THE GEMS ADVANTAGE</span>
                    <span className="text-red-500 text-2xl">→</span>
                </button>
            </div>


            

            {/* Swiper */}
            <div className="w-full py-10">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    loop={true}
                    loopedSlides={1000} // ✅ ensures it loops infinitely
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // track active slide
                    modules={[EffectCoverflow, Autoplay]}
                    className="timeline-swiper"
                    speed={800} // ✅ smooth transition speed

                >
                    {slides.map((slide, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex flex-col  items-center text-start  justify-center transition-all duration-300 ease-in-out"
                        >
                            <img
                                src={slide.image}
                                alt=""
                                className="rounded-lg transition-all duration-300 ease-in-out 
               scale-90 swiper-slide-active:scale-110"
                            />

                            {/* <p className="text-lg pl-5 max-w-[200px] swiper-slide-active:text-xl transition-all duration-300">
                                {slide.year}-  {slide.text}
                            </p> */}

                        </SwiperSlide>

                    ))}
                </Swiper>

               

                {/* Styles */}
                <style jsx global>{`
                    .timeline-swiper .swiper-slide {
                        width: 300px;
                        height: 350px;
                        transition: transform 0.3s ease;
                    }
                    .timeline-swiper .swiper-slide img {
                        width: 80%;
                        height: 80%;
                        object-fit: cover;
                    }
                    .timeline-swiper .swiper-slide-active {
                        transform: scale(1.2);
                        z-index: 10;
                    }
                    .timeline-swiper .swiper-slide-next,
                    .timeline-swiper .swiper-slide-prev {
                        transform: scale(0.9);
                    }
                `}</style>
            </div>
             <div className="text-center justify-center items-center flex flex-col max-w-[500px] mb-10 transition-all duration-500">
                    
                <p className="text-4xl font-bold">{slides[activeIndex].year}</p>
                <p className="text-2xl">{slides[activeIndex].text}</p>
              
            </div>
        </section>
    );
}
