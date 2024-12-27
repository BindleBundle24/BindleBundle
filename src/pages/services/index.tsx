"use client";
import { FaqSection } from "@/components/LandingPage/FAQ/FaqSection";
import React, { useEffect } from "react";
import ServicesDetails from "./[id]";
import { Text, Box } from "@chakra-ui/react";
import { useQueryState } from "nuqs";
import { usePathname } from "next/navigation";

const ServicePage = () => {
  const Pathname = usePathname();
  const [moveType, setMoveType] = useQueryState("type", {});

  useEffect(() => {
    if (Pathname === "/services" && !moveType) {
      setMoveType("commercial");
    }
  }, [moveType, Pathname]);
  return (
    <Box
      display={"flex"}
      width={"100%"}
      flexDirection={"column"}
      gapY={{ base: "32px", xl: "64px" }}
    >
      <ServicesDetails />
      <Text
        maxWidth={"1257px"}
        height={"1px"}
        display={{ base: "hidden", xl: "flex" }}
        marginX={"auto"}
        backgroundColor={"#8D8B8B"}
      ></Text>

      <FaqSection />
    </Box>
  );
};

export default ServicePage;
