import { Box, Text, Input, Button, Fieldset, Textarea } from "@chakra-ui/react";
import React from "react";
import { Field } from "@/components/ui/field";
import {
  User,
  EnvelopeSimple,
  DeviceMobileCamera,
} from "@phosphor-icons/react";

export const ContactUs = () => {
  return (
    <Box
      my="2em"
      display="flex"
      flexDirection="column"
      justifyContent={{ xl: "start", base: "", xl: "" }}
      justifySelf={"center"}
      alignItems={{ xl: "start", base: "", xl: "" }}
      gapY={"25px"}
      width={{ base: "100%", xl: "411px" }}
      height="500px"
      backgroundColor={"#FCF7F1"}
      borderRadius="6px"
      paddingX={{ base: "0.6em", xl: "1em" }}
      paddingY="1em"
    >
      <Text color="#878484" fontWeight={"500"} lineHeight={"17.22px"}>
        CONTACT US
      </Text>

      <Fieldset.Root width={"100%"} height="168px">
        <Fieldset.Content
          width={"100%"}
          height="100%"
          display="flex"
          flexDirection={"column"}
          alignItems={"start"}
          justifyContent={"space-between"}
          gap={{ base: "22px", xl: "22px" }}
        >
          <Field required>
            <Box
              width={"100%"}
              height="42px"
              borderRadius={"10px"}
              backgroundColor={"#FFFFFF"}
              borderColor={"#CAD0DB"}
              paddingLeft={"12px"}
              paddingY="11px"
              borderWidth={"1px"}
              display={`flex`}
              justifyContent="space-between"
              alignItems="center"
              gapX="7px"
            >
              {" "}
              <User size={20} />{" "}
              <Input
                placeholder={` full name`}
                variant={"subtle"}
                color={"#878484"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                paddingX={"8px"}
                fontWeight={"500"}
                backgroundColor={"#FFFFFF"}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                name="fullName"
                type="text"
              />
            </Box>
          </Field>
          <Field required>
            <Box
              width={"100%"}
              height="42px"
              borderRadius={"10px"}
              backgroundColor={"#FFFFFF"}
              borderColor={"#CAD0DB"}
              paddingLeft={"12px"}
              paddingY="11px"
              borderWidth={"1px"}
              display={`flex`}
              justifyContent="space-between"
              alignItems="center"
              gapX="7px"
            >
              <EnvelopeSimple size={20} />
              <Input
                variant={"subtle"}
                color={"#878484"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                paddingX={"8px"}
                fontWeight={"500"}
                backgroundColor={"#FFFFFF"}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                name="email"
                type="email"
                placeholder={`email address`}
              />
            </Box>{" "}
          </Field>

          <Field required>
            <Box
              width={"100%"}
              height="42px"
              borderRadius={"10px"}
              backgroundColor={"#FFFFFF"}
              borderColor={"#CAD0DB"}
              paddingLeft={"12px"}
              paddingY="11px"
              borderWidth={"1px"}
              display={`flex`}
              justifyContent="space-between"
              alignItems="center"
              gapX="7px"
            >
              {" "}
              <DeviceMobileCamera size={20} />
              <Input
                placeholder={`mobile NO`}
                variant={"subtle"}
                color={"#878484"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                paddingX={"8px"}
                fontWeight={"500"}
                backgroundColor={"#FFFFFF"}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                name="phoneNumber"
                type="tel"
              />
            </Box>
          </Field>

          <Text width="100%" borderWidth={"1px"} borderColor={"#D2D1CF"}></Text>

          <Field required>
            <Box
              width={"100%"}
              height="125px"
              borderRadius={"10px"}
              backgroundColor={"#FFFFFF"}
              borderColor={"#CAD0DB"}
              paddingX={"12px"}
              paddingY="11px"
              borderWidth={"1px"}
              display={`flex`}
              justifyContent="space-between"
              alignItems="center"
              gapX="7px"
            >
              <Textarea
                variant={"subtle"}
                color={"#878484"}
                _placeholder={{ color: "#878484", fontWeight: "500" }}
                paddingX={"8px"}
                fontWeight={"500"}
                backgroundColor={"#FFFFFF"}
                _focus={{
                  borderWidth: "0px",
                  outlineWidth: "0px",
                }}
                height="100%"
                paddingY={"8px"}
                placeholder={`I would like to make enquiries about movements from....`}
                name="message"
              />
            </Box>
          </Field>
          <Button
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={{ base: "287px", xl: "133px" }}
            height={{ base: "41px", xl: "46px" }}
            backgroundColor={"#051937"}
            color={"#FFFFFF"}
            paddingX={"26px"}
            paddingY={"13px"}
            fontWeight={"500"}
            fontSize={"16px"}
            borderRadius="33px"
            // type="submit"
          >
            Contact us
          </Button>
        </Fieldset.Content>
      </Fieldset.Root>
    </Box>
  );
};
