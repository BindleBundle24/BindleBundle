"use client";
import React, { useEffect, useRef } from "react";
import { Box, Text, Button, InputAddon, Group } from "@chakra-ui/react";
import { MapPin } from "@phosphor-icons/react";
import * as data from "../../../../public/assets/arrowLottie.json";
import { HeroSlider } from "./HeroSlider";
import { AnimationItem } from "lottie-web";
import { useQueryState } from "nuqs";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { locations } from "../Form/Form";

export const Herosection = () => {
  const animationRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFormOpen, setIsFormOpen] = useQueryState("formState", {});

  const openForm = () => setIsFormOpen("open");

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
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
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
          <Group
            attached
            width={{ base: "287px", md: "233px" }}
            height={{ base: "45px", md: "42px" }}
            borderRadius={"10px"}
            borderWidth={"1px"}
            borderColor={"#CAD0DB"}
          >
            <InputAddon
              _focus={{
                borderWidth: "0px",
                outlineWidth: "0px",
              }}
              backgroundColor={"#FFFFFF"}
              variant={"subtle"}
              height={"100%"}
              borderRadius={"10px"}
            >
              <MapPin size={24} />
            </InputAddon>
            <NativeSelectRoot
              variant={"subtle"}
              width={{ base: "100%", md: "205.65px" }}
              display={"flex"}
              height={{ base: "43px", md: "40px" }}
              alignItems={"center"}
            >
              <NativeSelectField
                color={"#878484"}
                backgroundColor={"#FFFFFF"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                placeholder={"Pick-Up"}
                borderWidth={"0px"}
                borderColor={"#CAD0DB"}
                borderRightRadius={"10px"}
                height={"100%"}
              >
                {locations.map((location: string) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </NativeSelectField>
            </NativeSelectRoot>
          </Group>

          <Group
            attached
            width={{ base: "287px", md: "233px" }}
            height={{ base: "45px", md: "42px" }}
            borderRadius={"10px"}
            borderWidth={"1px"}
            borderColor={"#CAD0DB"}
          >
            <InputAddon
              _focus={{
                borderWidth: "0px",
                outlineWidth: "0px",
              }}
              backgroundColor={"#FFFFFF"}
              variant={"subtle"}
              height={"100%"}
              borderRadius={"10px"}
            >
              <MapPin size={24} />
            </InputAddon>
            <NativeSelectRoot
              variant={"subtle"}
              width={{ base: "100%", md: "205.65px" }}
              display={"flex"}
              height={{ base: "43px", md: "40px" }}
              alignItems={"center"}
            >
              <NativeSelectField
                color={"#878484"}
                backgroundColor={"#FFFFFF"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                placeholder={"Drop-Off"}
                borderWidth={"0px"}
                borderColor={"#CAD0DB"}
                borderRightRadius={"10px"}
                height={"100%"}
              >
                {locations.map((location: string) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </NativeSelectField>
            </NativeSelectRoot>
          </Group>
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
            onClick={openForm}
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
    </Box>
  );
};
