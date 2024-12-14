"use client";
import { FaqSection } from "@/components/LandingPage/FAQ/FaqSection";
import React, { Suspense } from "react";
import { Navbar } from "./Navbar";
import { ServicesDetails } from "./[id]";

const ServicePage = () => {
  return (
    <Suspense>
      <div className="flex flex-col gap-y-8">
        <Navbar />
        <ServicesDetails />
        <FaqSection />
      </div>
    </Suspense>
  );
};

export default ServicePage;
