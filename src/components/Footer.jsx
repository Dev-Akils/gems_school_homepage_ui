


import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";


import bgVedio from '../assets/vedios/bg_video.mp4'

export default function Footer(){
  return(
            <div className="relative flex justify-between py-10 px-4 text-bg-blue-950 h-[300px] overflow-hidden">
                {/* Background video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    src={bgVedio}
                    type="video/mp4"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d415f] to-transparent pointer-events-none" />

                {/* Content on top */}
                <div className="relative z-10">
                    {/* Your content here */}
                    <h1 className="text-white text-5xl md:text-7xl w-full  md:max-w-16 leading-tight">Reimagining
                        Genius</h1>
                    <p className="text-lg mt-10  opacity-80">© 2025 GEMS EDUCATION</p>
                </div>
                <div className="relative z-10 md:translate-y-48  -left-64 md:left-0 translate-y-52 ">
                    {/* Your content here */}
                    <div className="relative z-10 flex gap-6 md:text-xl opacity-80 text-lg">
                        <a href="#" className="hover:text-pink-500 transition-colors"><SlSocialInstagram /></a>
                        <a href="#" className="hover:text-red-500 transition-colors"><TiSocialYoutube /></a>
                        <a href="#" className="hover:text-blue-500 transition-colors"><TiSocialFacebook /></a>
                    </div>
                </div>
            </div>)

}