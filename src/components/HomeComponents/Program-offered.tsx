import { useState } from "react";
const data =[{title:"CBSE",
              titleText:"Central Board of Secondary Education",
              content:"Programs Designed for Every Student’s Success Whether your child follows CBSE, ICSE, IB, State Board, or is preparing for NEET — our expert tutors ensure clarity, confidence, and top results",
               point:["Complete NCERT-aligned coverage for Grades 3–12",
                       "Strong focus on concept clarity & exam patterns",
                       "Regular tests, progress reports, and parent feedback",],
               footerText:"Trusted by 2,000+ CBSE parents who saw real results within 3 months"  
            },
            {title:"ICSE",
              titleText:"Indian Certificate of Secondary Education",
              content:"Programs Designed for Every Student’s Success Whether your child follows CBSE, ICSE, IB, State Board, or is preparing for NEET — our expert tutors ensure clarity, confidence, and top results",
               point:["Grammar-rich English, Science, and Math focus",
                       "Daily writing practice & creative learning approach",
                       "Tutor feedback every week",],
               footerText:"90% of ICSE parents reported improved writing & problem-solving skills"  
            },
            {title:"IB",
              titleText:"International Baccalaureate – PYP, MYP & DP",
              content:"Programs Designed for Every Student’s Success Whether your child follows CBSE, ICSE, IB, State Board, or is preparing for NEET — our expert tutors ensure clarity, confidence, and top results",
               point:["Complete NCERT-aligned coverage for Grades 3–12",
                       "Strong focus on concept clarity & exam patterns",
                       "Regular tests, progress reports, and parent feedback",],
               footerText:"Trusted by 2,000+ CBSE parents who saw real results within 3 months"  
            },
            {title:"State Boards",
              titleText:"All States",
              content:"Programs Designed for Every Student’s Success Whether your child follows CBSE, ICSE, IB, State Board, or is preparing for NEET — our expert tutors ensure clarity, confidence, and top results",
               point:["State-specific coaching tailored to each regional syllabus (Grades 3–12)",
                       "Teaching in regional languages + English medium for clarity",
                       "Answer-writing strategies & exam prep techniques that score high marks",],
               footerText:"Over 1,500 State Board students improved exam scores by 80% on average"  
            },
            {title:"NEET",
              titleText:"NEET Foundation & Preparation  (Grades 9–12)",
              content:"Programs Designed for Every Student’s Success Whether your child follows CBSE, ICSE, IB, State Board, or is preparing for NEET — our expert tutors ensure clarity, confidence, and top results",
               point:["Step-by-step mastery of Physics, Chemistry & Biology fundamentals",
                       "Structured Foundation → Advanced NEET program with doubt-clearing",
                       "Weekly mock tests, AIR-level questions & strategy sessions",],
               footerText:"80% of our NEET foundation students qualify for top coaching institutes"  
            },
        ]

        export const Program = ()=>{
            return(
            <div>
                 { data.map((item,i)=>(
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap4" key={i}>
                        <h1 key={i}>{item.title}</h1> 
                        <h2>{item.titleText}</h2> 
                        {item.point.map((point)=><li>{point}</li>)}
                        <h3>{item.footerText}</h3>


                                          
            </div>
                 ))}
            </div>
            )




        }
        export default Program();