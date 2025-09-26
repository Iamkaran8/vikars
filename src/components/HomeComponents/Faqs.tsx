import { useState } from "react"

interface AccordionItemTypes {
    question: string,
    answer: string
}

const AccordionItem: AccordionItemTypes[] = [
    { question: "Is this one-on-one or group tuition?", answer: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus," },
    { question: "Is this one-on-one or group tuition?", answer: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus," },
    { question: "Is this one-on-one or group tuition?", answer: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus," },
    { question: "Is this one-on-one or group tuition?", answer: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus," },
]
export const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <>
            <div className="flex flex-col lg:flex-row px-3 md:px-10 lg:px-28 py-5 gap-10" >

                {/* information container */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between lg:mb-8">
                    <div>
                        <h3 className="text-forest text-28 md:text-38 lg:text-48 leading-none mb-5 font-bold text-center lg:text-start">Common Questions Parents Ask</h3>
                        <p className="text-center lg:text-start">Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                            eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
                    </div>
                    <h2 className="text-[#4984FC] text-center lg:text-start hidden lg:block">More FAQ</h2>
                </div>

                {/* accordion container */}
                <div className="w-full lg:w-1/2">
                    {AccordionItem.map((item, i) => (
                        <div className="">
                            <div className="flex justify-between text-forest font-bold " onClick={() => setOpenIndex(openIndex === i ? null : i)}>{item.question}<span>{openIndex === i ? "-" : "+"}</span></div>
                            <p>
                                {openIndex === i ? item.answer : null}
                            </p>
                            <hr className="bg-forest h-[1.5px] my-8" />
                        </div>
                    ))}
                    <h2 className="text-[#4984FC] text-center lg:text-start lg:hidden">More FAQ</h2>
                </div>
            </div>
        </>
    )
}

