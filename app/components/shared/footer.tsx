import { FunctionComponent, ReactElement } from "react";
import CustomImage from "../ui/image";
import images from "@/public/images";
import Link from "next/link";
import { Icons } from "../ui/icons";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = (): ReactElement => {
    return (
        <footer className="section flex flex-col justify-center items-start gap-8 bg-sky-blue py-10 pb-20">
            <div className="flex flex-col items-start justify-center gap-0">
                <div className="w-52 h-20 relative">
                    <CustomImage src={images.logo_full_white} alt="logo" className="object-contain" />
                </div>
                <p className="text-white text-sm mb-3">
                    The HR & Logistics partner your business needs to sustainably thrive.
                </p>
                <div className="flex flex-row items-center justify-center gap-2">
                    <Link href="/" target="_blank">
                        <Icons.Youtube />
                    </Link>
                    <Link href="/" target="_blank">
                        <Icons.X />
                    </Link>
                    <Link href="/" target="_blank">
                        <Icons.Facebook />
                    </Link>
                    <Link href="/" target="_blank">
                        <Icons.Instagram />
                    </Link>
                    <Link href="/" target="_blank">
                        <Icons.LinkedIn />
                    </Link>
                </div>
            </div>
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
                            className="font-light text-sm">
                            17/19, Allen Avenue, Oshopey Plaza,
                            3rd Floor, Ikeja Lagos.
                        </Link>
                    </li>
                    <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                        <span className="w-6 h-6 grid place-items-center">
                            <Icons.Mail className="w-4 h-4" />
                        </span>
                        <Link
                            href="mailto:info@yesilservices.com"
                            className="font-light text-sm">
                            info@yesilservices.com
                        </Link>
                    </li>
                    <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                        <span className="w-6 h-6 grid place-items-center">
                            <Icons.Phone className="w-4 h-4" />
                        </span>
                        <div className="flex flex-row items-start justify-center gap-1">
                            <Link
                                href="tel:+2347040256707"
                                className="font-light text-sm">
                                +234 704 025 6707,
                            </Link>
                            <Link href="tel:+2347064325371">
                                +234 706 432 5371
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
                <h3 className="text-white text-lg font-semibold">
                    Quick Links
                </h3>
                <ul className="flex flex-col items-start justify-center gap-3">
                    <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                        <Link href="/" className="font-light text-sm">
                            Home
                        </Link>
                    </li>
                    <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                        <Link href="/" className="font-light text-sm">
                            About Us
                        </Link>
                    </li>
                    <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                        <Link href="/" className="font-light text-sm">
                            Human Resources
                        </Link>
                    </li>
                    <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                        <Link href="/" className="font-light text-sm">
                            Logistics
                        </Link>
                    </li>
                    <li className="text-white text-sm flex flex-row items-start justify-center gap-1">
                        <Link href="/" className="font-light text-sm">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;