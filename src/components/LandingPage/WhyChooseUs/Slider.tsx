import { Text, Button, Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import whyChooseUsImg from "@/components/Assets/why-choose-us-1.png";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/embla/arrow-buttons";
import { useRouter } from "next/navigation";

interface MovingType {
  data: {
    name: string;
    description: string;
    type: string;
  }[];
}

export const Slider = ({ data }: MovingType) => {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const [currentType, setCurrentType] = useState(data[0]?.type || "");

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        const selectedIndex = emblaApi.selectedScrollSnap();
        setCurrentType(data[selectedIndex]?.type || "");
      };

      emblaApi.on("select", onSelect);

      return () => {
        emblaApi.off("select", onSelect);
      };
    }
    return undefined;
  }, [emblaApi, data]);

  return (
    <Box
      display={"flex"}
      width={{ base: "100%", md: "1261px" }}
      height={{ base: "453px", md: "515px" }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexDirection="column"
        width={{ base: "100%", md: "600px" }}
        height={{ base: "386px", md: "100%" }}
        justifyContent={"space-between"}
        paddingY={{ base: "", md: "40px" }}
        paddingX={{ base: "", md: "40px" }}
        gap={{ base: "", md: "40px" }}
      >
        <Box width={"100%"} overflow={"hidden"} ref={emblaRef}>
          <Box display={"flex"} width={"100%"} height={"100%"}>
            {data.map(({ name, description }, index) => (
              <Box
                display="flex"
                transform="translate3d(0, 0, 0)"
                flexShrink={0}
                flexGrow={0}
                flexBasis={"100%"}
                minWidth="90%"
                gap="15px"
                // className="embla__slide"
                key={index}
              >
                <Box
                  display={"flex"}
                  flexDirection="column"
                  width="100%"
                  color={"#FFFFFF"}
                  gapY={{ base: "", md: "13px" }}
                  // className="flex flex-col w-full text-white md:gap-y-[13px]"
                >
                  <Text
                    fontSize={{ base: "36px", md: "60px" }}
                    paddingLeft={"12px"}
                    fontWeight={"500"}
                    lineHeight={{ md: "71px" }}
                  >
                    {name}
                  </Text>
                  <Text
                    fontSize={{ base: "16px", md: "22px" }}
                    fontWeight={{ md: "500" }}
                    paddingX={"12px"}
                    lineHeight={{ md: "27px", base: "24px" }}
                  >
                    {description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          paddingLeft={"12px"}
          width={"150px"}
          gapX={"20px"}
          display={"flex"}
          justifyContent="space-between"
        >
          <PrevButton onClick={onPrevButtonClick} />
          <NextButton onClick={onNextButtonClick} />
        </Box>

        <Button
          display={"flex"}
          justifyContent="center"
          alignItems="center"
          height={"46px"}
          width={"136px"}
          backgroundColor={"#75D130"}
          color={"#FFFFFF"}
          paddingX={"26px"}
          paddingY={"13px"}
          fontWeight={"500"}
          fontSize={"16px"}
          borderRadius="33px"
          marginLeft={"12px"}
          onClick={() => router.push(`/services?type=${currentType}`)}
        >
          Learn more
        </Button>
      </Box>

      <Box
        width={{ base: "100%", md: "674px" }}
        height={"100%"}
        display={{ base: "none", md: "flex" }}
        justifyContent={"end"}
        alignItems={"center"}
      >
        <Image
          src={"/assets/why-choose-us-1.png"}
          objectPosition={"center"}
          height={"100%"}
          width={"100%"}
          alt="An image showing a man carrying some boxes"
        />
      </Box>
    </Box>
  );
};
