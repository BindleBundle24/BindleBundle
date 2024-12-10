import React from "react";
import { WhyHireUs } from "./WhyHireUs";
import { MoreAboutUs } from "./MoreAboutUs";
import { WhyChooseUs } from "./WhyChooseUs";

export const WhyChooseUsSection = () => {
  return (
    <div className="flex w-full flex-col  md:w-[1257px] mx-auto justify-between gap-y-8  items-start  md:px-0">
      <WhyChooseUs />
      <WhyHireUs />
      <MoreAboutUs />
    </div>
  );
};
