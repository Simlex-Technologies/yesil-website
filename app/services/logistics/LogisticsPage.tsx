import InfoSection from "@/app/components/aboutpage/InfoSection";
import HrmInfoSection from "@/app/components/hrm/HrmInfoSection";
import PageHero from "@/app/components/shared/PageHero";
import images from "@/public/images";
import { FunctionComponent, ReactElement } from "react";

interface LogisticsPageProps {

}

const LogisticsPage: FunctionComponent<LogisticsPageProps> = (): ReactElement => {

    const transportationManagement = [
        {
            title: "Route Optimization",
            description: "Planning the most efficient routes to reduce transit time and costs",
            image: images.route_optimization
        },
        {
            title: "Last-Mile Delivery",
            description: "Providing and maintaining a fleet of vehicles for transportation needs",
            image: images.last_mile_delivery
        },
        {
            title: "Fleet Management",
            description: "We Create and manage job postings on various platforms",
            image: images.fleet_management
        },
    ];

    return (
        <main className="font-[family-name:var(--font-plus-jakarta-sans)] select-none">
            <PageHero title="Logistics" />
            <InfoSection
                title="Streamline Your Workforce, Optimize Your Supply Chain"
                description="The logistics arm of our company provides a variety of services to corporate organizations with the aim of managing the efficient movement of people. These services are crucial for companies that rely on the timely and cost-effective transportation of products, whether locally or internationally. Here’s a breakdown of the services we render to corporate organizations:"
                image={images.logistics}
            />
            <section className="flex flex-col py-14 gap-4 items-center justify-center md:section lg:bg-primary-light3">
                <h3 className="text-2xl text-center text-primary-dark font-bold w-[80%]">Transportation Management</h3>
                <div className="flex flex-col gap-10 w-full px-5 overflow-x-auto hide-scrollbar snap-mandatory snap-x lg:flex-row lg:overflow-hidden lg:flex-nowrap lg:justify-between">
                    {
                        transportationManagement.map((service, index) => (
                            <HrmInfoSection
                                key={index}
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                className="w-full"
                            />
                        ))
                    }
                </div>
            </section>
        </main>
    );
}

export default LogisticsPage;