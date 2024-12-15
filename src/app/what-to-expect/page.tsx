"use client";
import { FaqSection } from "@/components/LandingPage/FAQ/FaqSection";
import React from "react";
import { WhatToExpect } from "./WhatToExpect";
import { Text } from "@chakra-ui/react";
import { WhatToExpectSlider } from "./WhatToExpectSlider";

const WhatToExpectPage = () => {
  return (
    <div className="flex flex-col gap-y-8 md:gap-y-16">
      <WhatToExpect />
      <Text
        width={"1257px"}
        height={"1px"}
        display={{ base: "none", md: "flex" }}
        marginX={"auto"}
        backgroundColor={"#8D8B8B"}
      ></Text>
      <WhatToExpectSlider />
      <Text
        width={"1257px"}
        height={"1px"}
        display={{ base: "none", md: "flex" }}
        marginX={"auto"}
        backgroundColor={"#8D8B8B"}
      ></Text>
      <FaqSection />
    </div>
  );
};

export default WhatToExpectPage;
