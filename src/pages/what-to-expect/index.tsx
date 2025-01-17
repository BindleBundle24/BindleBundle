"use client";
import { FaqSection } from "@/components/LandingPage/FAQ/FaqSection";
import React from "react";
import WhatToExpect from "./WhatToExpect";
import { Text, Box } from "@chakra-ui/react";
import WhatToExpectSlider from "./WhatToExpectSlider";

const WhatToExpectPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gapY={{ base: "32px", xl: "64px" }}
      width={"100%"}
      marginX={"auto"}
    >
      <WhatToExpect />
      <Text
        width={"1257px"}
        height={"1px"}
        display={{ base: "none", xl: "flex" }}
        marginX={"auto"}
        backgroundColor={"#8D8B8B"}
      ></Text>
      <WhatToExpectSlider />
      <Text
        width={"1257px"}
        height={"1px"}
        display={{ base: "none", xl: "flex" }}
        marginX={"auto"}
        backgroundColor={"#8D8B8B"}
      ></Text>
      <FaqSection />
    </Box>
  );
};

export default WhatToExpectPage;
