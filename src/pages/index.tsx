import { FaqSection } from "@/components/LandingPage/FAQ/FaqSection";
import { Herosection } from "@/components/LandingPage/Herosection/Herosection";
import { Testimonials } from "@/components/LandingPage/Testimonials/Testimonials";
import { WhyChooseUsSection } from "@/components/LandingPage/WhyChooseUs/WhyChooseUsSection";
import { Box } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bindle Bundle - Moving Company</title>
        <meta
          name="description"
          content="Bindle Bundle is a professional moving company offering residential, commercial, and specialty moving services. Get a seamless moving experience with us!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Box
        width={"full"}
        display={"flex"}
        flexDirection={"column"}
        gapY={"32px"}
        marginX={"auto"}
      >
        <Box
          display={"flex"}
          width={"full"}
          maxWidth={"1440px"}
          flexDirection={"column"}
          gapY={"32px"}
          marginX={"auto"}
        >
          <Herosection />
          <WhyChooseUsSection />
          <FaqSection />
        </Box>
        <Testimonials />
      </Box>
    </>
  );
}
