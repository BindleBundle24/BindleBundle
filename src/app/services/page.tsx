"use client";
import { FaqSection } from "@/components/LandingPage/FAQ/FaqSection";
import React, { Suspense } from "react";
import { Navbar } from "./Navbar";
import { ServicesDetails } from "./[id]";
import { Text } from "@chakra-ui/react";

const ServicePage = () => {
  return (
    <Suspense>
      <div className="flex flex-col  gap-y-8 md:gap-y-16">
        <Navbar />
        <ServicesDetails />
        <Text
          width={"1257px"}
          height={"1px"}
          display={{ base: "hidden", md: "flex" }}
          marginX={"auto"}
          backgroundColor={"#8D8B8B"}
        ></Text>

        <FaqSection />
      </div>
    </Suspense>
  );
};

export default ServicePage;
