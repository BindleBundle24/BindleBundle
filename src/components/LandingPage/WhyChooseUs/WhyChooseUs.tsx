"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { Slider } from "./Slider";

const whyChooseUSDetails = [
  {
    name: "Commercial Move",
    description:
      "Commercial moves require precision and speed to ensure minimal disruption to your business operations. At Bindle Bundle Movers, we are committed to delivering efficient, reliable, and stress-free moving services so you can focus on swhat matters most—running your business.",
  },
  {
    name: "Residential Move",
    description:
      " Residential moves are more than just relocating items; they’re about ensuring that your new space feels like home. At Bindle Bundle Movers, we pride ourselves on offering dependable service, ensuring your move is seamless and stress-free. Whether you need help with packing, transportation, or specialized services for large items, we’re here to assist every step of the way.",
  },
  {
    name: "Specialty Move",
    description:
      "Specialty moves are all about trust and attention to detail. At Bindle Bundle Movers, we understand the value of your cherished items and are dedicated to providing the care and professionalism required to move them safely. Whether it’s across the street or across the city, we’ve got you covered",
  },
];

export const WhyChooseUs = () => {
  return (
    <Box
      width={{ base: "357px", md: "1246px" }}
      height={{ base: "453px", md: "515px" }}
      className="bg-[url('/assets/bg-why-choose-us-mobile.png')] md:bg-[url('/assets/bg-why-choose-us.png')] rounded-[20px] mx-auto"
      id="services"
    >
      <Box className="w-full h-full">
        <Box className=" h-full">
          <Slider data={whyChooseUSDetails} />
        </Box>
      </Box>
    </Box>
  );
};
