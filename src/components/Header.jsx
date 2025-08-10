import { MdArrowOutward } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinks = [
        "Home",
        "Curriculum",
        "Nurturing every child",
        "The GEMS Advantage",
        "Admissions",
        "Events",
        "FAQs"
    ];

    return (
        <header className="absolute w-full px-4 py-4  shadow-md z-50">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-[15px]  font-normal md:text-[17px]  text-white max-w-[100px]">
                    GEMS SCHOOL OF RESEARCH & INNOVATION
                </div>


                {/* CTA Buttons */}
                <div className="flex gap-3">
                    <div className="md:flex gap-2 hidden">
                        <button className="px-8 py-3 md:text-[18px] leading-[18px] text-sm text-white rounded hover:bg-white bg-blue-950 hover:text-blue-950  hover:border-blue-950 transition">
                            LET'S TALK
                        </button>
                        <button className="flex items-center gap-2 px-8 py-3 md:text-[18px] leading-[18px] text-sm bg-white text-blue-950 border border-blue-950 rounded hover:bg-blue-950 hover:text-white transition">
                            ENROL <MdArrowOutward />
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="">
                        <button onClick={handleToggle} className="px-6 py-3 md:text-[18px] leading-[18px] text-sm text-white rounded hover:bg-white bg-blue-950 hover:text-blue-900  hover:border-blue-950 transition">
                            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:max-w-[300px]  w-full max-w-[90vw] absolute md:right-3 lg:right-16 rounded mt-4 bg-white  shadow-lg rounded-b z-40">
                    <nav className="flex flex-col items-start gap-4 p-6 text-gray-800">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="w-full border-b pb-2 hover:text-btncolor transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link}
                            </a>
                        ))}
                        <button className="mt-4 w-full px-4 py-2 text-sm text-white rounded hover:bg-white bg-blue-950 hover:text-blue-950 border hover:border-blue-950 transition">
                            LET'S TALK
                        </button>
                        <button className="mt-2 w-full flex justify-center items-center gap-2 px-4 py-2 text-sm bg-white text-btncolor border border-blue-950 rounded hover:bg-blue-950 hover:text-white transition">
                            ENROLL <MdArrowOutward />
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
