"use client";

import { FunctionComponent, ReactElement } from "react";
import { motion } from "framer-motion";
import { Icons } from "../ui/icons";

interface ServiceSectionProps {

}

const ServiceSection: FunctionComponent<ServiceSectionProps> = (): ReactElement => {

    const services = [
        {
            title: "Best Talent",
            icon: <Icons.Talent className="w-10 h-10" />,
            description: "Choose us for unparalleled access to the best talent, driving your business forward with top-tier expertise and passion"
        },
        {
            title: "Fast Delivery",
            icon: <Icons.Delivery className="w-8 h-8" />,
            description: "For fast, reliable service and exceptional support, choose us to handle all your logistics needs with efficiency and care."
        },
        {
            title: "Outstanding Service",
            icon: <Icons.OutStanding className="w-8 h-8" />,
            description: "We are known for outstanding service, unmatched reliability, and friendly customer support that ensures all your needs are met seamlessly"
        }
    ];

    return (
        <section className="section flex flex-col items-center justify-center gap-14 bg-white py-10">
            <div className="flex flex-col items-center justify-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold mb-5 md:font-normal"
                >
                    The HR & Logistics Service Your Business Needs <br className="hidden md:block" /> <span className="md:font-bold">to Unlock Growth</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-sm leading-7 font-medium mb-5"
                >
                    Unlock your business’s full potential with our comprehensive HR and logistics services, designed to drive growth, enhance efficiency, and support your long-term success.
                </motion.p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
                {
                    services.map((service, index) => {
                        const bgColor = index % 2 === 0 ? "bg-primary-light" : "bg-secondary-light";
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`flex flex-col items-start justify-center gap-5 rounded-[40px] rounded-bl-none p-6 py-7 hover:shadow-service motion-reduce:hover:shadow-none transition-shadow duration-300 ${bgColor}`}
                            >
                                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-dark-grey mb-2">{service.title}</h3>
                                    <p className="text-sm leading-6 font-normal">{service.description}</p>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default ServiceSection;