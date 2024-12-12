import React from "react";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import { MapPin } from "@phosphor-icons/react";
import Lottie from "react-lottie-player";
import arrowLottie from "@/components/Assets/arrowLottie.json";
import { HeroSlider } from "./HeroSlider";

export const Herosection = () => {
  return (
    <div className="w-full flex justify-center items-center  flex-col pt-[20px] md:pt-[59px] md:mb-24">
      <div className="w-full px-6 md:px-0 sm:w-[1016px] mx-auto flex flex-col justify-center items-center">
        <Text
          className="font-medium text-[36px] md:text-[63px] w-full md:text-center"
          lineHeight={{ base: "44px", md: "71px" }}
        >
          Seamless Moves, Boundless Care with{" "}
          <span className="text-[#75D130] font-semibold text-[43px] md:text-[70px]">
            Bindle Bundle
          </span>
        </Text>
        <Text className="font-medium text-[16px] md:text-2xl w-full md:text-center text-[#686767]">
          From packing to settling in, we handle the heavy lifting so you can
          focus on what matters
        </Text>
      </div>
      <div className="bg-[#FCF7F1] w-full h-[180px] md:w-[690px] md:h-[76px] flex flex-col md:flex-row items-center md:items-start justify-between rounded-[11px] mt-[20px] py-[15px] px-[35px] md:px-[16px] gap-4 md:gap-[22px] relative ">
        <Box
          className="w-[287px] h-[37px] md:w-[233px] md:h-[41px] rounded-[10px] bg-white border-[#CAD0DB] border px-[12px] py-[11px]"
          display={`flex`}
          justifyContent="space-between"
          alignItems="center"
          gapX="7px"
        >
          {" "}
          <MapPin size={24} />
          <Input
            placeholder={` Pick-Up`}
            className=" outline-none placeholder:text-[#878484] placeholder:font-medium"
          />
        </Box>
        <Box
          className="w-[287px] h-[37px] md:w-[233px] md:h-[41px] rounded-[10px] bg-white border-[#CAD0DB] border px-[12px] py-[11px] "
          display={`flex`}
          justifyContent="space-between"
          alignItems="center"
          gapX="7px"
        >
          {" "}
          <MapPin size={24} />
          <Input
            placeholder={` Drop-Off`}
            className=" outline-none placeholder:text-[#878484] placeholder:font-medium"
          />
        </Box>
        <Button
          className="flex justify-center items-center py-[13px] px-[26px] w-[287px] md:w-[133px] h-[41px] md:h-[46px] bg-[#051937] text-white text-[16px] font-medium"
          borderRadius="33px"
        >
          Get Moving
        </Button>
        <div className="hidden md:flex w-full  absolute justify-end -right-16 top-11">
          <Lottie
            loop
            animationData={arrowLottie}
            play
            style={{ width: 150, height: 150 }}
          />
        </div>
      </div>
      <HeroSlider />
    </div>
  );
};
