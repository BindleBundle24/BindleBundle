import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { Minus, Plus } from "lucide-react";

interface AccordionLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const AccordionLayout = ({ title, children }: AccordionLayoutProps) => {
  return (
    <AccordionRoot collapsible>
      <AccordionItem value="item-1">
        <AccordionItemTrigger>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
              color: "#000000",
            }}
          >
            {title}
          </span>
        </AccordionItemTrigger>
        <AccordionItemContent>{children}</AccordionItemContent>
      </AccordionItem>
    </AccordionRoot>
  );
};

export const FaqAccordion = ({ title, children }: AccordionLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AccordionRoot
      collapsible
      className={`w-full md:w-[716px] border-b-[0.5px] border-[#706E6E] ${
        isOpen ? "pb-4" : ""
      }`}
    >
      <AccordionItem
        value="faq-1"
        className={`${
          isOpen
            ? "bg-[#FCF7F1] rounded-3xl flex flex-col gap-3  p-4 w-full"
            : ""
        }  `}
      >
        <AccordionItemTrigger onClick={handleToggle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: isOpen ? "0" : "0.8em 0.5em",
              fontWeight: 400,
              lineHeight: "24px",
              color: "#000000",
              width: "100%",
            }}
          >
            <span className="md:text-[18px] text-left">{title}</span>
            <span style={{ display: "flex", alignItems: "center" }}>
              {isOpen ? (
                <Minus size={24} color="#75D130" />
              ) : (
                <Plus size={24} color="#75D130" />
              )}
            </span>
          </div>
        </AccordionItemTrigger>
        {isOpen && (
          <AccordionItemContent
            style={{ fontSize: "16px", color: "#555555" }}
            width={{ lg: "558px", base: "100%", md: "100%" }}
          >
            {children}
          </AccordionItemContent>
        )}
      </AccordionItem>
    </AccordionRoot>
  );
};
