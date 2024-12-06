"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { Slider } from "./Slider";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const whyChooseUSDetails = [
  {
    name: "Full Service Moving",
    description:
      "Our full-service moving package covers everything! From packing and loading to transportation, unloading, and even unpacking, Bindle Bundle handles your move from start to finish. It’s the ultimate stress-free solution for a seamless relocation experience",
    img: "/src/components/Assets/why-choose-us-1.png",
    bgImg: "/src/components/Assets/bg-why-choose-us.png",
  },
  {
    name: "Full Service Moving",
    description:
      "Our full-service moving package covers everything! From packing and loading to transportation, unloading, and even unpacking, Bindle Bundle handles your move from start to finish. It’s the ultimate stress-free solution for a seamless relocation experience",
    img: "/src/components/Assets/why-choose-us-1.png",
    bgImg: "/src/components/Assets/bg-why-choose-us.png",
  },
  {
    name: "Full Service Moving",
    description:
      "Our full-service moving package covers everything! From packing and loading to transportation, unloading, and even unpacking, Bindle Bundle handles your move from start to finish. It’s the ultimate stress-free solution for a seamless relocation experience",
    img: "/src/components/Assets/why-choose-us-1.png",
    bgImg: "/src/components/Assets/bg-why-choose-us.png",
  },
];

const WhyChooseUs = () => {
  const [
    emblaRef,
    // emblaApi
  ] = useEmblaCarousel({ loop: true }, [AutoScroll()]);
  return (
    <Box position="">
      <Box className="">
        <Box className="" ref={emblaRef}>
          <Box className="">
            <Slider data={whyChooseUSDetails} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
