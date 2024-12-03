"use client";
import { FaqSection } from "@/components/LandingPage/FAQ/page";
import { Herosection } from "@/components/LandingPage/Herosection/Herosection";
// import WhyChooseUs from "@/components/LandingPage/WhyChooseUs/WhyChooseUs";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Herosection />
      <FaqSection />
      {/* <WhyChooseUs /> */}
    </>
  );
};

export default HomePage;
