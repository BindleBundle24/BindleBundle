"use client";
import { Box, Group, Input, InputAddon, Text, Button } from "@chakra-ui/react";
import {
  DeviceMobileCamera,
  EnvelopeSimple,
  MapPin,
  User,
  XCircle,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const locations = [
  "Carstairs",
  "Didsbury",
  "Innisfail",
  "Irricana",
  "Linden",
  "Olds",
  "Sundre",
  "Three Hills",
  "Saskatoon",
  "Calgary",
  "Aidrie",
  "Beiseker",
  "Bowden",
  "Chestermere",
  "Cremona",
  "Crossfield",
];

export const Form = ({ isOpen, onClose }: FormProps) => {
  const [moveCategory, setMoveCategory] = useState("");
  const [commercialCategory, setCommercialCategory] = useState("");
  const [specialityMove, setSpecialityMove] = useState("");
  const [customInput, setCustomInput] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submitted");
    onClose();
  };

  if (!isOpen) return null;
  return (
    <Box
      width={{ base: "100%", md: "707px" }}
      height={{ base: "100vh", md: "474px" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"12px"}
      gapY={"10px"}
      backgroundColor={"#FCF7F1"}
      paddingX={{ base: "16px", md: "0px" }}
      paddingY={{ base: "15px", md: "0px" }}
    >
      <Box
        width={{ base: "100%", md: "674px" }}
        height={{ base: "100%", md: "401px" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={{ base: "", md: "center" }}
        paddingX={{ base: "0px", md: "16px" }}
        paddingY={{ base: "10px", md: "15px" }}
        gap={{ base: "15px", md: "29px" }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          height={{ md: "100px" }}
        >
          <Text
            fontSize={{ base: "", md: "24px" }}
            fontWeight={"600"}
            textAlign={"left"}
            display={"flex"}
            lineHeight={{ base: "", md: "29.52px" }}
          >
            Let’s get you moving
          </Text>
          <XCircle size={32} onClick={onClose} cursor={"pointer"} />
        </Box>

        <Box
          width={"100%"}
          gap={"5px"}
          display={"flex"}
          flexDirection={"column"}
          height={{ base: "fit-content", md: "68px" }}
        >
          <Text
            fontSize={{ base: "", md: "14px" }}
            fontWeight={"400"}
            textAlign={"left"}
            lineHeight={{ base: "", md: "17.22px" }}
            color={"#878484"}
          >
            DESTINATION
          </Text>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            width={"100%"}
            gap={{ base: "5px", md: "22px" }}
            height={{ base: "fit-content", md: "46px" }}
          >
            <Group
              attached
              width={{ base: "100%", md: "233px" }}
              height={{ base: "46px", md: "100%" }}
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
                height={"44px"}
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
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </NativeSelectField>
              </NativeSelectRoot>
            </Group>
            <Group
              attached
              width={{ base: "100%", md: "233px" }}
              height={{ base: "46px", md: "100%" }}
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
                height={"44px"}
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
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </NativeSelectField>
              </NativeSelectRoot>
            </Group>

            <Input
              type={"date"}
              height={{ base: "46px", md: "100%" }}
              backgroundColor={"#FFFFFF"}
              _placeholder={{ color: "#878484", fontWeight: "500" }}
              _focus={{
                borderWidth: "0px",
                outlineWidth: "0px",
              }}
              variant={"subtle"}
              borderRadius={"10px"}
              width={{ base: "full", md: "130px" }}
              color={"#878484"}
              borderWidth={"1px"}
              borderColor={"#CAD0DB"}
            />
          </Box>
        </Box>
        <Box
          width={"100%"}
          gap={"5px"}
          display={"flex"}
          flexDirection={"column"}
          height={{ base: "fit-content", md: "68px" }}
        >
          <Text
            fontSize={{ base: "", md: "14px" }}
            fontWeight={"400"}
            textAlign={"left"}
            lineHeight={{ base: "", md: "17.22px" }}
            color={"#878484"}
          >
            PERSONAL
          </Text>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            width={"100%"}
            gap={{ base: "5px", md: "10px" }}
            height={{ base: "fit-content", md: "46px" }}
            alignItems={"center"}
          >
            <Group
              attached
              width={{ base: "100%", md: "205.65px" }}
              height={{ base: "46px", md: "100%" }}
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
                <User size={24} />
              </InputAddon>
              <Input
                placeholder={"full name"}
                borderRadius={"10px"}
                height={"100%"}
                variant={"subtle"}
                color={"#878484"}
                backgroundColor={"#FFFFFF"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                name="fullName"
                type="text"
              />
            </Group>
            <Group
              attached
              width={{ base: "100%", md: "205.65px" }}
              height={{ base: "46px", md: "100%" }}
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
                borderRadius={"10px"}
                height={"100%"}
              >
                <EnvelopeSimple size={24} />
              </InputAddon>
              <Input
                placeholder={"email address"}
                variant={"subtle"}
                borderRadius={"10px"}
                color={"#878484"}
                backgroundColor={"#FFFFFF"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                height={"100%"}
                name="email"
                type="email"
              />
            </Group>
            <Group
              attached
              width={{ base: "100%", md: "205.65px" }}
              height={{ base: "46px", md: "100%" }}
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
                {" "}
                <DeviceMobileCamera size={24} />
              </InputAddon>
              <Input
                height={"100%"}
                backgroundColor={"#FFFFFF"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                variant={"subtle"}
                name="phoneNumber"
                type="tel"
                placeholder={`mobile NO`}
                borderRadius={"10px"}
              />
            </Group>
          </Box>
        </Box>
        <Box
          width={"100%"}
          gap={"5px"}
          display={"flex"}
          flexDirection={"column"}
          height={{ base: "fit-content", md: "68px" }}
        >
          <Text
            fontSize={{ base: "", md: "14px" }}
            fontWeight={"400"}
            textAlign={"left"}
            lineHeight={{ base: "", md: "17.22px" }}
            color={"#878484"}
          >
            MOVING DETAILS
          </Text>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            width={"100%"}
            gap={{ base: "5px", md: "10px" }}
            height={{ base: "fit-content", md: "46px" }}
            flexWrap={{ md: "wrap" }}
          >
            <NativeSelectRoot
              variant={"subtle"}
              width={{ base: "100%", md: "205.65px" }}
              display={"flex"}
              height={"46px"}
              alignItems={"center"}
            >
              <NativeSelectField
                color={"#878484"}
                backgroundColor={"#FFFFFF"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                _focus={{
                  borderWidth: "1px",
                  outlineWidth: "0px",
                }}
                placeholder={`Service Type`}
                borderWidth={"1px"}
                borderColor={"#CAD0DB"}
                borderRadius={"10px"}
                height={"100%"}
              >
                <option value="full _ervice">Full Service </option>
                <option value="packing">Packing only Service</option>
                <option value="muscles">Just Muscles</option>
              </NativeSelectField>
            </NativeSelectRoot>
            <NativeSelectRoot
              variant={"subtle"}
              width={{ base: "100%", md: "205.65px" }}
              display={"flex"}
              height={"46px"}
              alignItems={"center"}
            >
              <NativeSelectField
                color={"#878484"}
                backgroundColor={"#FFFFFF"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                _focus={{
                  borderWidth: "1px",
                  outlineWidth: "0px",
                }}
                placeholder={`Move Category`}
                borderWidth={"1px"}
                borderColor={"#CAD0DB"}
                borderRadius={"10px"}
                onChange={(e) => setMoveCategory(e.target.value)}
                value={moveCategory}
                defaultValue={"residential"}
                height={"100%"}
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </NativeSelectField>
            </NativeSelectRoot>
            {moveCategory === "commercial" ? (
              <Box
                display={"flex"}
                height={"46px"}
                gap={"5px"}
                width={{ base: "100%", md: "205.65px" }}
                justifyContent={"flex-start"}
                alignItems={"center"}
              >
                <NativeSelectRoot
                  variant={"subtle"}
                  width={{ base: "", md: "2/3" }}
                  height={"46px"}
                >
                  <NativeSelectField
                    color={"#878484"}
                    backgroundColor={"#FFFFFF"}
                    _placeholder={{ color: "#878484", fontWeight: "500" }}
                    _focus={{
                      borderWidth: "1px",
                      outlineWidth: "0px",
                    }}
                    borderWidth={"1px"}
                    borderColor={"#CAD0DB"}
                    borderRadius={"10px"}
                    defaultValue={"no_of_rooms"}
                    onChange={(e) => setCommercialCategory(e.target.value)}
                    value={commercialCategory}
                    height={"100%"}
                  >
                    <option value="no_of_rooms">Number of Rooms/Offices</option>
                    <option value="sq_ft">Square Footage</option>
                  </NativeSelectField>
                </NativeSelectRoot>
                <Text
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  height={"100%"}
                >
                  :
                </Text>
                <Input
                  placeholder="value"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  backgroundColor={"#FFFFFF"}
                  _placeholder={{ color: "#878484", fontWeight: "500" }}
                  _focus={{
                    borderWidth: "0px",
                    outlineWidth: "0px",
                  }}
                  borderRadius="10px"
                  width={{ base: "", md: "1/3" }}
                  height={"46px"}
                />
              </Box>
            ) : (
              <NativeSelectRoot
                variant={"subtle"}
                width={{ base: "", md: "205.65px" }}
                display={"flex"}
                height={"46px"}
                alignItems={"center"}
              >
                <NativeSelectField
                  color={"#878484"}
                  backgroundColor={"#FFFFFF"}
                  _placeholder={{ color: "#878484", fontWeight: "500" }}
                  _focus={{
                    borderWidth: "1px",
                    outlineWidth: "0px",
                  }}
                  placeholder={`Property Size`}
                  borderWidth={"1px"}
                  borderColor={"#CAD0DB"}
                  borderRadius={"10px"}
                  height={"100%"}
                >
                  <option value="single_room">Single Room, Studio</option>
                  <option value="1_to_3_bedroom_apartment">
                    1, 2, 3+ Bedroom Apartment
                  </option>
                  <option value="2_to_4_bedroom_apartment">
                    2, 3, 4+ Bedroom Apartment
                  </option>
                </NativeSelectField>
              </NativeSelectRoot>
            )}
          </Box>
        </Box>
        <Box
          width={"100%"}
          gap={"5px"}
          display={"flex"}
          flexDirection={"column"}
          height={{ base: "fit-content", md: "68px" }}
        >
          <Text
            fontSize={{ base: "", md: "14px" }}
            fontWeight={"400"}
            textAlign={"left"}
            lineHeight={{ base: "", md: "17.22px" }}
            color={"#878484"}
          >
            SPECIAL HANDLING REQUEST
          </Text>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            width={"100%"}
            gap={"10px"}
            height={{ base: "fit-content", md: "46px" }}
            alignItems={{ md: "center" }}
          >
            <NativeSelectRoot
              variant={"subtle"}
              width={{ base: "100%", md: "205.65px" }}
              display={"flex"}
              height={"46px"}
              alignItems={"center"}
            >
              <NativeSelectField
                color={"#878484"}
                backgroundColor={"#FFFFFF"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                _focus={{
                  borderWidth: "1px",
                  outlineWidth: "0px",
                }}
                borderWidth={"1px"}
                borderColor={"#CAD0DB"}
                borderRadius={"10px"}
                defaultValue={"none"}
                onChange={(e) => setSpecialityMove(e.target.value)}
                value={specialityMove}
                height={"100%"}
              >
                <option value="piano">Piano Type</option>
                <option value="gun_safe">Gun Safe Weight</option>
                <option value="pool_table">Pool Table</option>
                <option value="antique">Antique</option>
                <option value="fine_art">Fine Art</option>
                <option value="others">Others</option>
                <option value="none">None</option>
              </NativeSelectField>
            </NativeSelectRoot>
            {specialityMove === "others" && (
              <Input
                placeholder="Please specify"
                backgroundColor={"#FFFFFF"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                borderRadius="10px"
                width={{ base: "100%", md: "205.65px" }}
                height={"46px"}
              />
            )}
            <Button
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={{ base: "287px", md: "104px" }}
              height={{ base: "41px", md: "46px" }}
              backgroundColor={"#051937"}
              color={"#FFFFFF"}
              paddingX={"26px"}
              paddingY={"13px"}
              fontWeight={"500"}
              fontSize={"16px"}
              borderRadius="33px"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        borderRadius={"7px"}
        paddingX={"35px"}
        paddingY={"18px"}
        width={"100%"}
        gap={"15px"}
        backgroundColor={"#051937"}
        color={"#FFFFFF"}
        height={"88px"}
        display={{ base: "flex", md: "none" }}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Text fontSize={"16px"} fontWeight={"600"}>
          info@bindlebundlemovers.com
        </Text>
        <Text fontSize={"16px"} fontWeight={"600"}>
          403-399-7904
        </Text>
      </Box>
    </Box>
  );
};
