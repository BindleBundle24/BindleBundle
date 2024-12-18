"use client";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  Box,
  Text,
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
          <Text
            style={{
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
              color: "#000000",
            }}
          >
            {title}
          </Text>
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
      width={{ base: "100%", md: "716px" }}
      borderColor={"#706E6E"}
      borderBottomWidth={"0.5px"}
      paddingBottom={isOpen ? "16px" : "0px"}
    >
      <AccordionItem
        value="faq-1"
        backgroundColor={isOpen ? "#FCF7F1" : ""}
        borderRadius={isOpen ? "24px" : ""}
        display={`flex`}
        flexDirection={isOpen ? "column" : "unset"}
        gap={isOpen ? "12px" : "0px"}
        padding={isOpen ? "16px" : "0px"}
        width={"100%"}
      >
        <AccordionItemTrigger onClick={handleToggle}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: isOpen ? "0" : "0.8em 0.5em",
              fontWeight: 400,
              lineHeight: "24px",
              color: "#000000",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <Text textAlign={"left"} fontSize={{ base: "16px", md: "18px" }}>
              {title}
            </Text>
            <Text style={{ display: "flex", alignItems: "center" }}>
              {isOpen ? (
                <Minus size={24} color="#75D130" />
              ) : (
                <Plus size={24} color="#75D130" />
              )}
            </Text>
          </Box>
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
