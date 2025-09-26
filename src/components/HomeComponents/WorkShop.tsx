import workshopImg from "../../assets/workshop.png"; // replace with your image

export const WorkshopSection = () => {
    return (
        <section className="py-5 md:py-10 lg:py-16 cont">
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:mb-28">

                {/* Left Image + Overlay */}
                <div className="relative w-full lg:w-1/2 flex justify-center mb-14 lg:mb-0">
                    <img
                        src={workshopImg}
                        alt="AI Workshop"
                        className="w-full h-auto"
                    />

                    {/* Blue Info Box */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 lg:left-28 lg:translate-x-0 bg-[#4984FC] text-white p-4 rounded-[15px] text-16 w-[90%] sm:w-[80%] lg:w-auto">
                        <h4 className="font-bold mb-2 lg:text-24">New Workshop</h4>
                        <div className="flex gap-5 items-center">
                            <hr className="h-[70px] w-[3px] bg-white rounded-[15px]" />
                            <div className="text-12 md:text-20">
                                <p>Age Group: 10 To 17 Years</p>
                                <p>Format: Zoom / Google Meet (Live With Recording)</p>
                                <p>Bonus: Q&A With AI Experts | Certificate Included</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
                    <h2 className="font-medium mb-4 text-2xl sm:text-3xl lg:text-36 text-forest">
                        AI Workshops For Curious Minds <br /> (Grades 5–12)
                    </h2>
                    <p className="text-[#12402999] mb-6 text-sm sm:text-base">
                        Future-Ready Skills, Taught The Fun Way — No<br /> Coding Needed
                    </p>
                    <button className="relative p-[3px] rounded-md text-white font-medium bg-[#003322]">
                        <span className="absolute inset-0 rounded-md p-[2px] bg-gradient-to-r from-[#97FF5E] via-[#5EFFFF] to-[#00A065] animate-border"></span>
                        <span className="relative block bg-[#003322] rounded-md px-6 py-2">
                            Register Now
                        </span>
                    </button>
                    <p className="text-forest mt-2 text-16">Limited Seats!</p>
                </div>
            </div>

            {/* Bottom 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 lg:mt-12 text-center">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4">
                        <hr className="w-12 mx-auto border-t-4 border-green-600 mb-3" />
                        <p className="text-forest font-medium text-sm sm:text-base">
                            How ChatGPT Works And How To Use It For Homework & Writing
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
