import { Box, Card, Text, CardBody, Image } from "@chakra-ui/react";
import React from "react";

interface movingType {
  data: {
    name: string;
    description: string;
    img: string;
    bgImg?: string;
  }[];
}

export const Slider = ({ data }: movingType) => {
  return (
    <>
      {data.map(({ name, description, img }, index: number) => {
        return (
          <Card.Root
            key={index}
            borderRadius="8px"
            background="#fff"
            height={{ lg: "515px", md: "400px", base: "340px" }}
            width={{ lg: "370px", md: "225px", base: "50%" }}
            className="embla__slide"
            boxShadow="2px 4px 22px 0px #00000014"
          >
            <Box height={{ lg: "375px", md: "68%", base: "65%" }}>
              <Image
                src={img}
                alt="popular item"
                height="100%"
                width="100%"
                objectFit="cover"
                borderTopLeftRadius="8px"
                borderTopRightRadius="8px"
              />
            </Box>

            <CardBody px="1.2em" pb={{ lg: ".6em", md: "0", base: ".3em" }}>
              <Text
                py=".2em"
                fontWeight="400"
                textTransform="capitalize"
                fontSize={{ lg: "20px", md: "20px", base: "14px" }}
                lineHeight={{ lg: "32px", base: "27px", md: "27px" }}
                color="var(--alt-text-6)"
              ></Text>

              <Box>
                <Text
                  fontWeight="400"
                  color="#706E6E"
                  fontSize={{ lg: "18px", md: "16px", base: "14px" }}
                  lineHeight={{ lg: "32px", base: "27px", md: "27px" }}
                >
                  From {name}
                </Text>

                <Text
                  fontWeight="500"
                  fontSize={{ lg: "28px", md: "20px", base: "18px" }}
                  color="var(--alt-text-6)"
                  lineHeight={{ lg: "32px", base: "27px", md: "27px" }}
                >
                  {description}
                </Text>
              </Box>
            </CardBody>
          </Card.Root>
        );
      })}
    </>
  );
};
