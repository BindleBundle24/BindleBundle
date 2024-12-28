import { Box, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import { UsersThree, Clock, ShieldCheck, Notepad } from "@phosphor-icons/react";
import { useQueryState } from "nuqs";

interface WhyHireUsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const whyHireUsDetails = [
  {
    icon: (
      <Box
        width={{ base: "24px", xl: "47px" }}
        height={{ base: "24px", xl: "47px" }}
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
        width={{ base: "24px", xl: "47px" }}
        height={{ base: "24px", xl: "47px" }}
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
        width={{ base: "24px", xl: "47px" }}
        height={{ base: "24px", xl: "47px" }}
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
        width={{ base: "24px", xl: "47px" }}
        height={{ base: "24px", xl: "47px" }}
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
      width={{ base: "158px", xl: "290px" }}
      height={{ base: "154px", xl: "300px" }}
      borderRadius={"13px"}
      paddingX={{ base: "11px", xl: "18px" }}
      backgroundColor={"#FCF7F1"}
      cursor={"pointer"}
      _hover={{ boxShadow: "lg" }}
      paddingY={{ base: "8px", xl: "24px" }}
      transition={"all"}
      transitionDuration={"100ms"}
      gap={{ base: "4px", xl: "8px" }}
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
        fontWeight={"500"}
        fontSize={{ base: "16px", xl: "30px" }}
        paddingX={{ xl: "4px" }}
        color={"#575757"}
      >
        {title}
      </Text>
      <Text
        width={{ base: "140px", xl: "219px" }}
        backgroundColor={"transparent"}
        height={"1px"}
        _groupHover={{ backgroundColor: "#75D130" }}
        transition={"all"}
        transitionDuration={"300ms"}
      ></Text>
      <Text
        fontWeight={"400"}
        fontSize={{ base: "12px", xl: "20px" }}
        color={"#3B3A3A"}
      >
        {description}
      </Text>
    </Box>
  );
};

export const WhyHireUs = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isFormOpen, setIsFormOpen] = useQueryState("formState", {});

  const openForm = () => setIsFormOpen("open");
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      marginX={"auto"}
      alignItems={"start"}
      flexDirection={{ base: "column", xl: "row" }}
      backgroundImage={"url('/assets/bg-more-details.svg')"}
      backgroundRepeat={"repeat"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gapY={"30px"}
        justifyContent={"between"}
        alignItems={"start"}
        marginTop={{ base: "40px", xl: "112px" }}
        paddingX={{ base: "24px", xl: "0px" }}
      >
        <Text
          width={{ base: "100%", xl: "470px" }}
          fontWeight={"medium"}
          fontSize={"36px"}
          textAlign={"left"}
          lineHeight={{ base: "41px", xl: "56px" }}
        >
          Why you should <br className="hidden xl:flex" />
          hire{" "}
          <Text as={"span"} color={"#75D130"}>
            Bindle Bundle
          </Text>
        </Text>
        <Button
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: "136px", xl: "224px" }}
          height={{ base: "46px", xl: "52px" }}
          backgroundColor={"#051937"}
          color={"#FFFFFF"}
          paddingX={"26px"}
          paddingY={"13px"}
          fontWeight={"medium"}
          fontSize={"16px"}
          borderRadius="33px"
          onClick={openForm}
        >
          Hire us now
        </Button>
      </Box>
      <Box
        display={"flex"}
        justifyContent={{ base: "center", xl: "space-between" }}
        alignItems={"center"}
        flexWrap={"wrap"}
        marginTop={{ base: "40px", xl: "0px" }}
        marginX={"auto"}
        gap={{ base: "25px", xl: "32px" }}
        width={{ base: "100%", xl: "746px" }}
        height={{ base: "330px", xl: "697px" }}
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
          display={{ base: "none", xl: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ base: "0", xl: "585px" }}
          height={{ base: "0", xl: "585px" }}
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
