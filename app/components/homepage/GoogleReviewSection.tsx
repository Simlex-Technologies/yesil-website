import { FunctionComponent, ReactElement } from "react";
import CustomImage from "../ui/image";
import images from "@/public/images";
import { Icons } from "../ui/icons";

interface GoogleReviewSectionProps {

}

const GoogleReviewSection: FunctionComponent<GoogleReviewSectionProps> = (): ReactElement => {
    return (
        <section className="section flex flex-col items-center justify-center bg-primary-light py-7">
            <p className="text-center text-xl font-medium w-[80%] mb-3">Trusted by organizations for talent precision</p>
            <div className="flex items-center gap-2">
                <Icons.Google className="w-24" />
                <div className="flex items-center">
                    <Icons.Star className="w-5" />
                    <Icons.Star className="w-5" />
                    <Icons.Star className="w-5" />
                    <Icons.Star className="w-5" />
                    <Icons.Star className="w-5" />
                </div>
            </div>
            <p className="text-sm">(20 Reviews, 4.8 Rating)</p>
        </section>
    );
}

export default GoogleReviewSection;