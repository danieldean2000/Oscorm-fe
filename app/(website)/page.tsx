'use client';

import Hero from "@/components/Home/hero";
import TrustedByIndustry from "@/components/Home/trusted-by-industry";
import WhyChooseOscorm from "@/components/Home/why-choose-oscorm";
import HireBySkill from "@/components/Home/hire-by-skill";
import AiTransparency from "@/components/Home/ai-transparency";
import Hero1 from "@/components/Home/hero1";
import TestimonialSection from "@/components/Home/testimonial";
import FaqSection from "@/components/Home/faq";
import CtaSection from "@/components/Home/cta";
export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <Hero />
            <Hero1 />

            {/* Trusted By Industry Leaders */}
            <TrustedByIndustry />

            {/* Why Choose Oscorm */}
            <WhyChooseOscorm />

            {/* Hire By Skill */}
            <HireBySkill />

            {/* AI Transparency */}
            <AiTransparency />

            {/* Testimonials */}
            <TestimonialSection />

            {/* FAQ Section */}
            <FaqSection />

            {/* CTA Section */}
            <CtaSection />
        </>
    );
}
