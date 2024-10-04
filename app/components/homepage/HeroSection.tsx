"use client";

import { FunctionComponent, ReactElement } from "react";
import Button, { LinkButton } from "../ui/button";
import CustomImage from "../ui/image";
import images from "@/public/images";
import { motion } from "framer-motion";
import { ApplicationRoutes } from "@/app/constants/applicationRoutes";

interface HeroSectionProps {

}

const HeroSection: FunctionComponent<HeroSectionProps> = (): ReactElement => {
    return (
        <section className="section flex flex-col items-center justify-center py-32 pb-8 bg-[url(/images/home_hero.jpg)] bg-fixed bg-cover bg-center bg-no-repeat lg:flex-row lg:justify-between">
            <div className="flex flex-col items-start gap-7">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="text-[40px] leading-[48px] text-dark-grey font-extrabold md:text-[60px] md:leading-[72px]"
                >
                    Seamless HR <br className="hidden md:block" /> Solutions and Logistics Excellence
                </motion.h1>
                <LinkButton url={ApplicationRoutes.Contact}>
                    Get Started
                </LinkButton>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="relative min-h-[400px] w-full lg:w-[500px]"
            >
                <CustomImage src={images.hero_img} alt="HR Specialists" fill className="object-contain" />
            </motion.div>
        </section>
    );
}

export default HeroSection;