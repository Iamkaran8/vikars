import { useState } from "react"

 const AccordionItem = [{ question: " Is this one-on-one or group tuition?", answer: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus," },
    { question: " Is this one-on-one or group tuition?", answer: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus," },
    { question: " Is this one-on-one or group tuition?", answer: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus," },
    { question: " Is this one-on-one or group tuition?", answer: "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus," },
 ]
export const Faqs = () => {
     const [openIndex, setOpenIndex] = useState <number | null>(0);
    
     
    return(
        <> 
        <div className="flex flex-col lg:flex-row lg:px-32 md:px-8 sm:px-0 px-4 pt-8 gap-8" >
            <div className="md:w-2/2 lg:w-1/2 w-1/1">
                <h3 className="text-forest text-36  font-bold">
                    Common Questions Parents Ask:
                </h3>
                <p className="text-20">Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam 
                    eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
                    <h2 className="text-32 pt-8">More FAQ</h2>
            </div>
            <div className=" md:w-2/2 lg-1/2 w-1/1 ">
                { AccordionItem.map((item,i) =>(<div className="p-0 md:p-4 pt-4">
                    <div className="flex justify-between text-forest text-[20px] font-bold "  onClick={ ()=> setOpenIndex( openIndex === i ? null: i ) }> {item.question} <span>{openIndex === i ? "-": "+"}</span></div>
                    <div>
                        {openIndex === i ? item.answer : null }
                    </div>
                    </div>
                    
                ))}
                 
            </div>

        </div>
        </>
       

    )
}

 