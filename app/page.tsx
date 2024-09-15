import AboutSection from "./components/homepage/AboutSection";
import ContactSection from "./components/homepage/ContactSection";
import GoogleReviewSection from "./components/homepage/GoogleReviewSection";
import HeroSection from "./components/homepage/HeroSection";
import ServiceSection from "./components/homepage/ServiceSection";
import TestimonialSection from "./components/homepage/TestimonialSection";

export default function Home() {
    return (
        <main className="font-[family-name:var(--font-plus-jakarta-sans)] select-none">
            <HeroSection />
            <GoogleReviewSection />
            <AboutSection />
            <ServiceSection />
            <TestimonialSection />
            <ContactSection />
        </main>
    );
}
