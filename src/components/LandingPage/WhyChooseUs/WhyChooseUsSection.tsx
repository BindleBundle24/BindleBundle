import React from "react";
import { WhyHireUs } from "./WhyHireUs";
import { MoreAboutUs } from "./MoreAboutUs";
import { WhyChooseUs } from "./WhyChooseUs";
import { Box } from "@chakra-ui/react";

export const WhyChooseUsSection = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={{ base: "100%", sm: "80%", md: "1257px" }}
      marginX={"auto"}
      justifyContent={"space-between"}
      alignItems={"start"}
      paddingX={"0px"}
      gapY={"32px"}
      height={"full"}
    >
      <WhyChooseUs />
      <WhyHireUs />
      <MoreAboutUs />
    </Box>
  );
};
