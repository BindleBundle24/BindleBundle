import { whatToExpectDetails } from "@/data/MovingType";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const WhatToExpect = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={{ base: "fit", md: "1070px" }}
      flexDirection={"column"}
      gapY={"26px"}
      marginTop={{ base: "20px", md: "50px" }}
    >
      <Box
        display={"flex"}
        width={{ base: "100%", md: "1248px" }}
        paddingX={{ base: "24px", md: "0" }}
        flexDirection={"column"}
        gapY={"26px"}
        marginX={"auto"}
      >
        <Text
          fontSize={{ base: "36px", md: "56px" }}
          lineHeight={{ base: "41px", md: "54px" }}
          fontWeight={"500"}
          color={"#332F2F"}
        >
          What to expect
        </Text>
      </Box>
      <Box
        display={"flex"}
        width={{ base: "screen", md: "1248px" }}
        height={{ base: "fit", md: "1000px" }}
        flexDirection={"row"}
        backgroundColor={"#051937"}
        marginX={"auto"}
        borderRadius={{ base: "0px ", md: "18px" }}
        gap={{ base: "26px", md: "56px" }}
        flexWrap={"wrap"}
        padding={{ base: "18px", md: "80px" }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {whatToExpectDetails.map((data, index) => (
          <Box
            display={"flex"}
            flexDirection={"row"}
            key={index}
            width={{ base: "100%", md: "516px" }}
            height={{ base: "", md: "250px" }}
            alignItems={"start"}
            justifyContent={"space-between"}
            gapX={"12px"}
          >
            <Box
              height={"100%"}
              display={"flex"}
              alignItems={"start"}
              justifyContent={"start"}
            >
              <Text
                fontSize={{ base: "50px", md: "78px" }}
                fontWeight={"500"}
                WebkitTextStrokeColor={"#75D130"}
                WebkitTextFillColor={"#000000"}
                WebkitTextStrokeWidth={"1px"}
                marginTop={{ base: "-8px", md: "-13px" }}
                width={{ base: "41px", md: "82px" }}
                textAlign={"center"}
              >
                {index + 1}
              </Text>
            </Box>
            <Box
              width={{ base: "100%", md: "434px" }}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Text
                fontSize={{ base: "20px", md: "28px" }}
                fontWeight={"500"}
                textAlign={"left"}
                lineHeight={{ base: "41px", md: "54px" }}
                color={"#FFFFFF"}
              >
                {data.title}
              </Text>
              <Text
                fontSize={{ base: "14px", md: "22px" }}
                fontWeight={"300"}
                textAlign={"left"}
                lineHeight={{ base: "17.22px", md: "27.06px" }}
                color={"#FFFFFF"}
                paddingRight={{ base: "", md: "4px" }}
              >
                {data.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhatToExpect;
