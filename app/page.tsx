'use client';

import Header from "@/components/header";
import Hero from "@/components/Home/hero";
import TrustedByIndustry from "@/components/Home/trusted-by-industry";
import WhyChooseOscorm from "@/components/Home/why-choose-oscorm";
import HireBySkill from "@/components/Home/hire-by-skill";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />

      <main className="flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Trusted By Industry Leaders */}
        <TrustedByIndustry />

        {/* Why Choose Oscorm */}
        <WhyChooseOscorm />

        {/* Hire By Skill */}
        <HireBySkill />

        {/* Future Sections can be added here */}
      </main>

      {/* Footer will go here */}
    </div>
  );
}
