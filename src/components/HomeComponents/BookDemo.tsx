export const BookDemo = () => {
    return (
        <>
            <div className="px-3 md:px-10 lg:px-28 py-10 lg:pb-20">
                <div className="bg-mint p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">

                    {/* Left Side (Heading) */}
                    <div className="w-full lg:w-2/5 text-forest font-bold text-3xl md:text-5xl lg:text-6xl leading-tight text-center lg:text-left">
                        Book Your <br /> Demo Class
                    </div>

                    {/* Right Side (Content) */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left">
                        <p className="font-semibold">Still Thinking? Let’s Talk!</p>
                        <p className="py-4 md:py-5">
                            Experience Vikar’s with a Free 30-Minute Live Demo Class. <br />
                            No obligation. No spam. Just honest teaching.
                        </p>
                        <button className="w-full md:w-[70%] lg:w-[60%] px-4 py-3 bg-forest text-white rounded-md font-medium">
                            Book Your Free Demo Now
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
};
