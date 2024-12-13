"use client";
import { FaqSection } from "@/components/LandingPage/FAQ/FaqSection";
import React from "react";
import { Navbar } from "./Navbar";
import { ServicesDetails } from "./[id]";

const ServicePage = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <Navbar />
      <ServicesDetails />
      <FaqSection />
    </div>
  );
};

export default ServicePage;
