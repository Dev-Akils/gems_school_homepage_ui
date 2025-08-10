import bgImage from '../assets/images/bg-shape.webp';
import HomeVedio from '../assets/vedios/gems-film.mp4'
export default function Home() {
    return (<>
        <section
        id="home"
            className="relative h-auto bg-cover bg-center flex flex-col justify-center items-center p-4"
            style={{
                backgroundImage: `linear-gradient(to right, #072d4b, #015b97), url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Video container */}
            <div className="relative w-full md:max-w-[1000px] md:h-[500px] rounded overflow-hidden">
                {/* Video */}
                <video
                    src={HomeVedio}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-blue/50"></div>

                {/* Text overlay */}

            </div></section>
    </>)
}