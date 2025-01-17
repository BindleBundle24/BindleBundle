import { Box, Text, Image } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/embla/arrow-buttons";

interface sliderDetailsProps {
  img: string;
  tip: string;
}

const SLIDER_DETAILS: sliderDetailsProps[] = [
  {
    img: "/assets/tip1.jpeg",
    tip: " Moving is also an excellent time to declutter your home and get rid of things you no longer use. Instead of discarding them, consider donating to a local charity and supporting your  community. If needed, Bindle Bundle Movers can assist in  delivering your donations to the right place.",
  },
  {
    img: "/assets/tip2.jpeg",
    tip: "If you're planning to move and have children, involving them in the process can make a big difference. This helps them feel more engaged and excited about the move, making it easier for them to adjust to the new environment",
  },
  {
    img: "/assets/tip3.jpeg",
    tip: "Planning ahead is critical for a successful move. Reach out to Bindle Bundle early to schedule your moving date, ensuring you have the time and support needed to make the process seamless",
  },
  {
    img: "/assets/tip4.jpeg",
    tip: "Having the right moving supplies is essential. Bindle Bundle comes prepared with everything needed, including furniture blankets, dollies, tools, straps, wardrobe boxes, platform trucks, and more, ensuring your belongings are handled with care.",
  },
  {
    img: "/assets/tip5.jpeg",
    tip: " Staying organized during packing and unpacking is crucial. Label all boxes clearly, and pack a personal essentials box for each family member to access right away. If the packing feels  like too much to handle, Bindle Bundle Movers offers professional packing services tailored to your needs, so you can focus on settling in",
  },
  {
    img: "/assets/tip6.jpeg",
    tip: "If you're uncertain about the level of assistance you might require, contact us for a free, no-obligation on-site estimate. Bindle Bundle Movers provides written quotes in Calgary and Airdrie, helping you assess your needs and compare our competitive prices..",
  },
  {
    img: "/assets/tip7.jpeg",
    tip: "Remember to update your address with the postal service and notify companies where you have active accounts. This ensures you receive your mail at your new address and avoid unnecessary charges",
  },
];

const WhatToExpectSlider = () => {
  const [expectEmblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <Box
      width={{ base: "100vw", xl: "1440px" }}
      height={"fit"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      marginX={"auto"}
      gapY={"15px"}
    >
      <Box
        width={{ base: "100%", xl: "1257px" }}
        display={"flex"}
        flexDirection={"row"}
        height={"70px"}
        justifyContent={"start"}
        gapX={"20px"}
        alignItems={"center"}
        paddingX={{ base: "24px", xl: "0px" }}
      >
        <Text
          fontSize={{ base: "36px", xl: "56px" }}
          fontWeight={"500"}
          lineHeight={"54px"}
        >
          Explore moving tips
        </Text>
        <Box
          width={"150px"}
          gapX={"20px"}
          display={{ base: "none", xl: "flex" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <PrevButton onClick={onPrevButtonClick} />
          <NextButton onClick={onNextButtonClick} />
        </Box>
      </Box>
      <Box
        width={"100%"}
        height={{ base: "420px", xl: "520px" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        gap={{ xl: "25px" }}
      >
        <Box
          width={"100%"}
          height={"100%"}
          className="embla__viewport "
          ref={expectEmblaRef}
        >
          <Box width={"100%"} height={"100%"} className="embla__container">
            {SLIDER_DETAILS.map(({ img, tip }, index) => (
              <Box
                width={{ base: "307px", xl: "464px" }}
                height={{ base: "384px", xl: "520px" }}
                key={index}
                backgroundColor={"#FCF7F1"}
                paddingX={"20px"}
                paddingY={"24px"}
                borderRadius={"16px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"start"}
                alignItems={"center"}
                marginX={"8px"}
                flexShrink={0}
                flexGrow={0}
                flexBasis={{ base: "54%", xl: "20.3%" }}
                gapY={"10px"}
              >
                <Box
                  width={{ base: "267px", xl: "424px" }}
                  height={{ base: "212px", xl: "320px" }}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image
                    src={img}
                    alt={`tip image ${index + 1}`}
                    width={"100%"}
                    height={"100%"}
                    objectPosition={"center"}
                  />
                </Box>
                <Text
                  fontSize={{ base: "14px", xl: "18px" }}
                  fontWeight={"400"}
                  lineHeight={{ base: "17.22px", xl: "22.14px" }}
                >
                  {tip}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={{ base: "flex", xl: "none" }}
        flexDirection={"row"}
        justifyContent={"space-between"}
        paddingX={{ base: "24px", xl: "0px" }}
      >
        <PrevButton onClick={onPrevButtonClick} />
        <NextButton onClick={onNextButtonClick} />
      </Box>
    </Box>
  );
};

export default WhatToExpectSlider;
