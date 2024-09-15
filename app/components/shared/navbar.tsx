"use client"

import { FunctionComponent, ReactElement } from "react";
import images from "@/public/images";
import { Icons } from "../ui/icons";
import { motion } from "framer-motion";
import CustomImage from "../ui/image";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
    return (
        <nav className={`section flex justify-between items-center bg-white h-16 shadow-lg fixed top-0 left-0 right-0 z-50`}>
            <div className="flex items-center gap-1">
                <div className="relative h-10 w-10">
                    <CustomImage src={images.logo} alt="logo" fill className="object-contain" />
                </div>
                <p className="text-base font-semibold">YESIL SERVICES</p>
            </div>
            <motion.div
                className="grid place-items-center w-9 h-9 bg-gray-100 rounded-md cursor-pointer"
                transition={{ duration: 0.25 }}
                whileTap={{ scale: 0.85 }}
            >
                <Icons.Hamburger />
            </motion.div>
        </nav>
    );
}

export default Navbar;