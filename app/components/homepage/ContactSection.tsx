"use client";

import { FunctionComponent, ReactElement } from "react";
import Button from "../ui/button";
import CustomImage from "../ui/image";
import images from "@/public/images";
import { motion } from "framer-motion";

interface ContactSectionProps {

}

const ContactSection: FunctionComponent<ContactSectionProps> = (): ReactElement => {
    return (
        <section className="bg-white py-14 md:py-20">
            <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="flex flex-col items-center justify-center gap-4 bg-white rounded-3xl p-10 shadow-2xl shadow-gray-200">
                <div className="w-12 h-12 relative">
                    <CustomImage src={images.logo} alt="logo" className="object-contain" />
                </div>
                <h2 className="text-2xl font-normal text-center">Ready to Get a&nbsp;
                    <span className="text-primary font-bold">Growth Assistance for Your Business?</span>
                </h2>
                <Button>Get Started</Button>
            </motion.div>
        </section>
    );
}

export default ContactSection;