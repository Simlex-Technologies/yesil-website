"use client"

import InfoSection from "@/app/components/aboutpage/InfoSection";
import ContactSection from "@/app/components/homepage/ContactSection";
import TestimonialSection from "@/app/components/homepage/TestimonialSection";
import HrmInfoSection from "@/app/components/hrm/HrmInfoSection";
import PageHero from "@/app/components/shared/PageHero";
import CustomImage from "@/app/components/ui/image";
import images from "@/public/images";
import { FunctionComponent, ReactElement } from "react";

interface HrmPageProps {

}

const HrmPage: FunctionComponent<HrmPageProps> = (): ReactElement => {

    const trainings = [
        {
            title: "Job Posting and Advertising",
            description: "We Create and manage job postings on various platforms",
            image: images.recruitment
        },
        {
            title: "Candidate Screening",
            description: "We review candidates resumes and conducting initial interviews",
            image: images.screening
        },
        {
            title: "Employee Onboarding",
            description: "We manage the paperwork and orientation onboarding process for new hires.",
            image: images.onboarding
        },
        {
            title: "Temporary & Permanent Staffing",
            description: "We provide temporary contract, and permanent staffing solutions",
            image: images.staffing
        },
    ];

    const employeeRelations = [
        {
            title: "Conflict Resolution",
            description: "We Create and manage job postings on various platforms",
            image: images.conflict_resolution
        },
        {
            title: "Employee Engagement",
            description: "We Create and manage job postings on various platforms",
            image: images.employee_engagement
        },
        {
            title: "Exit Interviews",
            description: "We Create and manage job postings on various platforms",
            image: images.exit_interviews
        },
    ];

    return (
        <main className="font-[family-name:var(--font-plus-jakarta-sans)] select-none">
            <PageHero title="Human Resource Management" />
            <InfoSection
                title="Streamline Your Workforce, Optimize Your Supply Chain"
                description="Our organization offers a wide range of services designed to manage and optimize a company’s workforce. Below is an overview of the services provided by the Human Resources Sector of our organization:"
                image={images.target}
            />
            <section className="flex flex-col py-8 gap-4 items-center justify-center md:section lg:bg-primary-light3">
                <h3 className="text-2xl text-center text-primary-dark font-bold w-[60%]">Recruitment and Staffing</h3>
                <div className="flex flex-row gap-5 w-full px-5 overflow-x-auto hide-scrollbar snap-mandatory snap-x">
                    {
                        trainings.map((training, index) => (
                            <HrmInfoSection
                                key={index}
                                title={training.title}
                                description={training.description}
                                image={training.image}
                            />
                        ))
                    }
                </div>
            </section>
            <section className="flex flex-col py-14 gap-4 items-center justify-center md:section">
                <h3 className="text-2xl text-center text-primary-dark font-bold w-[80%]">Employee Relations</h3>
                <div className="flex flex-col gap-10 w-full px-5 overflow-x-auto hide-scrollbar snap-mandatory snap-x lg:flex-row lg:overflow-hidden lg:flex-nowrap lg:justify-between">
                    {
                        employeeRelations.map((employeeRelation, index) => (
                            <HrmInfoSection
                                key={index}
                                title={employeeRelation.title}
                                description={employeeRelation.description}
                                image={employeeRelation.image}
                                className="w-full"
                            />
                        ))
                    }
                </div>
            </section>
            <TestimonialSection />
            <ContactSection />
        </main>
    );
}

export default HrmPage;