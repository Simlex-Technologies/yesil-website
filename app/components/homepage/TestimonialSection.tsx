"use client";

import { FunctionComponent, ReactElement, useState, useRef, useEffect } from "react";
import { Icons } from "../ui/icons";
import { motion } from "framer-motion";

interface TestimonialSectionProps {

}

const TestimonialSection: FunctionComponent<TestimonialSectionProps> = (): ReactElement => {

    const testimonies = [
        {
            name: "Pelumi Bode-Obanla",
            rating: 5,
            message: "Working with Yesil Logistics and General Services Ltd has transformed our approach to talent management. Their expertise in recruitment and employee development has helped us build a strong, motivated team. They took the time to understand our company culture and tailored their services to meet our specific needs. Thanks to their strategic guidance, we have seen a marked improvement in employee retention and satisfaction. Yesil Logistics and General Services Ltd is a valuable partner in our growth"
        },
        {
            name: "Jim Doe",
            rating: 5,
            message: "Working with Yesil Logistics and General Services Ltd has transformed our approach to talent management. Their expertise in recruitment and employee development has helped us build a strong, motivated team. They took the time to understand our company culture and tailored their services to meet our specific needs. Thanks to their strategic guidance, we have seen a marked improvement in employee retention and satisfaction. Yesil Logistics and General Services Ltd is a valuable partner in our growth"
        },
        {
            name: "Jane Doe",
            rating: 5,
            message: "Working with Yesil Logistics and General Services Ltd has transformed our approach to talent management. Their expertise in recruitment and employee development has helped us build a strong, motivated team. They took the time to understand our company culture and tailored their services to meet our specific needs. Thanks to their strategic guidance, we have seen a marked improvement in employee retention and satisfaction. Yesil Logistics and General Services Ltd is a valuable partner in our growth"
        },
    ];

    const [testimonialIndicator, setTestimonialIndicator] = useState(0);
    const testimonialCarouselRef = useRef<HTMLDivElement>(null);

    // const [testimonies, setTestimonies] = useState<TestimonialResponse[]>();

    function scrollTestimonialCarouselContainer(position: 'left' | 'right') {
        const viewportWidth = window.visualViewport?.width;
        if (viewportWidth) {
            if (position == 'left') {
                if (testimonialIndicator == 0) {
                    return;
                }
                setTestimonialIndicator(testimonialIndicator - 1);
                testimonialCarouselRef?.current?.scroll({
                    left: (testimonialCarouselRef.current.scrollLeft -=
                        (90 / 100) * viewportWidth),
                    behavior: 'smooth',
                });
            }
            if (position == 'right' && testimonies) {
                if (testimonialIndicator == testimonies.length - 1) {
                    return;
                }
                setTestimonialIndicator(testimonialIndicator + 1);
                testimonialCarouselRef?.current?.scroll({
                    left: (testimonialCarouselRef.current.scrollLeft +=
                        (90 / 100) * viewportWidth),
                    behavior: 'smooth',
                });
            }
        }
        if (!viewportWidth) {
            return;
        }
    };

    // useEffect(() => {
    //     if (testimonialCarouselRef.current) {
    //         testimonialCarouselRef.current.addEventListener('scroll', () => {
    //             const scrollPosition = testimonialCarouselRef.current?.scrollLeft;
    //             const containerWidth = testimonialCarouselRef.current?.clientWidth;
    //             const totalWidth = testimonialCarouselRef.current?.scrollWidth;
    //             if (scrollPosition && containerWidth && totalWidth) {
    //                 const maxScrollLeft = totalWidth - containerWidth;
    //                 const percentageScrolled = (scrollPosition / maxScrollLeft) * 100;
    //                 console.log("percentageScrolled", percentageScrolled);
    //                 console.log("Math.round(percentageScrolled / 20)", Math.round(percentageScrolled / 20));

    //                 // update the testimonial indicator
                    
    //             }
    //         })
    //     }
    // }, [testimonialCarouselRef])

    return (
        <section className="section flex flex-col items-center justify-center gap-14 py-14 bg-[url(/images/man_smiling.jpg)] bg-cover bg-fixed bg-no-repeat">
            <div className="flex flex-col items-center justify-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold text-white"
                >
                    Hear Directly from Our Happy Clients: Real Results, Real Impact
                </motion.h2>
            </div>
            <div className="flex flex-col items-center gap-4 w-[90%]">
                <div ref={testimonialCarouselRef} className="flex flex-row items-center gap-4 overflow-x-auto flex-nowrap snap-mandatory snap-x w-full hide-scrollbar transition-all duration-300">
                    {
                        testimonies.map((testimonial, index) => (
                            <div key={index} className="bg-white p-5 shadow-md flex flex-col items-center justify-center gap-2 text-center w-[300px] min-w-[300px] max-w-[300px] snap-center">
                                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    {
                                        Array.from({ length: 5 }, (_, index) => (
                                            <Icons.Star key={index} className="w-4 h-4 text-yellow-500" />
                                        ))
                                    }
                                </div>
                                <p className="text-sm leading-6 font-normal">{testimonial.message}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="items-center justify-center gap-2 hidden md:flex">
                    <button onClick={() => scrollTestimonialCarouselContainer('left')} className="bg-primary-light/10 hover:bg-primary-light/20 text-white px-4 py-2 rounded-md">
                        <Icons.ArrowLeft className="w-4 h-4 text-white" />
                    </button>
                    <button onClick={() => scrollTestimonialCarouselContainer('right')} className="bg-primary-light/10 hover:bg-primary-light/20 text-white px-4 py-2 rounded-md">
                        <Icons.ArrowRight className="w-4 h-4 text-white" />
                    </button>
                </div>
                {/* <div className="flex items-center justify-center gap-2">
                    {testimonies?.map((each, index) => (
                        <span
                            key={index}
                            className={`${index == testimonialIndicator ? "bg-primary-light" : "bg-primary-light/20"} w-2 h-2 rounded-full`}
                        ></span>
                    ))}
                </div> */}
            </div>
        </section>
    );
}

export default TestimonialSection;