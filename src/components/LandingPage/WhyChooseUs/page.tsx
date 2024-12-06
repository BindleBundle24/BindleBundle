"use client";
import React from "react";
import { WhyHireUs } from "./WhyHireUs";
import { MoreAboutUs } from "./MoreAboutUs";

export const WhyChooseUsSection = () => {
  return (
    <div className="flex w-[w-[371px] flex-col  md:w-[1257px] mx-auto justify-between gap-y-8  items-start  md:px-0">
      <WhyHireUs />
      <MoreAboutUs />
    </div>
  );
};
