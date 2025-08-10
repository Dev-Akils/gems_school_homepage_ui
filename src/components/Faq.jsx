import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

import bgImage from '../assets/images/bg-shape.webp';


export default function Faq(){
    const [openIndex, setOpenIndex] = useState(null);
     const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        {
            question: "What is the vision behind the school?",
            answer: "Our vision is to provide quality education with innovation..."
        },
        {
            question: "What is School of Research and Innovation?",
            answer: "It is a unique educational initiative focused on..."
        },
        {
            question: "What makes SRI different from other schools?",
            answer: "We focus on research-based learning and real-world projects..."
        },
        {
            question: "What facilities will the school have?",
            answer: "Our facilities include modern labs, sports arenas..."
        },
        {
            question: "Who will be teaching at SRI?",
            answer: "Experienced educators from across the globe..."
        },
        {
            question: "Who will be teaching at SRI?",
            answer: "We will have specialized training programs and coaches..."
        },
        {
            question: "Who will be teaching at SRI?",
            answer: "We will have specialized training programs and coaches..."
        },
        {
            question: "How will the school compete in sports against other established schools?",
            answer: "We will have specialized training programs and coaches..."
        }
    ];
    return(
        <>
          {/* faq+++++++++++++++++++++++++++++++ */}
            <div
            id="faq"
                className="relative p-5 justify-center flex  text-blue-950 mx-auto "
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute  inset-0 bg-gradient-to-t from-[#8BB1D0] to-transparent"></div>




                {/* FAQ Content */}
                <div className="relative p-10 md:w-[60%] w-full">
                    <h2 className="text-4xl font-bold mb-8 text-center">FAQs</h2>


                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border-b border-dotted border-gray-400 pb-4"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between text-left"
                                >
                                    <span className="text-lg font-medium">{faq.question}</span>
                                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                                </button>

                                <div
                                    className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div></div>
            </div>
        </>
    )
}