import { Text, Button } from "@chakra-ui/react";
import React from "react";
import whyChooseUsImg from "@/components/Assets/why-choose-us-1.png";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/embla/arrow-buttons";
interface movingType {
  data: {
    name: string;
    description: string;
  }[];
}

export const Slider = ({ data }: movingType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="w-full md:w-[1261px] h-[453px] md:h-[515px] flex justify-between items-center">
      <div className="w-full h-[386px]  md:py-10 md:h-full md:w-[600px] md:px-10  flex flex-col justify-between md:gap-10">
        <div className="embla__viewport w-full " ref={emblaRef}>
          <div className="embla__container w-full h-full">
            {data.map(({ name, description }, index: number) => (
              <div className="embla__slide" key={index}>
                <div className="flex flex-col w-full text-white md:gap-y-[13px]">
                  <Text
                    fontSize={{ base: "36px", md: "60px" }}
                    className="font-medium pl-3"
                    lineHeight={{ md: "71px" }}
                  >
                    {name}
                  </Text>
                  <Text
                    fontSize={{ base: "16px", md: "22px" }}
                    className="md:font-medium px-3"
                    lineHeight={{ md: "27px", base: "24px" }}
                  >
                    {description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pl-3  w-[150px] flex gap-x-5 justify-between ">
          <PrevButton onClick={onPrevButtonClick} />
          <NextButton onClick={onNextButtonClick} />
        </div>

        <Button
          className="flex justify-center items-center py-[13px] px-[26px] ml-3 w-[136px] h-[46px]  bg-[#75D130] text-white text-[16px] font-medium"
          borderRadius="33px"
        >
          Learn more
        </Button>
      </div>

      <div className="w-full h-full md:w-[674px] hidden md:flex justify-end items-center">
        <Image
          src={whyChooseUsImg}
          alt="an image showing a man carrying some boxes"
          className="object-center w-full h-full"
        />
      </div>
    </div>
  );
};
