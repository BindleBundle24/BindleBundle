import React from "react";
import { Text, Box, HStack, Flex } from "@chakra-ui/react";
import Image from "next/image";
import pp1 from "@/components/Assets/profile-picture1.png";
import pp2 from "@/components/Assets/profile-picture2.png";
import pp3 from "@/components/Assets/profile-picture3.png";
import pp4 from "@/components/Assets/profile-picture4.png";
import pp5 from "@/components/Assets/profile-picture5.png";

export const Testimonials = () => {
  return (
    <div
      className="w-full h-fit md:h-[1008px] flex flex-col py-[20px] md:py-[50px] justify-center gap-5 items-center bg-[#FCF7F1]"
      id="testimonials"
    >
      <Text
        fontSize={{ base: "36px", md: "56px" }}
        fontWeight={"500"}
        className="w-full flex justify-center  md:h-[91px] items-center "
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
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] flex justify-center items-center">
            <Image
              src={pp1}
              alt="a profile image of a user"
              className="object-center w-full h-full"
            />
          </div>
          <Box
            width={{ base: "279px", md: "384px" }}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"start"}
            className="bg-white shadow-md py-3 px-[10px] md:py-6 md:px-8 gap-[2px] rounded-[15px]"
          >
            <Text className="font-medium md:text-2xl text-left">
              Chioma Ozu
            </Text>
            <Text className="text-[#2C2C2C] text-[12px] md:text-[14px] text-left">
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
            <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] flex justify-center items-center">
              <Image
                src={pp2}
                alt="a profile image of a user"
                className="object-center w-full h-full"
              />
            </div>
            <Box
              width={{ base: "279px", md: "384px" }}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              className="bg-white shadow-md py-3 px-[10px] md:py-6 md:px-8 gap-[2px] rounded-[15px]"
            >
              <Text className="font-medium md:text-2xl text-left">
                Michell king
              </Text>
              <Text className="text-[#2C2C2C] text-[12px] md:text-[14px] text-left">
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
            <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] flex justify-center items-center">
              <Image
                src={pp3}
                alt="a profile image of a user"
                className="object-center w-full h-full"
              />
            </div>
            <Box
              width={{ base: "279px", md: "384px" }}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              className="bg-white shadow-md py-3 px-[10px] md:py-6 md:px-8 gap-[2px] rounded-[15px]"
            >
              <Text className="font-medium md:text-2xl text-left">
                Daniel Arinze
              </Text>
              <Text className="text-[#2C2C2C] text-[12px] md:text-[14px] text-left">
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
            <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] flex justify-center items-center">
              <Image
                src={pp4}
                alt="a profile image of a user"
                className="object-center w-full h-full"
              />
            </div>
            <Box
              width={{ base: "279px", md: "384px" }}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              className="bg-white shadow-md py-3 px-[10px] md:py-6 md:px-8 gap-[2px] rounded-[15px]"
            >
              <Text className="font-medium md:text-2xl text-left">
                Oreoluwa Adedayo
              </Text>
              <Text className="text-[#2C2C2C] text-[12px] md:text-[14px] text-left">
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
            <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] flex justify-center items-center">
              <Image
                src={pp5}
                alt="a profile image of a user"
                className="object-center w-full h-full"
              />
            </div>
            <Box
              width={{ base: "279px", md: "384px" }}
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              className="bg-white shadow-md py-3 px-[10px] md:py-6 md:px-8 gap-[2px] rounded-[15px]"
            >
              <Text className="font-medium md:text-2xl text-left">
                Babafemi Olowoyo
              </Text>
              <Text className="text-[#2C2C2C] text-[12px] md:text-[14px] text-left">
                “Over the yearsBindle Bundle as been known for it’s recruitment
                of industry professionals and gained so much credibility. Here
                are Our major areas in the teach and production Industry”
              </Text>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </div>
  );
};
