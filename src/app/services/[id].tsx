"use client";
import React, { useState, useEffect } from "react";
import { MovingTypeDetailProps, movingTypeDetails } from "./MovingType";
import { Text, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";

export const ServicesDetails = () => {
  const router = useRouter();
  const [data, setData] = useState<MovingTypeDetailProps | null>(null);
  const [moveType] = useQueryState("type");

  const handleTriggerWhatToExpect = () => {
    if (window.location.pathname.includes("/services")) {
      router.push(`/what-to-expect`);
    } else {
      return;
    }
  };

  useEffect(() => {
    // setMoveType("");
    // const type = searchParams.get("type") || "residential";

    const matchingType = movingTypeDetails.find(
      (detail: MovingTypeDetailProps) => detail.type === moveType
    );

    setData(matchingType || null);
  }, [moveType]);

  return (
    <div className="w-full md:w-[1164px] md:h-[578px] flex justify-center items-center mx-auto flex-col px-6 md:px-0 mt-[20px]  ">
      {data ? (
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"space-between"}
          className="gap-[26px]"
        >
          <Text
            fontSize={{ base: "36px", md: "56px" }}
            fontWeight={"500"}
            textAlign={"left"}
            lineHeight={{ base: "41px", md: "54px" }}
          >
            {data.name}
          </Text>
          <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={"space-between"}
          >
            <Box
              width={{ base: "100%", md: "613px" }}
              height={{ base: "fit", md: "559px" }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              className="gap-[26px]"
            >
              <div className="w-full h-[268px] md:h-[401px] flex justify-center items-center  rounded-[15px] shadow-md border border-[#C38F5E33]">
                <Image
                  src={data.image}
                  alt="a profile image of a user"
                  className="object-center object-cover w-full h-full rounded-[15px]"
                />
              </div>
              <Box
                width={{ base: "100%", md: "474px" }}
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                gapY={"14px"}
              >
                <Button
                  className=" flex justify-center items-center py-[13px] px-[26px] w-full md:w-[224px] h-[52px] bg-[#051937] text-white  font-medium"
                  borderRadius="33px"
                >
                  Get moving
                </Button>
                <Button
                  className="flex justify-center items-center py-[13px] px-[26px] w-full md:w-[224px] h-[52px] bg-[#75D130] text-white  font-medium"
                  borderRadius="33px"
                  onClick={handleTriggerWhatToExpect}
                >
                  What to expect
                </Button>
              </Box>
            </Box>

            <Box
              width={{ base: "100%", md: "499px" }}
              height={{ base: "fit", md: "496px" }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyContent={"start"}
              gapY={{ base: "26px", md: "46px" }}
              overflow={{ base: "hidden", md: "auto" }}
              marginTop={{ base: "20px", md: "0px" }}
            >
              {data.description.map((item, index) => (
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  key={index}
                  width={"100%"}
                  height={{ base: "", md: "150px" }}
                  alignItems={"start"}
                  justifyContent={"space-between"}
                  gapX={{ base: "12px", md: "0" }}
                >
                  <Box
                    height={"100%"}
                    display={"flex"}
                    alignItems={"start"}
                    justifyContent={"start"}
                  >
                    <Text
                      fontSize={{ base: "50px", md: "78px" }}
                      fontWeight={"500"}
                      WebkitTextStrokeColor={"#000000"}
                      WebkitTextFillColor={"#FFFFFF"}
                      WebkitTextStrokeWidth={"1px"}
                      marginTop={{ base: "-8px", md: "-13px" }}
                      width={{ base: "41px", md: "82px" }}
                      textAlign={"center"}
                    >
                      {index + 1}
                    </Text>
                  </Box>
                  <Box
                    width={{ base: "100%", md: "417px" }}
                    height={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Text
                      fontSize={{ base: "20px", md: "28px" }}
                      fontWeight={"500"}
                      textAlign={"left"}
                      color={"#332F2F"}
                    >
                      {item.title}
                    </Text>
                    <Text
                      fontSize={{ base: "14px", md: "22px" }}
                      fontWeight={"400"}
                      textAlign={"left"}
                      lineHeight={{ base: "17.22px", md: "27.06px" }}
                      color={"#595959"}
                      paddingRight={{ base: "", md: "4px" }}
                    >
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <p className="text-base text-gray-500">
          No details available for the selected type.
        </p>
      )}
    </div>
  );
};
