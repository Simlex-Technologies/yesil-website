import { FunctionComponent, ReactElement } from "react";
import CustomImage from "../ui/image";
import images from "@/public/images";
import Link from "next/link";
import { Icons } from "../ui/icons";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = (): ReactElement => {
    return (
        <footer className="section flex flex-col justify-center items-start gap-8 bg-sky-blue py-10 pb-20 font-[family-name:var(--font-plus-jakarta-sans)] lg:flex-row lg:justify-between">
            <div className="flex flex-col items-start justify-center gap-0 lg:w-[30%]">
                <Link href="/" className="w-52 h-20 relative lg:h-16">
                    <CustomImage src={images.logo_full_white} alt="logo" className="object-contain" />
                </Link>
                <p className="text-white text-sm mb-3 lg:mb-6">
                    The HR & Logistics partner your business needs to sustainably thrive.
                </p>
                <div className="flex flex-row items-center justify-center gap-2">
                    {/* <Link href="/" target="_blank" className="hover:-translate-y-1 transition-all duration-200">
                        <Icons.Youtube />
                    </Link>
                    <Link href="/" target="_blank" className="hover:-translate-y-1 transition-all duration-200">
                        <Icons.X />
                    </Link> */}
                    <Link href="https://www.instagram.com/yesilservices_/" target="_blank" className="hover:-translate-y-1 transition-all duration-200">
                        <Icons.Instagram />
                    </Link>
                    <Link href="linkedIn.com/company/104369520/admin/dashboard" target="_blank" className="hover:-translate-y-1 transition-all duration-200">
                        <Icons.LinkedIn />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2 lg:flex-row-reverse lg:gap-10">
                <div className="flex flex-col items-start justify-center gap-2">
                    <h3 className="text-white text-lg font-semibold">
                        Contact Us
                    </h3>
                    <ul className="flex flex-col items-start justify-center gap-3">
                        <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                            <span className="w-6 h-6 grid place-items-center">
                                <Icons.Location className="w-4 h-4" />
                            </span>
                            <Link
                                href="https://www.google.com/maps/search/?api=1&query=17/19,+Allen+Avenue,+Oshopey+Plaza,+3rd+Floor,+Ikeja+Lagos."
                                target="_blank"
                                className="font-light text-sm hover:text-secondary">
                                17/19, Allen Avenue, Oshopey Plaza,
                                3rd Floor, Ikeja Lagos.
                            </Link>
                        </li>
                        <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                            <span className="w-6 h-6 grid place-items-center">
                                <Icons.Mail className="w-4 h-4" />
                            </span>
                            <div className="flex flex-row flex-wrap max-w-[400px]">
                                <Link
                                    href="mailto:info@yesilservices.com"
                                    className="font-light text-sm hover:text-secondary mr-2">
                                    info@yesilservices.com
                                </Link>
                                <Link
                                    href="mailto:logistics@yesilservices.com"
                                    className="font-light text-sm hover:text-secondary">
                                    logistics@yesilservices.com
                                </Link>
                                <Link
                                    href="mailto:hr@yesilservices.com"
                                    className="font-light text-sm hover:text-secondary">
                                    hr@yesilservices.com
                                </Link>
                            </div>
                        </li>
                        <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                            <span className="w-6 h-6 grid place-items-center">
                                <Icons.Phone className="w-4 h-4" />
                            </span>
                            <div className="flex flex-row items-start justify-center gap-1">
                                <Link
                                    href="tel:2347040256707"
                                    className="font-light text-sm hover:text-secondary">
                                    +234 704 025 6707,
                                </Link>
                                <Link href="tel:2348063145310"
                                    className="font-light text-sm hover:text-secondary">
                                    +234 806 314 5310
                                </Link>
                                {/* <Link href="tel:+2347064325371"
                                    className="font-light text-sm hover:text-secondary">
                                    +234 706 432 5371
                                </Link> */}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 lg:flex-row lg:gap-10">
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h3 className="text-white text-lg font-semibold">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col items-start justify-center gap-3">
                            <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                                <Link href="/" className="font-light text-sm hover:text-secondary">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                                <Link href="/about-us" className="font-light text-sm hover:text-secondary">
                                    About Us
                                </Link>
                            </li>
                            <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                                <Link href="/contact-us" className="font-light text-sm hover:text-secondary">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h3 className="text-white text-lg font-semibold">
                            Services
                        </h3>
                        <ul className="flex flex-col items-start justify-center gap-3">
                            <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                                <Link href="/services/hrm" className="font-light text-sm hover:text-secondary">
                                    Human Resources
                                </Link>
                            </li>
                            <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                                <Link href="/services/logistics" className="font-light text-sm hover:text-secondary">
                                    Logistics
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;