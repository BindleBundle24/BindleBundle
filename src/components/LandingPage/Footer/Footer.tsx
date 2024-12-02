import { Box, Button, Input, Text, Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/components/Assests/logo.svg";

const Footer = () => {
  return (
    <div className="w-full flex md:h-[426px] justify-center items-center text-white  flex-col py-[50px] md:pt-[51px]  md:flex-row bg-[#051937]">
      <div className="bg-transparent w-[331px] md:w-[1163px] h-full flex flex-col md:flex-row justify-between items-start mx-auto gap-10 md:gap-20 ">
        <Box className="flex flex-col w-full md:w-[225px] gap-4">
          <Link
            href="/"
            className="font-medium text-[20px] text-center text-[#75D130] flex w-[186px] md:w-full h-full justify-start items-center border-b border-white"
          >
            <div className="w-[38px] h-[65px]  flex justify-center items-center">
              <Image
                src={logo}
                alt="Bindle Bundle Logo"
                className="w-full h-full"
              />
            </div>
            Bindle Bundle
          </Link>
          <Link href="#" className=" text-[16px] text-[#C5C5C5] ">
            FAQs
          </Link>
          <Link href="#" className=" text-[16px] text-[#C5C5C5] ">
            Privacy Policy
          </Link>
          <Link href="#" className=" text-[16px] text-[#C5C5C5] ">
            About us
          </Link>
        </Box>
        <Box className="md:w-[176px] md:h-[186px] flex flex-col justify-between ">
          <Text className="text-2xl font-semibold flex h-full items-center">
            Pricing
          </Text>
          <Box className="w-full flex flex-col gap-4  h-full justify-between">
            <Link href="#" className=" text-[16px] text-[#C5C5C5] ">
              Full service moving{" "}
            </Link>
            <Link href="#" className=" text-[16px] text-[#C5C5C5] ">
              Packing only service{" "}
            </Link>
            <Link href="#" className=" text-[16px] text-[#C5C5C5] ">
              Just muscles{" "}
            </Link>
          </Box>
        </Box>
        <Box className="md:w-[354px] md:h-[186px] flex flex-col justify-start gap-4">
          <Text className="text-2xl font-semibold flex md:mt-6 items-end">
            Location
          </Text>
          <Text className=" text-[16px] text-[#C5C5C5] ">
            Head office <br />
            4121 23B ST NE, CALGARY, AB T2E 7V9
          </Text>
        </Box>
        <Box className="md:w-[168px]  md:h-[186px] flex flex-col justify-start gap-4">
          <Text className="text-2xl font-semibold flex md:mt-6 items-end">
            Contact Us
          </Text>

          <Link
            href="mailto:info@bindlebundlemovers.com"
            className=" text-[16px] text-[#C5C5C5] "
          >
            info@bindlebundlemovers.com
          </Link>
          <Text className=" text-[16px] text-[#C5C5C5] ">403-399-7904</Text>
        </Box>
      </div>
    </div>
  );
};

export default Footer;
