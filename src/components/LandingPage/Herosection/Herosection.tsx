"use client";
import React, { useEffect, useRef } from "react";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import { MapPin } from "@phosphor-icons/react";
import * as data from "../../../../public/assets/arrowLottie.json";
import { HeroSlider } from "./HeroSlider";
import { AnimationItem } from "lottie-web";

export const Herosection = () => {
  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animationInstance: AnimationItem | undefined;

    if (typeof window !== "undefined" && animationRef.current) {
      import("lottie-web").then((lottie) => {
        animationInstance = lottie.default.loadAnimation({
          container: animationRef.current as Element,
          animationData: data,
          autoplay: true,
          loop: true,
        });
      });
    }

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingTop={{ base: "20px", md: "59px" }}
      marginBottom={{ base: "0px", md: "96px" }}
    >
      <Box
        width={{ base: "100%", md: "1016px" }}
        paddingX={{ base: "24px", md: "0px" }}
        marginX={"auto"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          fontWeight={"500"}
          fontSize={{ base: "36px", md: "63px" }}
          width={"100%"}
          textAlign={{ base: "left", md: "center" }}
          lineHeight={{ base: "44px", md: "71px" }}
        >
          Seamless Moves, Boundless Care with{" "}
          <Text
            as="span"
            color={"#75D130"}
            fontWeight={"600"}
            fontSize={{ base: "43px", md: "70px" }}
          >
            Bindle Bundle
          </Text>
        </Text>
        <Text
          fontWeight={"500"}
          fontSize={{ base: "16px", md: "24px" }}
          width={"100%"}
          textAlign={{ base: "left", md: "center" }}
          color={"#686767"}
        >
          From packing to settling in, we handle the heavy lifting so you can
          focus on what matters
        </Text>
      </Box>
      <Box
        backgroundColor="#FCF7F1"
        width={{ base: "100%", md: "690px" }}
        height={{ base: "200px", md: "76px" }}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "start" }}
        justifyContent={"space-between"}
        borderRadius={"11px"}
        marginTop={"20px"}
        paddingY={"15px"}
        paddingX={{ base: "35px", md: "16px" }}
        position={"relative"}
        gap={{ base: "16px", md: "22px" }}
      >
        <Box
          width={{ base: "287px", md: "233px" }}
          height={{ base: "45px", md: "42px" }}
          borderRadius={"10px"}
          backgroundColor={"#FFFFFF"}
          borderWidth={"1px"}
          borderColor={"#CAD0DB"}
          paddingX={"12px"}
          paddingY="11px"
          display={`flex`}
          justifyContent="space-between"
          alignItems="center"
          gapX="7px"
        >
          {" "}
          <MapPin size={24} />
          <Input
            placeholder={` Pick-Up`}
            variant={"subtle"}
            color={"#878484"}
            backgroundColor={"#FFFFFF"}
            _placeholder={{ color: "#878484", fontWeight: "500" }}
            _focus={{
              borderWidth: "0px",
              outlineWidth: "0px",
            }}
          />
        </Box>
        <Box
          width={{ base: "287px", md: "233px" }}
          height={{ base: "45px", md: "42px" }}
          borderRadius={"10px"}
          backgroundColor={"#FFFFFF"}
          borderWidth={"1px"}
          borderColor={"#CAD0DB"}
          paddingX={"12px"}
          paddingY="11px"
          display={`flex`}
          justifyContent="space-between"
          alignItems="center"
          gapX="7px"
        >
          {" "}
          <MapPin size={24} />
          <Input
            placeholder={` Drop-Off`}
            variant={"subtle"}
            color={"#878484"}
            _placeholder={{ color: "#878484", fontWeight: "500" }}
            _focus={{
              borderWidth: "0px",
              outlineWidth: "0px",
            }}
            backgroundColor={"#FFFFFF"}
          />
        </Box>
        <Button
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: "287px", md: "133px" }}
          height={{ base: "41px", md: "46px" }}
          backgroundColor={"#051937"}
          color={"#FFFFFF"}
          paddingX={"26px"}
          paddingY={"13px"}
          fontWeight={"500"}
          fontSize={"16px"}
          borderRadius="33px"
        >
          Get Moving
        </Button>
        <Box
          display={{ base: "none", md: "flex" }}
          width={"150px"}
          height={"150px"}
          position={"absolute"}
          justifyContent={"end"}
          top={"44px"}
          right={"-65px"}
          ref={animationRef}
        ></Box>
      </Box>
      <Box width={"100%"} marginTop={{ md: "70px" }}>
        <HeroSlider />
      </Box>
    </Box>
  );
};
