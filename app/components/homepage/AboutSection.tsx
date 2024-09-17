"use client";

import { FunctionComponent, ReactElement } from "react";
import { motion } from "framer-motion";
import Button from "../ui/button";
import CustomImage from "../ui/image";
import images from "@/public/images";
import Link from "next/link";

interface AboutSectionProps {
    excludeCTA?: boolean;
    description?: string | ReactElement;
}

const AboutSection: FunctionComponent<AboutSectionProps> = ({ excludeCTA, description }: AboutSectionProps): ReactElement => {
    return (
        <section className="section flex flex-col items-center justify-center gap-14 bg-white py-10 md:py-20 lg:flex-row-reverse lg:gap-20">
            <div className="flex flex-col items-center justify-center lg:items-start lg:w-[60%]">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold mb-4 md:text-3xl"
                >
                    Welcome to Yesil Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center text-sm leading-7 font-medium mb-5 lg:text-left"
                >
                    {description ?? "Fast growing corporate organizations in Nigeria are focused on ensuring that they supersede industry goals and focus on remaining competitive. This reason and many more does not give them enough time to monitor of the crucial part of running the organization (Human Resources and Logistics)."}
                </motion.p>
                {
                    !excludeCTA && (
                        <Link
                            href="/about-us"
                            className="link">
                            About Us
                        </Link>
                    )
                }
            </div>
            <div className="relative">
                <div className="flex items-center justify-center relative w-72 h-72 rounded-[70px] rounded-bl-none overflow-hidden lg:w-96 lg:h-96">
                    <CustomImage src={images.hr_lady} alt="HR Lady" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 lg:w-20 lg:h-20 lg:-left-6 lg:-bottom-6">
                    <CustomImage src={images.logo} alt="Yesil Services logo" fill className="object-cover" />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;