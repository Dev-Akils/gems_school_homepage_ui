

export default function Stepper() {
    const steps = [
        { name: "HOME", link: "home" },
        { name: "GEM'S LEGACY", link: "legacy" },
        { name: "THE SRI TEAM", link: "sriteam" },
        { name: "REIMAGINE LEARNING", link: "reimagine" },
        { name: "POINEER ELEMENTS", link: "poineer_elements" },
        { name: "START YOUR JOURNEY", link: "start_your_journey" },
        { name: "FAQ", link: "faq" }
    ];

    return (
        <div className="fixed left-4 z-50 hidden md:block top-52">
            <ol className="relative text-gray-500 border-s border-blue-900  dark:border-blue-950 dark:text-blue-900">
                {steps.map((step, i) => (
                    <a
                        href={`#${step.link}`}
                        key={i}
                        className="mb-10  group relative block"
                    >
                        <span className="absolute flex translate-x-2  items-center bg-blue-950 justify-center w-4 h-4 ring-white rounded-full -start-4 ring-1 text-white dark:ring-gray-900 dark:bg-gray-700">
                            ✦
                        </span>
                        <h3 className="font-medium translate-x-4 leading-tight text-sm rounded-sm text-white bg-orange-600 max-w-52 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {step.name}
                        </h3>
                    </a>
                ))}

            </ol>
        </div>
    );
}
