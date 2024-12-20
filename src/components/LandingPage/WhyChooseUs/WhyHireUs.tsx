import { Box, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import { UsersThree, Clock, ShieldCheck, Notepad } from "@phosphor-icons/react";

interface WhyHireUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const whyHireUsDetails = [
  {
    icon: (
      <Box
        width={{ base: "24px", md: "47px" }}
        height={{ base: "24px", md: "47px" }}
      >
        <Clock width={"100%"} height={"100%"} />
      </Box>
    ),
    title: "Prompt & Time Effective Drop-Off",
    description: "Punctual service you can count on, every single time",
  },
  {
    icon: (
      <Box
        width={{ base: "24px", md: "47px" }}
        height={{ base: "24px", md: "47px" }}
      >
        <ShieldCheck width={"100%"} height={"100%"} />
      </Box>
    ),
    title: "Licensed & Insured",
    description:
      "Your peace of mind is our priority—your move is fully protected",
  },
  {
    icon: (
      <Box
        width={{ base: "24px", md: "47px" }}
        height={{ base: "24px", md: "47px" }}
      >
        <Notepad width={"100%"} height={"100%"} />
      </Box>
    ),
    title: "Instant Quotes",
    description:
      "Know your moving costs upfront with our quick and transparent quoting tool",
  },
  {
    icon: (
      <Box
        width={{ base: "24px", md: "47px" }}
        height={{ base: "24px", md: "47px" }}
      >
        <UsersThree width={"100%"} height={"100%"} />
      </Box>
    ),
    title: "Responsive Team",
    description:
      "effective communication and swift action to meet customer needs",
  },
];

const WhyHireUsCard = ({ icon, title, description }: WhyHireUsCardProps) => {
  return (
    <Box
      width={{ base: "158px", md: "290px" }}
      height={{ base: "154px", md: "300px" }}
      borderRadius={"13px"}
      paddingX={{ base: "11px", md: "18px" }}
      backgroundColor={"#FCF7F1"}
      cursor={"pointer"}
      _hover={{ boxShadow: "lg" }}
      paddingY={{ base: "8px", md: "24px" }}
      transition={"all"}
      transitionDuration={"100ms"}
      gap={{ base: "4px", md: "8px" }}
      zIndex={"1000"}
      transitionTimingFunction={"ease-in-out"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-evenly"}
      alignItems={"start"}
      className=" group"
      id="about-us"
    >
      {icon}
      <Text
        fontWeight={"medium"}
        fontSize={{ base: "16px", md: "30px" }}
        paddingX={{ md: "4px" }}
        color={"#575757"}
      >
        {title}
      </Text>
      <Text
        width={{ base: "140px", md: "219px" }}
        backgroundColor={"transparent"}
        height={"1px"}
        _groupHover={{ backgroundColor: "#75D130" }}
        transition={"all"}
        transitionDuration={"300ms"}
      ></Text>
      <Text fontSize={{ base: "12px", md: "20px" }} color={"#3B3A3A"}>
        {description}
      </Text>
    </Box>
  );
};

export const WhyHireUs = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      marginX={"auto"}
      alignItems={"start"}
      flexDirection={{ base: "column", md: "row" }}
      backgroundImage={"url('/assets/bg-more-details.svg')"}
      backgroundRepeat={"repeat"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gapY={"30px"}
        justifyContent={"between"}
        alignItems={"start"}
        marginTop={{ base: "40px", md: "112px" }}
        paddingX={{ base: "24px", md: "0px" }}
      >
        <Text
          width={{ base: "100%", md: "470px" }}
          fontWeight={"medium"}
          fontSize={"36px"}
          textAlign={"left"}
          lineHeight={{ base: "41px", md: "56px" }}
        >
          Why you should <br className="hidden md:flex" />
          hire{" "}
          <Text as={"span"} color={"#75D130"}>
            Bindle Bundle
          </Text>
        </Text>
        <Button
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: "136px", md: "224px" }}
          height={{ base: "46px", md: "52px" }}
          backgroundColor={"#051937"}
          color={"#FFFFFF"}
          paddingX={"26px"}
          paddingY={"13px"}
          fontWeight={"medium"}
          fontSize={"16px"}
          borderRadius="33px"
        >
          Hire us now
        </Button>
      </Box>
      <Box
        display={"flex"}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        flexWrap={"wrap"}
        marginTop={{ base: "40px", md: "0px" }}
        marginX={"auto"}
        gap={{ base: "25px", md: "32px" }}
        width={{ base: "100%", md: "746px" }}
        height={{ base: "330px", md: "697px" }}
        position={"relative"}
      >
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
        <Box
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: "0", md: "585px" }}
          height={{ base: "0", md: "585px" }}
          position={"absolute"}
          marginX={"auto"}
          left={"10%"}
        >
          <Image
            src={"/assets/bg-more-details-card.png"}
            alt=""
            width={"100%"}
            height={"100%"}
            objectPosition={"center"}
          />
        </Box>
      </Box>
    </Box>
  );
};
