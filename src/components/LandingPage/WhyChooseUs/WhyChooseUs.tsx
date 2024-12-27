import React from "react";
import { Box } from "@chakra-ui/react";
import { Slider } from "./Slider";

const whyChooseUSDetails = [
  {
    name: "Commercial Move",
    description:
      "Commercial moves require precision and speed to ensure minimal disruption to your business operations. At Bindle Bundle Movers, we are committed to delivering efficient, reliable, and stress-free moving services so you can focus on what matters most—running your business.",
    type: "commercial",
  },
  {
    name: "Residential Move",
    description:
      " Residential moves are more than just relocating items; they’re about ensuring that your new space feels like home. At Bindle Bundle Movers, we pride ourselves on offering dependable service, ensuring your move is seamless and stress-free. Whether you need help with packing, transportation, or specialized services for large items, we’re here to assist every step of the way.",
    type: "residential",
  },
  {
    name: "Specialty Move",
    description:
      "Specialty moves are all about trust and attention to detail. At Bindle Bundle Movers, we understand the value of your cherished items and are dedicated to providing the care and professionalism required to move them safely. Whether it’s across the street or across the city, we’ve got you covered",
    type: "specialty",
  },
];

export const WhyChooseUs = () => {
  return (
    <Box
      width={{ base: "357px", xl: "1246px" }}
      height={{ base: "453px", xl: "515px" }}
      backgroundImage={{
        base: "url('/assets/bg-why-choose-us-mobile.png')",
        xl: "url(/assets/bg-why-choose-us.png)",
      }}
      borderRadius={"20px"}
      marginX={"auto"}
      id="services"
      position={"relative"}
    >
      <Box width={"100%"} height={"100%"}>
        <Slider data={whyChooseUSDetails} />
      </Box>
    </Box>
  );
};
