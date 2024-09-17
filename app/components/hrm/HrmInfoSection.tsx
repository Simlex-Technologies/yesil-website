"use client";

import { FunctionComponent, ReactElement } from "react";
import CustomImage from "../ui/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface HrmInfoSectionProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    className?: string;
}

const HrmInfoSection: FunctionComponent<HrmInfoSectionProps> = ({ title, description, image, className }): ReactElement => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
             className={`flex flex-col gap-4 w-[80%] min-w-[80%] snap-center ${className} lg:w-full lg:min-w-[auto]`}>
            <div className="w-full h-52 rounded-3xl overflow-hidden relative">
                <CustomImage src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-lg text-primary-dark font-bold">{title}</h4>
                <p className="text-sm text-primary-dark">{description}</p>
            </div>
        </motion.div>
    );
}

export default HrmInfoSection;