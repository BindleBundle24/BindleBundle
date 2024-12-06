import Clock from "@/components/Icons/Clock";
import NotePad from "@/components/Icons/NotePad";
import People from "@/components/Icons/People";
import Shield from "@/components/Icons/Shield";
import { Box, Text, Button, Heading } from "@chakra-ui/react";
import React from "react";

interface WhyHireUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const whyHireUsDetails = [
  {
    icon: <Clock />,
    title: "Prompt & Time Effective Drop-Off",
    description: "Punctual service you can count on, every single time",
  },
  {
    icon: <Shield />,
    title: "Licensed & Insured",
    description:
      "Your peace of mind is our priority—your move is fully protected",
  },
  {
    icon: <NotePad />,
    title: "Instant Quotes",
    description:
      "Know your moving costs upfront with our quick and transparent quoting tool",
  },
  {
    icon: <People />,
    title: "Responsive Team",
    description:
      "effective communication and swift action to meet customer needs",
  },
];

const WhyHireUsCard = ({ icon, title, description }: WhyHireUsCardProps) => {
  return (
    <Box
      className="group w-[158px] h-[154px] md:w-[290px] md:h-[300px] hover:drop-shadow-md rounded-[13px] px-[11px] py-2 md:px-[18px] md:py-6 bg-[#FCF7F1] cursor-pointer transition-all ease-in-out duration-300 gap-1 md:gap-[8px]"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"start"}
    >
      <Text className="w-[24px] h-[24px] md:w-[47px] md:h-[47px]">{icon}</Text>
      <Text className="font-medium md:text-[30px] text-[#575757]">{title}</Text>
      <Text className="w-[136px] md:w-[219px] bg-transparent h-[1px] group-hover:bg-[#75D130] transition-all duration-300"></Text>
      <Text className="text-[12px] md:text-[20px] text-[#3B3A3A]">
        {description}
      </Text>
    </Box>
  );
};

export const WhyHireUs = () => {
  return (
    <div className="w-full flex justify-between items-start flex-col md:flex-row">
      <Box
        display={"flex"}
        flexDirection={"column"}
        gapY={"30px"}
        justifyContent={"between"}
        alignItems={"start"}
        className="mt-28"
      >
        <Heading
          className="font-medium w-[354px]  md:w-[470px] text-[36px] md:text-[36px]  text-left
        "
          lineHeight={{ base: "41px", md: "56px" }}
        >
          Why you should <br className="hidden md:flex" />
          hire <span className="text-[#75D130]  ">Bindle Bundle</span>
        </Heading>{" "}
        <Button
          className="flex justify-center items-center py-[13px] px-[26px] w-[136px] md:w-[224px] h-[46px] md:h-[52px] bg-[#051937] text-white text-[16px] font-medium"
          borderRadius="33px"
        >
          Hire us now
        </Button>
      </Box>
      <Box className="flex flex-wrap mt-10 md:mt-0 justify-center md:justify-between gap-[25px] md:gap-8 w-[341px] h-[330px] md:h-[697px] md:w-[746px] ">
        {whyHireUsDetails.map((detail, idx) => {
          return (
            <WhyHireUsCard
              key={idx}
              icon={detail.icon}
              title={detail.title}
              description={detail.description}
            />
          );
        })}
      </Box>
    </div>
  );
};
