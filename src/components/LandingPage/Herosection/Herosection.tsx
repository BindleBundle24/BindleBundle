"use client";
import React, { useEffect, useRef } from "react";
import { Box, Text, Button, InputAddon, Group } from "@chakra-ui/react";
import { MapPin } from "@phosphor-icons/react";
import * as data from "../../../../public/assets/arrowLottie.json";
import { AnimationItem } from "lottie-web";
import { useQueryState } from "nuqs";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { locations } from "../Form/Form";

export interface LocationDetails {
  pickUpLocation: string;
  dropOffLocation: string;
}

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("./HeroSlider"));

export const Herosection = () => {
  const animationRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFormOpen, setIsFormOpen] = useQueryState("formState", {});

  const [locationsDetails, setLocationsDetails] =
    useQueryState<LocationDetails>("locationsDetails", {
      parse: (value) =>
        value ? JSON.parse(value) : { pickUpLocation: "", dropOffLocation: "" },
      serialize: (value) => JSON.stringify(value),
      defaultValue: {
        pickUpLocation: "",
        dropOffLocation: "",
      },
    });
  const { pickUpLocation, dropOffLocation } = locationsDetails;

  const updatePickUpLocation = (value: string) => {
    setLocationsDetails((prev) => ({ ...prev, pickUpLocation: value }));
  };

  const updateDropOffLocation = (value: string) => {
    setLocationsDetails((prev) => ({ ...prev, dropOffLocation: value }));
  };
  const openForm = () => {
    setIsFormOpen("open");
  };

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
        paddingTop={{ base: "20px", xl: "59px" }}
        marginBottom={{ base: "0px", xl: "96px" }}
      >
        <Box
          width={{ base: "100%", xl: "1016px" }}
          paddingX={{ base: "24px", xl: "0px" }}
          marginX={"auto"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontWeight={"500"}
            fontSize={{ base: "36px", xl: "63px" }}
            width={"100%"}
            textAlign={{ base: "left", md: "center" }}
            lineHeight={{ base: "44px", xl: "71px" }}
          >
            Seamless Moves, Boundless Care with{" "}
            <Text
              as="span"
              color={"#75D130"}
              fontWeight={"600"}
              fontSize={{ base: "36px", xl: "70px" }}
            >
              Bindle Bundle
            </Text>
          </Text>
          <Text
            fontWeight={"500"}
            fontSize={{ base: "16px", xl: "24px" }}
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
          width={{ base: "100%", xl: "690px" }}
          height={{ base: "200px", xl: "76px" }}
          display={"flex"}
          flexDirection={{ base: "column", xl: "row" }}
          alignItems={{ base: "center", xl: "start" }}
          justifyContent={"space-between"}
          borderRadius={"11px"}
          marginTop={"20px"}
          paddingY={"15px"}
          paddingX={{ base: "35px", xl: "16px" }}
          position={"relative"}
          gap={{ base: "16px", xl: "22px" }}
        >
          <Group
            attached
            width={{ base: "287px", xl: "233px" }}
            height={{ base: "45px", xl: "42px" }}
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
              width={{ base: "100%", xl: "205.65px" }}
              display={"flex"}
              height={{ base: "43px", xl: "40px" }}
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
                value={pickUpLocation}
                onChange={(e) => updatePickUpLocation(e.target.value)}
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
            width={{ base: "287px", xl: "233px" }}
            height={{ base: "45px", xl: "42px" }}
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
              width={{ base: "100%", xl: "205.65px" }}
              display={"flex"}
              height={{ base: "43px", xl: "40px" }}
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
                value={dropOffLocation}
                onChange={(e) => updateDropOffLocation(e.target.value)}
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
            width={{ base: "287px", xl: "133px" }}
            height={{ base: "41px", xl: "46px" }}
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
            display={{ base: "none", xl: "flex" }}
            width={"150px"}
            height={"150px"}
            position={"absolute"}
            justifyContent={"end"}
            top={"44px"}
            right={"-65px"}
            ref={animationRef}
          ></Box>
        </Box>
        <Box width={"100%"} marginTop={{ xl: "70px" }}>
          <HeroSlider />
        </Box>
      </Box>
    </Box>
  );
};
