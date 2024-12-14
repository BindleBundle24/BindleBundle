"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { MovingTypeDetailProps, movingTypeDetails } from "./MovingType";
import { Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export const ServicesDetails = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<MovingTypeDetailProps | null>(null);

  useEffect(() => {
    const type = searchParams.get("type") || "residential";

    const matchingType = movingTypeDetails.find(
      (detail: MovingTypeDetailProps) => detail.type === type,
    );

    setData(matchingType || null);
  }, [searchParams]);

  return (
    <div className="w-full md:w-[1641px] md:h-[578px] flex justify-center items-center mx-auto flex-col mt-[20px] ">
      {data ? (
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            width={{ base: "279px", md: "613x" }}
            height={{ base: "279px", md: "559px" }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"start"}
            className=" gap-[26px]"
          >
            <Text
              fontSize={{ base: "36px", md: "56px" }}
              fontWeight={"500"}
              textAlign={"left"}
              lineHeight={{ base: "41px", md: "54px" }}
            >
              {data.name}
            </Text>
            <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] flex justify-center items-center">
              <Image
                src={data.image}
                alt="a profile image of a user"
                className="object-center w-full h-full"
              />
            </div>
          </Box>
          <div className="text-base text-gray-600">
            {data.description.map((item, index) => (
              <div key={index} className="mb-4">
                <h2 className="font-semibold">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>{" "}
        </Box>
      ) : (
        <p className="text-base text-gray-500">
          No details available for the selected type.
        </p>
      )}
    </div>
  );
};
