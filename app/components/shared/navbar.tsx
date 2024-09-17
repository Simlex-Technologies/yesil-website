"use client"

import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import images from "@/public/images";
import { Icons } from "../ui/icons";
import { motion } from "framer-motion";
import CustomImage from "../ui/image";
import Button from "../ui/button";
import { mobileMenuVariant } from "@/app/animations/navbarAnimations";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {
    const pathname = usePathname();

    const [navbarIsVisible, setNavbarIsVisible] = useState(false);
    const [isServicesExpanded, setIsServicesExpanded] = useState(false);

    const isPathActive = (path: string) => {
        return pathname === path
    }

    const isServicesActive = isPathActive("/services/logistics") || isPathActive("/services/hrm");

    const linkClass = (path: string) => {
        return `bg-transparent text-white w-full py-2 px-0 text-left hover:text-secondary ${isPathActive(path) ? "text-secondary border-b-2 border-secondary" : ""}`;
    }

    useEffect(() => {
        if (!navbarIsVisible) {
            setIsServicesExpanded(false);
        }
    }, [navbarIsVisible]);

    return (
        <motion.nav
            initial="closed"
            animate={navbarIsVisible ? "opened" : "closed"}
            className={`section flex justify-between items-center bg-white h-16 shadow-lg fixed top-0 left-0 right-0 z-50 font-[family-name:var(--font-plus-jakarta-sans)]`}>
            <Link href={"/"} className="flex items-center gap-1">
                <div className="relative h-10 w-10">
                    <CustomImage src={images.logo} alt="logo" fill className="object-contain" />
                </div>
                <p className="text-base font-semibold">YESIL SERVICES</p>
            </Link>
            <motion.div
                className="grid place-items-center w-9 h-9 bg-gray-100 rounded-md cursor-pointer"
                transition={{ duration: 0.25 }}
                whileTap={{ scale: 0.85 }}
                onClick={() => setNavbarIsVisible(!navbarIsVisible)}>
                <Icons.Hamburger />
            </motion.div>


            <motion.div
                variants={mobileMenuVariant({ direction: "fromRight" })}
                className="section absolute z-10 top-16 left-0 bg-sky-blue w-full flex flex-col gap-4 pt-5 pb-12">
                <Link
                    href={"/"}
                    onClick={() => setNavbarIsVisible(false)}
                    className={linkClass("/")}>
                    Home
                </Link>
                <Link
                    href={"/about-us"}
                    onClick={() => setNavbarIsVisible(false)}
                    className={linkClass("/about-us")}>
                    About Us
                </Link>
                <Button
                    onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                    className={`!bg-transparent !text-white !w-full !py-2 !px-0 !text-left flex items-center justify-between ${isServicesActive ? "text-secondary border-b-2 border-secondary" : ""}`}>
                    Services
                    {isServicesExpanded ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
                </Button>
                <div className={`overflow-hidden transition-all duration-300 flex flex-col ${isServicesExpanded ? "h-[96px]" : "h-[0px]"}`}>
                    <Link
                        href={"/services/logistics"}
                        onClick={() => setNavbarIsVisible(false)}
                        className="!bg-transparent !text-white !w-full !py-3 !px-0 !text-left hover:!text-secondary">
                        Logistics
                    </Link>
                    <Link
                        href={"/services/hrm"}
                        onClick={() => setNavbarIsVisible(false)}
                        className="!bg-transparent !text-white !w-full !py-3 !px-0 !text-left hover:!text-secondary">
                        Human Resource Management
                    </Link>
                </div>
                <Link
                    href={"/contact-us"}
                    onClick={() => setNavbarIsVisible(false)}
                    className="bg-secondary text-white py-2 px-6 rounded-lg mt-8 hover:bg-dark-grey">
                    Contact Us
                </Link>
            </motion.div>
        </motion.nav>
    );
}

export default Navbar;