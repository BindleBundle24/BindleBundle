import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Autoscroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Location from "@/components/Icons/Location";
import moreImg from "@/components/Assets/more-Img.png";

const SKEWED_CONTENT1 = [
  "Calgary",
  "Aidrie",
  "Beiseker",
  "Bowden",
  "Chestermere",
  "Cremona",
  "Crossfield",
];

const SKEWED_CONTENT2 = [
  "Carstairs",
  "Didsbury",
  "Innisfail",
  "Irricana",
  "Linden",
  "Olds",
  "Sundre",
  "Three Hills",
  "Saskatoon",
];

export const MoreAboutUs = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll()]);
  const [emblaRef2] = useEmblaCarousel({ loop: true }, [
    Autoscroll({ startDelay: 3000 }),
  ]);

  return (
    <div className="flex flex-col md:flex-row gap-[23px] md:gap-0 justify-between items-start  py-5 md:py-0 w-full">
      <Box
        width={{ base: "343px", md: "719px" }}
        height={{ base: "419px", md: "685px" }}
        display={"flex"}
        flexDirection={"column"}
        gapY={{ base: "23px", md: "12px" }}
        className="px-6 md:px-0"
      >
        <Text
          className="font-medium w-full "
          fontSize={{ md: "56px", base: "36px" }}
          lineHeight={{ md: "56px", base: "31px" }}
        >
          More about us at Bindle Bundle
        </Text>
        <Text
          className="w-full md:text-[22px] text-[#595959]"
          lineHeight={{ md: "25px", base: "27.06px" }}
        >
          Based in Canada, Bindle Bundle ensures every move is easy, efficient,
          and stress-free. We serve families, businesses, and individuals across
          the country, including:
        </Text>
        <div className="w-full h-[211px] md:w-[733px] md:h-[472px] flex justify-start items-center">
          <Image
            src={moreImg}
            alt="an image showing 2 men carrying a sofa"
            className="object-center w-full h-full"
          />
        </div>
      </Box>
      <div className="md:mt-48 w-screen md:w-[563px] ">
        <Box
          height={{ md: "34px", base: "34px" }}
          width={"100%"}
          mt={{ lg: "2em", md: "2em", base: "1rem" }}
        >
          <Box className="overflow-hidden" ref={emblaRef}>
            <Box className="flex">
              {SKEWED_CONTENT1?.map((item, index) => {
                return (
                  <Box
                    className={` mx-[10px]  w-[151px] flex-shrink-0 flex-grow-0 min-w-fit bg-[#051937] gap-[6px] py-[6px] px-[13px] rounded`}
                    key={index}
                  >
                    {" "}
                    <Text
                      fontWeight="300"
                      fontSize={{ lg: "28px", md: "22px", base: "18px" }}
                      lineHeight="38px"
                      color="white"
                      className="flex gap-[9px] justify-center items-center  py-[6px] px-[13px]"
                    >
                      <Location />
                      {item}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          height={{ md: "34px", base: "34px" }}
          width={"100%"}
          mt={{ lg: "2em", md: "2em", base: "2.8em" }}
          className="bg-tranasparent"
        >
          <Box className="overflow-hidden " ref={emblaRef2}>
            <Box className="flex">
              {SKEWED_CONTENT2?.map((item, index) => {
                return (
                  <Box
                    className={` mx-[10px]  w-[151px] flex-shrink-0 flex-grow-0 min-w-fit bg-[#051937] gap-[6px] py-[6px] px-[13px] rounded`}
                    key={index}
                  >
                    {" "}
                    <Text
                      fontWeight="500"
                      fontSize={{ lg: "28px", md: "22px", base: "18px" }}
                      lineHeight="38px"
                      color="white"
                      className="flex gap-[9px] justify-center items-center  py-[6px] px-[13px]"
                    >
                      <Location />
                      {item}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};
