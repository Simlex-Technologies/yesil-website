"use client";

import { FunctionComponent, ReactElement } from "react";
import PageHero from "../components/shared/PageHero";
import AboutSection from "../components/homepage/AboutSection";
import { motion } from "framer-motion";
import InfoSection from "../components/aboutpage/InfoSection";
import images from "@/public/images";
import TestimonialSection from "../components/homepage/TestimonialSection";
import ContactSection from "../components/homepage/ContactSection";
import GoogleReviewSection from "../components/homepage/GoogleReviewSection";

interface AboutUsPageProps {

}

const AboutUsPage: FunctionComponent<AboutUsPageProps> = (): ReactElement => {
    return (
        <main className="font-[family-name:var(--font-plus-jakarta-sans)] select-none">
            <PageHero title="About Us" />

            <AboutSection
                excludeCTA
                description={
                    <>
                        <p>
                            Fast growing corporate organizations in Nigeria are focused on ensuring that they supersede industry goals and focus on remaining competitive. This reason and many more does not give them enough time to monitor of the crucial part of running the organization (Human Resources and Logistics).
                        </p>
                        <br />
                        <p className="hidden lg:block">
                            Although Human Resources and Logistics department of an organization are crucial part of the organization to keep it running, it can still be managed by professionals who are trained to manage the department.
                        </p>
                    </>
                }
            />

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center text-sm leading-7 font-medium mb-5 p-5 block lg:hidden"
            >
                Although Human Resources and Logistics department of an organization are crucial part of the organization to keep it running, it can still be managed by professionals who are trained to manage the department.
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center text-sm leading-7 font-medium mb-5 p-5 lg:text-left lg:section"
            >
                The Founder, Professor Liafisu Sina Yekini has identified the need to help corporate organizations hire highly qualified talents to fill positions quickly and promptly and also help companies manage their transportation needs without being made to spend extra. This led to the establishment of Yesil Logistics and General Services Ltd and since establishment we have managed to oversee the Human resources and Logistics harm of Core Trust Investment Ltd (Our major Partner).
            </motion.p>
            <InfoSection
                title="Our Mission"
                description="Together with managing the company's transportation needs, Yesil Logistics and General Services Ltd.'s goal is to assist in the creation, execution, and support of initiatives and procedures that benefit our partner companies and their staff members. This will enhance employee welfare, empowerment, growth, and retention."
                image={images.target}
            />
            <InfoSection
                title="Our Core Values"
                description="We are responsible. Our goal as a company is to add value, and we take great pride in doing so. Our competitive efficiency, agility, and fitness are our main priorities. We all have the authority to perform to the highest standard and make wise decisions."
                image={images.core_values}
                ltr
            />

            {/* <GoogleReviewSection /> */}
            <TestimonialSection />

            <ContactSection />
        </main>
    );
}

export default AboutUsPage;