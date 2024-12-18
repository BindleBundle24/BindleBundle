import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      paddingY={{ base: "50px", md: "0px" }}
      paddingTop={{ base: "0px", md: "51px" }}
      height={{ md: "426px" }}
      backgroundColor="#051937"
      color={"white"}
    >
      <Box
        background="transparent"
        paddingX={{ base: "24px", md: "0" }}
        width={{ base: "full", md: "1235px" }}
        height="full"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="start"
        marginX="auto"
        gap={{ base: "40px", md: "80px" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={{ base: "full", md: "225px" }}
          gap={"16px"}
        >
          {" "}
          <NextLink href="/">
            <Text
              fontWeight="medium"
              fontSize="20px"
              textAlign="center"
              color="#75D130"
              display="flex"
              width="180px"
              height="full"
              justifyContent="start"
              alignItems="center"
              borderBottom={"1px"}
              borderColor={"white"}
            >
              <Box
                width="38px"
                height="65px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={"/assets/logo.svg"}
                  alt="Bindle Bundle Logo"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              Bindle Bundle
            </Text>
          </NextLink>
          <NextLink href="/#contact-us">
            <Text color="#C5C5C5" fontSize="16px">
              FAQs
            </Text>
          </NextLink>
          <NextLink href="/#about-us">
            <Text color="#C5C5C5" fontSize="16px">
              About us
            </Text>
          </NextLink>
          <NextLink href="/#contact-us">
            <Text color="#C5C5C5" fontSize="16px">
              Contact us
            </Text>
          </NextLink>
        </Box>
        <Box
          width={{ md: "176px" }}
          height={{ md: "186px" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Text
            fontSize={"24px"}
            fontWeight={"semibold"}
            display={"flex"}
            alignItems={"end"}
          >
            Pricing
          </Text>
          <Box
            display={"flex"}
            height={"full"}
            justifyContent={"space-between"}
            flexDirection={"column"}
            gap={"16px"}
            marginTop={{ base: "0px", md: "24px" }}
          >
            <NextLink href="/#services">
              <Text color="#C5C5C5" fontSize="16px">
                Full service moving
              </Text>
            </NextLink>
            <NextLink href="/#services">
              <Text color="#C5C5C5" fontSize="16px">
                Packing only service
              </Text>
            </NextLink>
            <NextLink href="/#services">
              <Text color="#C5C5C5" fontSize="16px">
                Just muscles
              </Text>
            </NextLink>
          </Box>
        </Box>
        <Box
          width={{ md: "354px" }}
          height={{ md: "186px" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          gap={"16px"}
        >
          <Text
            fontSize={"24px"}
            fontWeight={"semibold"}
            display={"flex"}
            alignItems={"end"}
            marginTop={{ base: "0px", md: "24px" }}
          >
            Location
          </Text>
          <Text fontSize={"16px"} color={"#C5C5C5"}>
            Head office <br />
            4121 23B ST NE, CALGARY, AB T2E 7V9
          </Text>
        </Box>
        <Box
          width={{ md: "168px" }}
          height={{ md: "186px" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"start"}
          gap={"16px"}
        >
          <Text
            fontSize={"24px"}
            fontWeight={"semibold"}
            display={"flex"}
            alignItems={"end"}
            marginTop={{ base: "0px", md: "24px" }}
          >
            Contact Us
          </Text>
          <NextLink href="mailto:info@bindlebundlemovers.com">
            <Text fontSize={"16px"} color={"#C5C5C5"}>
              info@bindlebundlemovers.com
            </Text>
          </NextLink>

          <Text fontSize={"16px"} color={"#C5C5C5"}>
            403-399-7904
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
