import React from "react";
import { Text, Box, HStack, Flex, Image } from "@chakra-ui/react";

export const Testimonials = () => {
  return (
    <Box
      width={"100%"}
      height={{ base: "fit", md: "1080px" }}
      display={"flex"}
      flexDirection={"column"}
      paddingY={{ base: "20px", md: "50px" }}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"5px"}
      backgroundColor={"#FCF7F1"}
      id="testimonials"
    >
      <Text
        fontSize={{ base: "36px", md: "56px" }}
        fontWeight={"500"}
        width={"100%"}
        height={{ base: "fit", md: "91px" }}
        display={"flex"}
        justifyContent={"center"}
        marginX={"auto"}
        alignItems={"center"}
      >
        What our clients say!
      </Text>
      <Box
        width={{ base: "343px", md: "1192px" }}
        height={{ base: "702px", md: "679px" }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mx={"auto"}
      >
        <HStack
          width={{ base: "343px", md: "502px" }}
          height={{ base: "118px", md: "170px" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            width={{ base: "50px", md: "100px" }}
            height={{ base: "50px", md: "100px" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={"/assets/profile-picture1.png"}
              alt="a profile image of a user"
              width={"100%"}
              height={"100%"}
              objectPosition={"center"}
            />
          </Box>
          <Box
            width={{ base: "279px", md: "384px" }}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"start"}
            backgroundColor={"white"}
            shadow={"md"}
            paddingY={{ base: "12px", md: "24px" }}
            gap={"2px"}
            borderRadius={"15px"}
            paddingX={{ base: "10px", md: "32px" }}
          >
            <Text
              fontWeight={"medium"}
              textAlign={"left"}
              fontSize={{ base: "16px", md: "24px" }}
            >
              Chioma Ozu
            </Text>
            <Text
              color={"#2C2C2C"}
              fontSize={{ base: "12px", md: "14px" }}
              textAlign={"left"}
            >
              “Over the yearsBindle Bundle as been known for it’s recruitment of
              industry professionals and gained so much credibility. Here are
              Our major areas in the teach and production Industry”
            </Text>
          </Box>
        </HStack>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "7", md: "20" }}
          justify={{ base: "center", md: "flex-start" }}
          width={"100%"}
        >
          <HStack
            width={{ base: "343px", md: "502px" }}
            height={{ base: "118px", md: "170px" }}
            display={"flex"}
            flexDirection={{ base: "row-reverse", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              width={{ base: "50px", md: "100px" }}
              height={{ base: "50px", md: "100px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={"/assets/profile-picture2.png"}
                alt="a profile image of a user"
                width={"100%"}
                height={"100%"}
                objectPosition={"center"}
              />
            </Box>
            <Box
              width={{ base: "279px", md: "384px" }}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              backgroundColor={"white"}
              shadow={"md"}
              paddingY={{ base: "12px", md: "24px" }}
              gap={"2px"}
              borderRadius={"15px"}
              paddingX={{ base: "10px", md: "32px" }}
            >
              <Text
                fontWeight={"medium"}
                textAlign={"left"}
                fontSize={{ base: "16px", md: "24px" }}
              >
                Michell king
              </Text>
              <Text
                color={"#2C2C2C"}
                fontSize={{ base: "12px", md: "14px" }}
                textAlign={"left"}
              >
                “Over the yearsBindle Bundle as been known for it’s recruitment
                of industry professionals and gained so much credibility. Here
                are Our major areas in the teach and production Industry”
              </Text>
            </Box>
          </HStack>
          <HStack
            width={{ base: "343px", md: "502px" }}
            height={{ base: "118px", md: "170px" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              width={{ base: "50px", md: "100px" }}
              height={{ base: "50px", md: "100px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={"/assets/profile-picture3.png"}
                alt="a profile image of a user"
                width={"100%"}
                height={"100%"}
                objectPosition={"center"}
              />
            </Box>
            <Box
              width={{ base: "279px", md: "384px" }}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              backgroundColor={"white"}
              shadow={"md"}
              paddingY={{ base: "12px", md: "24px" }}
              gap={"2px"}
              borderRadius={"15px"}
              paddingX={{ base: "10px", md: "32px" }}
            >
              <Text
                fontWeight={"medium"}
                textAlign={"left"}
                fontSize={{ base: "16px", md: "24px" }}
              >
                Daniel Arinze
              </Text>
              <Text
                color={"#2C2C2C"}
                fontSize={{ base: "12px", md: "14px" }}
                textAlign={"left"}
              >
                “Over the yearsBindle Bundle as been known for it’s recruitment
                of industry professionals and gained so much credibility. Here
                are Our major areas in the teach and production Industry”
              </Text>
            </Box>
          </HStack>
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "7", md: "20" }}
          justify={{ base: "center", md: "flex-end" }}
          width={"100%"}
        >
          <HStack
            width={{ base: "343px", md: "502px" }}
            height={{ base: "118px", md: "170px" }}
            display={"flex"}
            flexDirection={{ base: "row-reverse", md: "row" }}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              width={{ base: "50px", md: "100px" }}
              height={{ base: "50px", md: "100px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={"/assets/profile-picture4.png"}
                alt="a profile image of a user"
                width={"100%"}
                height={"100%"}
                objectPosition={"center"}
              />
            </Box>
            <Box
              width={{ base: "279px", md: "384px" }}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              backgroundColor={"white"}
              shadow={"md"}
              paddingY={{ base: "12px", md: "24px" }}
              gap={"2px"}
              borderRadius={"15px"}
              paddingX={{ base: "10px", md: "32px" }}
            >
              <Text
                fontWeight={"medium"}
                textAlign={"left"}
                fontSize={{ base: "16px", md: "24px" }}
              >
                Oreoluwa Adedayo
              </Text>
              <Text
                color={"#2C2C2C"}
                fontSize={{ base: "12px", md: "14px" }}
                textAlign={"left"}
              >
                {" "}
                “Over the yearsBindle Bundle as been known for it’s recruitment
                of industry professionals and gained so much credibility. Here
                are Our major areas in the teach and production Industry”
              </Text>
            </Box>
          </HStack>
          <HStack
            width={{ base: "343px", md: "502px" }}
            height={{ base: "118px", md: "170px" }}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              width={{ base: "50px", md: "100px" }}
              height={{ base: "50px", md: "100px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={"/assets/profile-picture5.png"}
                alt="a profile image of a user"
                width={"100%"}
                height={"100%"}
                objectPosition={"center"}
              />
            </Box>
            <Box
              width={{ base: "279px", md: "384px" }}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              backgroundColor={"white"}
              shadow={"md"}
              paddingY={{ base: "12px", md: "24px" }}
              gap={"2px"}
              borderRadius={"15px"}
              paddingX={{ base: "10px", md: "32px" }}
            >
              <Text
                fontWeight={"medium"}
                textAlign={"left"}
                fontSize={{ base: "16px", md: "24px" }}
              >
                Babafemi Olowoyo
              </Text>
              <Text
                color={"#2C2C2C"}
                fontSize={{ base: "12px", md: "14px" }}
                textAlign={"left"}
              >
                “Over the yearsBindle Bundle as been known for it’s recruitment
                of industry professionals and gained so much credibility. Here
                are Our major areas in the teach and production Industry”
              </Text>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};
