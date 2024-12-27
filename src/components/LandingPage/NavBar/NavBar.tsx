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
  Image,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "@chakra-ui/react";
import React from "react";
import Menu from "@/components/Icons/Menu";
import CloseBtn from "@/components/Icons/CloseBtn";
import { useRouter, usePathname } from "next/navigation";
import { useQueryState } from "nuqs";
import NextLink from "next/link";

const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [moveType, setMoveType] = useQueryState("type", {});
  const handleMoveTypeChange = (type: string) => {
    setMoveType(type);

    if (!pathName.includes("/services")) {
      router.push(`/services?${type}`);
    } else {
      router.push(`${pathName}?${type}`);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFormOpen, setIsFormOpen] = useQueryState("formState", {});

  const openForm = () => setIsFormOpen("open");

  return (
    <Box
      background="white"
      width="full"
      height={{ base: "72px", xl: pathName !== "/services" ? "72px" : "130px" }}
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      marginX="auto"
      position="relative"
      shadow={{ base: "sm", xl: "none" }}
    >
      <Box
        background="white"
        width={{ base: "full", xl: "1257px" }}
        paddingX={{ base: "24px", xl: 0 }}
        paddingY={"20px"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginX="auto"
        height={{ base: "full", xl: "64px" }}
        borderBottomWidth={{ base: "none", xl: "1px" }}
        borderBottomColor={{ xl: "#D4CACA" }}
        zIndex={"10"}
      >
        <Box
          width={{ base: "full", xl: "730px" }}
          display="flex"
          justifyContent={{ base: "space-between", xl: "start" }}
          alignItems="center"
          gap="37px"
          height="100%"
        >
          <NextLink href="/">
            <Text
              fontWeight="medium"
              fontSize="20px"
              textAlign="center"
              color="#75D130"
              display="flex"
              width="180px"
              height="full"
              justifyContent="start"
              alignItems="center"
            >
              <Box
                width="38px"
                height="65px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={"/assets/logo.svg"}
                  alt="Bindle Bundle Logo"
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
              Bindle Bundle
            </Text>
          </NextLink>
          <Box
            display={{ base: "none", xl: "flex" }}
            flexDirection={{ base: "column", xl: "row" }}
            width={{ base: "full", xl: "500px" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <NextLink href="/services">
              <Text color="black" fontSize="18px">
                Services
              </Text>
            </NextLink>
            <NextLink href="/#testimonials">
              <Text color="black" fontSize="18px">
                Testimonials
              </Text>
            </NextLink>
            <NextLink href="/#about-us">
              <Text color="black" fontSize="18px">
                About us
              </Text>
            </NextLink>
            <NextLink href="/#contact-us">
              <Text color="black" fontSize="18px">
                Contact us
              </Text>
            </NextLink>
          </Box>
          <Box display={{ base: "flex", xl: "hidden" }} overflow={"hidden"}>
            <DrawerRoot size="full">
              <DrawerBackdrop />
              <DrawerTrigger
                asChild
                display={{ base: "flex", xl: "none" }}
                width="31px"
                height="16px"
              >
                <Button variant="plain" width="100%" height="100%">
                  <Menu />
                </Button>
              </DrawerTrigger>
              <DrawerContent
                offset="4"
                rounded="md"
                position="absolute"
                width="100%"
                height="100vh"
                top="0px"
                left="0px"
              >
                <DrawerActionTrigger
                  asChild
                  backgroundColor="#FCF7F1"
                  marginBottom="10px"
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
                <DrawerBody
                  display={{ base: "flex", xl: "none" }}
                  flexDirection="column"
                  width="100%"
                  gap="30px"
                  justifyContent="flex-start"
                >
                  <DrawerCloseTrigger asChild>
                    <NextLink href="/">
                      <Text
                        color="525050"
                        fontSize="18px"
                        fontWeight="medium"
                        borderBottom="0.5px solid #C3C3C34D"
                        marginTop={"20px"}
                      >
                        Home
                      </Text>
                    </NextLink>
                  </DrawerCloseTrigger>
                  <AccordionRoot collapsible>
                    <AccordionItem value="services">
                      <AccordionItemTrigger padding={"0px"}>
                        <Text
                          color="525050"
                          fontSize="18px"
                          fontWeight="medium"
                        >
                          Services
                        </Text>
                      </AccordionItemTrigger>

                      <AccordionItemContent marginY={"10px"}>
                        <DrawerCloseTrigger asChild>
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gapY={"30px"}
                            width={"90%"}
                            marginLeft={"40px"}
                          >
                            <Text
                              color="#525050"
                              display="flex"
                              justifyContent="flex-start"
                              alignItems="center"
                              fontWeight="medium"
                              width="100%"
                              borderBottomWidth={
                                moveType === "residential" ? "2.5px" : "0px"
                              }
                              borderBottomColor={
                                moveType === "residential"
                                  ? "#051937"
                                  : "transparent"
                              }
                              transition="all 0.3s ease-in-out"
                              onClick={() =>
                                router.push(`/services?type=residential`)
                              }
                            >
                              Residential Move
                            </Text>{" "}
                            <Text
                              color="#525050"
                              display="flex"
                              justifyContent="flex-start"
                              alignItems="center"
                              fontWeight="medium"
                              width="100%"
                              borderBottomWidth={
                                moveType === "commercial" ? "2.5px" : "0px"
                              }
                              borderBottomColor={
                                moveType === "commercial"
                                  ? "#051937"
                                  : "transparent"
                              }
                              transition="all 0.3s ease-in-out"
                              onClick={() =>
                                router.push(`/services?type=commercial`)
                              }
                            >
                              Commercial Move
                            </Text>
                            <Text
                              color="#525050"
                              display="flex"
                              justifyContent="flex-start"
                              alignItems="center"
                              fontWeight="medium"
                              width="100%"
                              borderBottomWidth={
                                moveType === "specialty" ? "2.5px" : "0px"
                              }
                              borderBottomColor={
                                moveType === "specialty"
                                  ? "#051937"
                                  : "transparent"
                              }
                              transition="all 0.3s ease-in-out"
                              onClick={() =>
                                router.push(`/services?type=specialty`)
                              }
                            >
                              Specialty Move
                            </Text>
                          </Box>
                        </DrawerCloseTrigger>
                      </AccordionItemContent>
                    </AccordionItem>
                  </AccordionRoot>
                  <DrawerCloseTrigger asChild>
                    <NextLink href="/#testimonials">
                      <Text
                        color="525050"
                        fontSize="18px"
                        fontWeight="medium"
                        borderBottom="0.5px solid #C3C3C34D"
                      >
                        Testimonials
                      </Text>
                    </NextLink>
                  </DrawerCloseTrigger>
                  <DrawerCloseTrigger asChild>
                    <NextLink href="/#about-us">
                      <Text
                        color="525050"
                        fontSize="18px"
                        fontWeight="medium"
                        borderBottom="0.5px solid #C3C3C34D"
                      >
                        About us
                      </Text>
                    </NextLink>
                  </DrawerCloseTrigger>
                  <DrawerCloseTrigger asChild>
                    <NextLink href="/#contact-us">
                      <Text
                        color="525050"
                        fontSize="18px"
                        fontWeight="medium"
                        borderBottom="0.5px solid #C3C3C34D"
                      >
                        Contact us
                      </Text>
                    </NextLink>
                  </DrawerCloseTrigger>
                </DrawerBody>
              </DrawerContent>
            </DrawerRoot>
          </Box>
        </Box>
        <Button
          display={{ base: "none", xl: "flex" }}
          justifyContent="center"
          alignItems="center"
          paddingY="13px"
          paddingX="26px"
          width="133px"
          height="46px"
          backgroundColor="#051937"
          color="white"
          fontSize="16px"
          fontWeight="medium"
          borderRadius="33px"
          onClick={openForm}
        >
          Get started
        </Button>
      </Box>
      <Box
        backgroundColor={"transparent"}
        gap={"40px"}
        width={"full"}
        height={"57px"}
        display={{
          base: "none",
          xl: pathName !== "/services" ? "none" : "flex",
        }}
        justifyContent={"center"}
        alignItems={"center"}
        marginX={"auto"}
        marginTop={"-10px"}
      >
        <Button
          color={moveType === "residential" ? "white" : "#777777"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="medium"
          width="205px"
          height="56px"
          backgroundColor={
            moveType === "residential" ? "#051937" : "transparent"
          }
          borderRightRadius={moveType === "residential" ? "18px" : "0px"}
          borderLeftRadius={moveType === "residential" ? "18px" : "0px"}
          border={moveType === "residential" ? "1px solid #D4CACA" : "none"}
          transition="all 0.3s ease-in-out"
          onClick={() => handleMoveTypeChange("residential")}
        >
          Residential Move
        </Button>
        <Button
          color={moveType === "commercial" ? "white" : "#777777"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="medium"
          width="205px"
          height="56px"
          backgroundColor={
            moveType === "commercial" ? "#051937" : "transparent"
          }
          borderRightRadius={moveType === "commercial" ? "18px" : "0px"}
          borderLeftRadius={moveType === "commercial" ? "18px" : "0px"}
          border={moveType === "commercial" ? "1px solid #D4CACA" : "none"}
          transition="all 0.3s ease-in-out"
          onClick={() => handleMoveTypeChange("commercial")}
        >
          Commercial Move
        </Button>
        <Button
          color={moveType === "specialty" ? "white" : "#777777"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontWeight="medium"
          width="205px"
          height="56px"
          backgroundColor={moveType === "specialty" ? "#051937" : "transparent"}
          borderRightRadius={moveType === "specialty" ? "18px" : "0px"}
          borderLeftRadius={moveType === "specialty" ? "18px" : "0px"}
          border={moveType === "specialty" ? "1px solid #D4CACA" : "none"}
          transition="all 0.3s ease-in-out"
          onClick={() => handleMoveTypeChange("specialty")}
        >
          Specialty Move
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
