import React from "react";
import { FAQs } from "./Faq";
import { ContactUs } from "./ContactUs";
import { Box } from "@chakra-ui/react";

export const FaqSection = () => {
  return (
    <Box maxWidth={"1440px"} marginX="auto">
      <Box
        display={"flex"}
        flexDirection={{ base: "column", xl: "row" }}
        width={{ base: "100%", xl: "1257px" }}
        marginTop={{ base: "40px", xl: "0px" }}
        marginX={"auto"}
        justifyContent={"space-between"}
        alignItems={"start"}
        paddingX={{ base: "0px", xl: "0px" }}
        id="contact-us"
      >
        <FAQs />
        <ContactUs />
      </Box>
    </Box>
  );
};
