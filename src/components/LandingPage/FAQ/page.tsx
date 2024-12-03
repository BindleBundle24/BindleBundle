import React from "react";
import { FAQs } from "./Faq";
import { ContactUs } from "./ContactUs";

export const FaqSection = () => {
  return (
    <div className="flex w-full flex-col md:flex-row md:w-[1257px] mx-auto justify-between items-start">
      <FAQs />
      <ContactUs />
    </div>
  );
};
