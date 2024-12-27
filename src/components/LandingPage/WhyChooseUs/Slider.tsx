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
      width={{ base: "100%", xl: "1261px" }}
      height={{ base: "453px", xl: "550px" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingBottom={{ base: "", xl: "16px" }}
      marginLeft={{ base: "0px", xl: "20px" }}
    >
      <Box
        display={"flex"}
        flexDirection="column"
        width={{ base: "100%", xl: "600px" }}
        height={{ base: "396px", xl: "100%" }}
        justifyContent={"space-between"}
        paddingY={{ base: "", xl: "40px" }}
        paddingX={{ base: "", xl: "40px" }}
        gap={{ base: "5px", xl: "20px" }}
      >
        <Box width={"100%"} height="100%" overflow={"hidden"} ref={emblaRef}>
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
                key={index}
                height="100%"
              >
                <Box
                  display={"flex"}
                  flexDirection="column"
                  width={{ base: "100%", xl: "561px" }}
                  color={"#FFFFFF"}
                  gapY={{ base: "", xl: "13px" }}
                  height="100%"
                >
                  <Text
                    fontSize={{ base: "36px", xl: "60px" }}
                    paddingLeft={"12px"}
                    fontWeight={"500"}
                    lineHeight={{ xl: "71px" }}
                    width="100%"
                  >
                    {name}
                  </Text>
                  <Text
                    fontSize={{ base: "16px", xl: "22px" }}
                    fontWeight={{ xl: "500" }}
                    paddingX={"12px"}
                    width="100%"
                    height="100%"
                    lineHeight={{ xl: "27px", base: "24px" }}
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
        width={{ base: "100%", xl: "715px" }}
        height={{ base: "100%", xl: "588px" }}
        display={{ base: "none", xl: "flex" }}
        justifyContent={"end"}
        alignItems={"end"}
        position={"absolute"}
        bottom={0}
        right={5}
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
