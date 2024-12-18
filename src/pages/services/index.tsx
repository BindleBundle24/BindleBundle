"use client";
import { FaqSection } from "@/components/LandingPage/FAQ/FaqSection";
import React from "react";
import ServicesDetails from "./[id]";
import { Text, Box } from "@chakra-ui/react";

const ServicePage = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      flexDirection={"column"}
      gapY={{ base: "32px", md: "64px" }}
    >
      <ServicesDetails />
      <Text
        width={"1257px"}
        height={"1px"}
        display={{ base: "hidden", md: "flex" }}
        marginX={"auto"}
        backgroundColor={"#8D8B8B"}
      ></Text>

      <FaqSection />
    </Box>
  );
};

export default ServicePage;
