"use client";
import { FaqSection } from "@/components/LandingPage/FAQ/FaqSection";
import { Herosection } from "@/components/LandingPage/Herosection/Herosection";
import { WhyChooseUsSection } from "@/components/LandingPage/WhyChooseUs/WhyChooseUsSection";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <Herosection />
      <WhyChooseUsSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
