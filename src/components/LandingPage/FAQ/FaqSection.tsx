import React from "react";
import { FAQs } from "./Faq";
import { ContactUs } from "./ContactUs";
import { Box } from "@chakra-ui/react";

export const FaqSection = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      width={{ base: "100%", md: "1257px" }}
      marginTop={{ base: "40px", md: "0px" }}
      marginX={"auto"}
      justifyContent={"space-between"}
      alignItems={"start"}
      paddingX={{ base: "24px", md: "0px" }}
      id="contact-us"
    >
      <FAQs />
      <ContactUs />
    </Box>
  );
};
