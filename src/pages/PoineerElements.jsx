import image1 from '../assets/images/Pioneer-element-Desktop.png'
import bgImage from '../assets/images/bg-shape.webp';
export default function PoineerElements() {
    return (

        <>

            <section
            id="poineer_elements"
                className=" justify-center text-white flex py-10 px-4 bg-gradient-to-r from-[#0A599D] to-blue-900/80"
               
            >
                {/* Left Side - Text */}
                <div className='grid md:grid-cols-2 grid-cols-1 max-w-7xl'>
                <div className="flex flex-col justify-center p-8 md:p-16 space-y-6 ">
                    <h2 className="text-5xl md:text-7xl font-normal leading-relaxed">
                        Pioneer <br /> Elements
                    </h2>
                    <p className="text-lg  leading-relaxed">
                        Our exclusive, curated, future-focused curriculum is designed to inspire,
                        challenge, and prepare students for the world ahead.
                    </p>
                    <p className="text-lg  leading-relaxed">
                        Each stage of learning at SRI builds a strong foundation, integrating
                        academic excellence, cutting-edge technology, and holistic development.
                    </p>

                    <button className="mt-4 hover:bg-blue-950 hover:text-white max-w-[18rem] px-6 py-3 rounded-lg bg-white text-blue-950 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                        <span className="text-lg font-semibold">CURRICULUM</span>
                        <span className="text-red-500 text-xl">→</span>
                    </button>
                </div>

                {/* Right Side - Image */}
                <div className="relative flex items-center justify-center p-6">
                    <img
                        src={image1}
                        alt="Curriculum"
                        className="rounded-lg w-full max-w-lg "
                    />
                </div></div>
            </section>

        </>
    )

}