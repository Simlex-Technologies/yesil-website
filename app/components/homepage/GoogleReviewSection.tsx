"use client";

import { FunctionComponent, ReactElement } from "react";
import CustomImage from "../ui/image";
import images from "@/public/images";
import { Icons } from "../ui/icons";
import { motion } from "framer-motion";

interface GoogleReviewSectionProps {

}

const GoogleReviewSection: FunctionComponent<GoogleReviewSectionProps> = (): ReactElement => {
    return (
        <section className="section flex flex-col items-center justify-center bg-primary-light py-7 md:bg-app-grey-google-review">
            <p className="text-center text-xl font-medium w-[80%] mb-3">Trusted by organizations for talent precision</p>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="flex items-center gap-2">
                <Icons.Google className="w-24" />
                <div className="flex items-center">
                    <Icons.Star className="w-5" />
                    <Icons.Star className="w-5" />
                    <Icons.Star className="w-5" />
                    <Icons.Star className="w-5" />
                    <Icons.Star className="w-5" />
                </div>
            </motion.div>
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="text-sm">(20 Reviews, 4.8 Rating)</motion.p>
        </section>
    );
}

export default GoogleReviewSection;