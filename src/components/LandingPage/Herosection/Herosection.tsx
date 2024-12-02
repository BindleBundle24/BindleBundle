import React from "react";
import { Box, Input, Text, Button } from "@chakra-ui/react";
import { MapPin } from "lucide-react";

const Herosection = () => {
  return (
    <div className="w-full flex justify-center items-center  flex-col pt-[39px] md:pt-[59px]">
      <div className="w-[371px] sm:w-[1016px] mx-auto flex flex-col justify-center items-center">
        <Text className="font-medium text-[36px] md:text-[63px] w-full text-center">
          Seamless Moves, Boundless Care with{" "}
          <span className="text-[#75D130] font-semibold text-[43px] md:text-[70px]">
            Bindle Bundle
          </span>
        </Text>
        <Text className="font-medium text-[16px] md:text-2xl w-full text-center text-[#686767]">
          From packing to settling in, we handle the heavy lifting so you can
          focus on what matters
        </Text>
      </div>
      <div className="bg-[#FCF7F1] w-[357px] h-[175px] md:w-[690px] md:h-[76px] flex flex-col md:flex-row items-center md:items-start justify-between rounded-[11px] mt-[20px] py-[15px] px-[35px] md:px-[16px] gap-4 md:gap-[22px]">
        <Box
          className="w-[287px] h-[37px] md:w-[233px] md:h-[41px] rounded-[10px] bg-white border-[#CAD0DB] border px-[12px] py-[11px]"
          display={`flex`}
          justifyContent="space-between"
          alignItems="center"
          gapX="7px"
        >
          {" "}
          <MapPin className="w-[19px] h-[19px]" />
          <Input
            placeholder={` Pick-Up`}
            className=" border-none placeholder:text-[#878484] placeholder:font-medium"
          />
        </Box>
        <Box
          className="w-[287px] h-[37px] md:w-[233px] md:h-[41px] rounded-[10px] bg-white border-[#CAD0DB] border px-[12px] py-[11px]"
          display={`flex`}
          justifyContent="space-between"
          alignItems="center"
          gapX="7px"
        >
          {" "}
          <MapPin className="w-[19px] h-[19px]" />
          <Input
            placeholder={` Drop-Off`}
            className=" border-none placeholder:text-[#878484] placeholder:font-medium"
          />
        </Box>
        <Button
          className="flex justify-center items-center py-[13px] px-[26px] w-[287px] md:w-[133px] h-[41px] md:h-[46px] bg-[#051937] text-white text-[16px] font-medium"
          borderRadius="33px"
        >
          Get Moving
        </Button>
      </div>
    </div>
  );
};

export default Herosection;
