import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import Autoscroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin } from "@phosphor-icons/react";

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
    Autoscroll({ direction: "backward" }),
  ]);

  return (
    <Box
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      alignItems={"start"}
      justifyContent={{ base: "center", md: "space-between" }}
      gap={{ base: "23px", md: "0px" }}
      paddingY={{ base: "20px", md: "0px" }}
      width={"100%"}
    >
      <Box
        width={{ base: "100%", md: "719px" }}
        height={{ base: "419px", md: "685px" }}
        display={"flex"}
        flexDirection={"column"}
        gapY={{ base: "23px", md: "12px" }}
        paddingX={{ base: "24px", md: "0px" }}
      >
        <Text
          fontWeight={"medium"}
          width={"100%"}
          fontSize={{ md: "56px", base: "36px" }}
          lineHeight={{ md: "56px", base: "38px" }}
        >
          More about us at Bindle Bundle
        </Text>
        <Text
          width={"100%"}
          fontSize={{ md: "22px", base: "16px" }}
          color={"#595959"}
          lineHeight={{ md: "25px", base: "27.06px" }}
        >
          Based in Canada, Bindle Bundle ensures every move is easy, efficient,
          and stress-free. We serve families, businesses, and individuals across
          the country, including:
        </Text>
        <Box
          width={{ base: "100%", md: "733px" }}
          height={{ base: "211px", md: "472px" }}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"start"}
        >
          <Image
            src={"/assets/more-Img.png"}
            alt="an image showing 2 men carrying a sofa"
            width={"100%"}
            height={"100%"}
            objectPosition={"center"}
          />
        </Box>
      </Box>
      <Box width={{ base: "100vw", md: "563px" }} marginTop={{ md: "192px" }}>
        <Box
          height={{ md: "34px", base: "34px" }}
          width={"100%"}
          mt={{ lg: "2em", md: "2em", base: "1rem" }}
        >
          <Box overflow={"hidden"} ref={emblaRef}>
            <Box display={"flex"}>
              {SKEWED_CONTENT1?.map((item, index) => {
                return (
                  <Box
                    marginX={"10px"}
                    width={"151px"}
                    display={"flex"}
                    flexShrink={0}
                    flexGrow={0}
                    minWidth={"fit"}
                    backgroundColor={"#051937"}
                    gap={"6px"}
                    paddingX={"13px"}
                    paddingY={"6px"}
                    borderRadius={"4px"}
                    key={index}
                  >
                    {" "}
                    <Text
                      fontWeight="500"
                      fontSize={{ lg: "28px", md: "22px", base: "18px" }}
                      lineHeight="38px"
                      color="white"
                      display={"flex"}
                      gap={"9px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      paddingX={"13px"}
                      paddingY={"6px"}
                    >
                      <MapPin size={24} />
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
        >
          <Box overflow={"hidden"} ref={emblaRef2}>
            <Box display={"flex"}>
              {SKEWED_CONTENT2?.map((item, index) => {
                return (
                  <Box
                    marginX={"10px"}
                    width={"151px"}
                    display={"flex"}
                    flexShrink={0}
                    flexGrow={0}
                    minWidth={"fit"}
                    backgroundColor={"#051937"}
                    gap={"6px"}
                    paddingX={"13px"}
                    paddingY={"6px"}
                    borderRadius={"4px"}
                    key={index}
                  >
                    {" "}
                    <Text
                      fontWeight="500"
                      fontSize={{ lg: "28px", md: "22px", base: "18px" }}
                      lineHeight="38px"
                      color="white"
                      display={"flex"}
                      gap={"9px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      paddingX={"13px"}
                      paddingY={"6px"}
                    >
                      <MapPin size={24} />
                      {item}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
