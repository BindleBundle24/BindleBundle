"use client";
import React from "react";
import { FAQs } from "./Faq";
import { ContactUs } from "./ContactUs";

export const FaqSection = () => {
  return (
    <div className="flex w-full flex-col md:flex-row md:w-[1257px] mt-10 md:mt-0 mx-auto justify-between items-start px-10 md:px-0">
      <FAQs />
      <ContactUs />
    </div>
  );
};
