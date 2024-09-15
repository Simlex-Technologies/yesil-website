"use client";

import { FunctionComponent, ReactElement } from "react";
import Button from "../ui/button";
import CustomImage from "../ui/image";
import images from "@/public/images";
import { motion } from "framer-motion";

interface HeroSectionProps {

}

const HeroSection: FunctionComponent<HeroSectionProps> = (): ReactElement => {
    return (
        <section className="section flex flex-col items-center justify-center py-32 pb-8">
            <div className="flex flex-col items-start gap-7">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="text-[40px] leading-[48px] text-dark-grey font-extrabold"
                >
                    Seamless HR Solutions and Logistics Excellence
                </motion.h1>
                <Button>
                    Get Started
                </Button>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="relative min-h-[400px] w-full"
            >
                <CustomImage src={images.hero_img} alt="HR Specialists" fill className="object-contain" />
            </motion.div>
        </section>
    );
}

export default HeroSection;