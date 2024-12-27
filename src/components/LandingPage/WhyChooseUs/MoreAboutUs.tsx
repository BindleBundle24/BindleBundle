import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import Autoscroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin } from "@phosphor-icons/react";

const SKEWED_CONTENT1 = [
  "Calgary",
  "Airdrie",
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
      flexDirection={{ base: "column", xl: "row" }}
      alignItems={"start"}
      justifyContent={{ base: "center", xl: "space-between" }}
      gap={{ base: "23px", xl: "0px" }}
      paddingY={{ base: "20px", xl: "0px" }}
      width={"100%"}
    >
      <Box
        width={{ base: "100%", xl: "719px" }}
        height={{ base: "419px", xl: "685px" }}
        display={"flex"}
        flexDirection={"column"}
        gapY={{ base: "23px", xl: "12px" }}
        paddingX={{ base: "24px", xl: "0px" }}
      >
        <Text
          fontWeight={"medium"}
          width={"100%"}
          fontSize={{ xl: "56px", base: "36px" }}
          lineHeight={{ xl: "56px", base: "38px" }}
        >
          More about us at Bindle Bundle
        </Text>
        <Text
          width={"100%"}
          fontSize={{ xl: "22px", base: "16px" }}
          color={"#595959"}
          lineHeight={{ xl: "25px", base: "27.06px" }}
        >
          Based in Canada, Bindle Bundle ensures every move is easy, efficient,
          and stress-free. We serve families, businesses, and individuals across
          the country, including:
        </Text>
        <Box
          width={{ base: "100%", xl: "733px" }}
          height={{ base: "211px", xl: "472px" }}
          display={"flex"}
          flexDirection={{ base: "column", xl: "row" }}
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
      <Box width={{ base: "100vw", xl: "563px" }} marginTop={{ xl: "192px" }}>
        <Box
          height={{ xl: "34px", base: "34px" }}
          width={"100%"}
          mt={{ xl: "2em", xl: "2em", base: "1rem" }}
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
                      fontSize={{ xl: "28px", xl: "22px", base: "18px" }}
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
          height={{ xl: "34px", base: "34px" }}
          width={"100%"}
          mt={{ xl: "2em", xl: "2em", base: "2.8em" }}
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
                      fontSize={{ xl: "28px", xl: "22px", base: "18px" }}
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
