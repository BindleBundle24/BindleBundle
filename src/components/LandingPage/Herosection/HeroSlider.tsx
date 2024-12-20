import { Box, Image } from "@chakra-ui/react";
import Autoscroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const SLIDER_IMAGES = [
  "/assets/heroImg2.png",
  "/assets/heroImg1.png",
  "/assets/heroImg3.png",
  "/assets/heroImg4.png",
  "/assets/heroImg5.png",
  "/assets/heroImg3.png",
];

export const HeroSlider = () => {
  const [heroEmblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll()]);

  return (
    <Box
      width={{ base: "100vw", md: "1440px" }}
      height={{ base: "329px", md: "414px" }}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      marginX={"auto"}
    >
      <Box
        overflow={"hidden"}
        ref={heroEmblaRef}
        height={{ md: "337px", base: "246px" }}
        width={"100%"}
      >
        <Box width={"100%"} height="100%" display={"flex"} gapX="20px">
          {SLIDER_IMAGES.map((imgSrc, index) => {
            const alignment = index % 2 === 0 ? "start" : "end";
            return (
              <Box
                key={index}
                flexShrink={0}
                flexGrow={0}
                flexBasis={{ base: "54%", md: "20.3%" }}
                marginRight={
                  index === SLIDER_IMAGES.length - 1 &&
                  SLIDER_IMAGES.length === 6
                    ? "20px"
                    : ""
                }
                height="100%"
                display="flex"
                width={"100%"}
                alignItems={alignment}
              >
                <Image
                  src={imgSrc}
                  alt={`slider image ${index + 1}`}
                  width={{ base: "211px", md: "292px" }}
                  height={{ base: "211px", md: "292px" }}
                  display={"flex"}
                  borderRadius={"13px"}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
