"use client";
import {
  Button,
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/components/Assets/logo.svg";
import Menu from "@/components/Icons/Menu";
import CloseBtn from "@/components/Icons/CloseBtn";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

const NavBar = () => {
  const router = useRouter();
  const [moveType] = useQueryState("type");

  return (
    <Suspense>
      <div className="bg-white w-full h-[72px] flex justify-center items-center mx-auto relative shadow-sm md:shadow-none">
        <div className="bg-transparent w-full px-6 md:px-0 md:w-[1257px] flex justify-between py-5 items-center md:shadown-sm  md:border-b md:border-[#D4CACA]  md:h-16 mx-auto">
          <div className="flex justify-between md:justify-start items-center w-full md:w-[630px] gap-[37px] h-full">
            {" "}
            <Link
              href="/"
              className="font-medium text-[20px] text-center text-[#75D130] flex w-[180px] h-full justify-start items-center"
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
            <div className="hidden md:flex flex-col md:flex-row w-full md:w-[450px] items-center justify-between">
              <Link href="/#services" className="text-black text-lg ">
                Services
              </Link>
              <Link href="/#testimonials" className="text-black text-lg ">
                Testimonials
              </Link>
              <Link href="/#about-us" className="text-black text-lg ">
                About us
              </Link>
              <Link href="/#contact-us" className="text-black text-lg ">
                Contact us
              </Link>
            </div>
            <Box display={{ md: "hidden" }} overflow={"hidden"}>
              <DrawerRoot size="full">
                <DrawerBackdrop />
                <DrawerTrigger asChild className="md:hidden w-[31px] h-4 ">
                  <Button variant="outline" className="w-full h-full">
                    <Menu />
                  </Button>
                </DrawerTrigger>
                <DrawerContent
                  offset="4"
                  rounded="md"
                  className="absolute w-full h-screen top-0 left-0 "
                >
                  <DrawerActionTrigger
                    asChild
                    className="bg-[#FCF7F1] mb-[10px]"
                  >
                    <HStack gap=".2em" justifyContent="end">
                      <Text
                        py="4px"
                        px="27px"
                        color="black"
                        fontWeight="600"
                        fontSize="14px"
                      >
                        <CloseBtn />
                      </Text>
                    </HStack>
                  </DrawerActionTrigger>{" "}
                  <DrawerBody className="md:hidden flex flex-col  w-full gap-[30px]  justify-start">
                    <DrawerCloseTrigger asChild>
                      <Link
                        href="/"
                        className="text-[#525050] text-lg font-medium border-b-[0.5px] border-[#C3C3C34D]"
                      >
                        Home
                      </Link>
                    </DrawerCloseTrigger>
                    <DrawerCloseTrigger asChild>
                      <Link
                        href="/#services"
                        className="text-[#525050] text-lg font-medium border-b-[0.5px] border-[#C3C3C34D]"
                      >
                        Services
                      </Link>
                    </DrawerCloseTrigger>

                    <DrawerCloseTrigger asChild>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gapY={"30px"}
                        width={"90%"}
                        marginLeft={"40px"}
                      >
                        <Text
                          className={`text-[#525050] flex justify-start items-center font-medium w-full   ${
                            moveType === "residential"
                              ? " border-b-[2.5px] border-[#051937] transition-all ease-in-out duration-300"
                              : ""
                          }`}
                          onClick={() =>
                            router.push(`/services?type=residential`)
                          }
                        >
                          Residential Move
                        </Text>{" "}
                        <Text
                          className={`text-[#525050] flex justify-start items-center font-medium w-full   ${
                            moveType === "commercial"
                              ? " border-b-[2.5px] border-[#051937] transition-all ease-in-out duration-300"
                              : ""
                          }`}
                          onClick={() =>
                            router.push(`/services?type=commercial`)
                          }
                        >
                          Commercial Move
                        </Text>
                        <Text
                          className={`text-[#525050] flex justify-start items-center font-medium w-full   ${
                            moveType === "specialty"
                              ? " border-b-[2.5px] border-[#051937] transition-all ease-in-out duration-300"
                              : ""
                          }`}
                          onClick={() =>
                            router.push(`/services?type=specialty`)
                          }
                        >
                          Specialty Move
                        </Text>
                      </Box>
                    </DrawerCloseTrigger>
                    <DrawerCloseTrigger asChild>
                      <Link
                        href="/#testimonials"
                        className="text-[#525050] text-lg font-medium border-b-[0.5px] border-[#C3C3C34D]"
                      >
                        Testimonials
                      </Link>
                    </DrawerCloseTrigger>
                    <DrawerCloseTrigger asChild>
                      <Link
                        href="/#about-us"
                        className="text-[#525050] text-lg font-medium border-b-[0.5px] border-[#C3C3C34D]"
                      >
                        About us
                      </Link>
                    </DrawerCloseTrigger>
                    <DrawerCloseTrigger asChild>
                      <Link
                        href="/#contact-us"
                        className="text-[#525050] text-lg font-medium border-b-[0.5px] border-[#C3C3C34D]"
                      >
                        Contact us
                      </Link>
                    </DrawerCloseTrigger>
                  </DrawerBody>
                </DrawerContent>
              </DrawerRoot>
            </Box>
          </div>
          <Button
            className="hidden md:flex justify-center items-center py-[13px] px-[26px] w-[133px] h-[46px] bg-[#051937] text-white text-[16px] font-medium"
            borderRadius="33px"
          >
            Get started
          </Button>
        </div>
      </div>
    </Suspense>
  );
};

export default NavBar;
