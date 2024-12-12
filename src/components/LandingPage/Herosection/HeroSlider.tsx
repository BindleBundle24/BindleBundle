import { Box } from "@chakra-ui/react";
import Autoscroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import img1 from "@/components/Assets/heroImg1.png";
import img2 from "@/components/Assets/heroImg2.png";
import img3 from "@/components/Assets/heroImg3.png";
import img4 from "@/components/Assets/heroImg4.png";
import img5 from "@/components/Assets/heroImg5.png";
import Image from "next/image";

const SLIDER_IMAGES = [img1, img2, img3, img4, img5, img3];

export const HeroSlider = () => {
  const [heroEmblaRef] = useEmblaCarousel({ loop: true }, [Autoscroll()]);

  return (
    <div className="w-screen md:w-[1440px] h-[329px] md:h-[414px] flex justify-center items-center mx-auto">
      <Box
        className="overflow-hidden"
        ref={heroEmblaRef}
        height={{ md: "337px", base: "246px" }}
        width={"100%"}
        mt={{ md: "15em", base: "1rem" }}
      >
        <Box className="flex gap-x-5 w-full h-full">
          {SLIDER_IMAGES.map((imgSrc, index) => {
            const alignment = index % 2 === 0 ? "items-start" : "items-end";
            return (
              <div
                className={` flex-shrink-0 flex-grow-0 basis-[54%] md:basis-[20.3%] mx-2 h-full flex ${alignment}`}
                key={index}
              >
                <Image
                  src={imgSrc}
                  alt={`slider image ${index + 1}`}
                  className="w-[211px] md:w-[292px]   h-[211px] md:h-[292px]"
                />
              </div>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};
