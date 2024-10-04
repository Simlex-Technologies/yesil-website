"use client";

import { FunctionComponent, ReactElement } from "react";
import { motion } from "framer-motion";
import CustomImage from "../ui/image";
import images from "@/public/images";
import { StaticImageData } from "next/image";

interface InfoSectionProps {
    title: string;
    description: string;
    image: string | StaticImageData
    ltr?: boolean
}

const InfoSection: FunctionComponent<InfoSectionProps> = ({ title, description, image, ltr = false }): ReactElement => {
    return (
        <section className="section flex flex-col items-center justify-center gap-14 bg-white py-10">
            <div className={`flex flex-col lg:flex-row ${ltr ? "md:!flex-row-reverse" : ""} lg:justify-between lg:w-full lg:items-center`}>
                <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start lg:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold mb-4 text-primary-dark"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center text-sm leading-7 font-medium mb-5 lg:text-left"
                    >
                        {description}
                    </motion.p> 
                </div>
                <div className={`w-full h-48 relative overflow-hidden rounded-[40px] ${ltr ? "rounded-bl-none" : "rounded-br-none"} lg:w-[400px] lg:min-w-[400px] lg:h-[300px]`}>
                    <CustomImage src={image} alt="target" fill className="object-cover" />
                </div>
            </div>
        </section>
    );
}

export default InfoSection;