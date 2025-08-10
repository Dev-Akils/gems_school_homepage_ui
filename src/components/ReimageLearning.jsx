import { useEffect, useState } from 'react';
import image1 from '../assets/images/slider2.webp';
import image2 from '../assets/images/slider33.webp';
import image3 from '../assets/images/slider3.webp';
import image4 from '../assets/images/slider4.webp';




const images = [

    {
        image1: image1,
        heading: "Commercial Building Services",
        paragraph: "Engineered for Long-Term Impact",

    },
    {
        image1: image2,
        heading: "Smart & Green Building Services",
        paragraph: "For the Conscious Era",

    },
    {
        image1: image3,
        heading: "Commercial Building Services",
        paragraph: "Engineered for Long-Term Impact",

    },
    {
        image1: image4,
        heading: "Commercial Building Services",
        paragraph: "Engineered for Long-Term Impact",

    },

]
export default function ReimageLearing() {
    const [current, setCurrent] = useState(0);





    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    const otherImage = images.find((_, index) => index !== current);

    return (<>
        <div
        id="reimagine"
         className="relative w-full h-screen overflow-hidden rounded-lg">
            {/* Background Image */}
            <img
                src={images[current].image1}
                alt="carousel"
                className="w-full h-full object-cover transition duration-700 ease-in-out"
            />





            {/* ************************** */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white p">
                <h2
                    className="text-4xl md:text-8xl font-normal mb-6 w-full md:max-w-[800px] text-center leading-snug p-4 
             
             drop-shadow-lg tracking-wide"
                >
                    {images[current].heading}
                </h2>

                <p className="text-lg md:text-2xl">{images[current].paragraph}</p>



                <button className="mt-28 hover:bg-blue-950 hover:text-white max-w-[18rem] px-6 py-3 rounded-lg bg-white text-blue-950 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                    <span className="text-lg font-semibold">DOWNLOAD BROUCHER</span>
                    <span className="text-red-500 text-xl">→</span>
                </button>
            </div >  </div>


    </>


    );
}
