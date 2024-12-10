import { Box, Text, Input, Button, Fieldset, Textarea } from "@chakra-ui/react";
import React from "react";
import { Field } from "@/components/ui/field";
import {
  User,
  EnvelopeSimple,
  DeviceMobileCamera,
} from "@phosphor-icons/react";

export const ContactUs = () => {
  // const formSubmit = () => {
  //   console.log("Submitted");
  // };
  return (
    <Box
      my="2em"
      display="flex"
      flexFlow="column"
      justifyContent={{ lg: "start", base: "", md: "" }}
      justifySelf={"center"}
      alignItems={{ lg: "start", base: "", md: "" }}
      gapY={"25px"}
      className="w-full md:w-[411px] h-[462px] bg-[#FCF7F1] rounded-[6px] px-[0.6em] py-[1em] md:px-[1em]"
    >
      <Text className="text-[#878484] font-medium " lineHeight={"17.22px"}>
        CONTACT US
      </Text>
      <form
        className=" w-full  h-[168px] flex flex-col items-start  justify-between gap-4 md:gap-[22px]"
        // onSubmit={formSubmit}
      >
        <Fieldset.Root>
          <Fieldset.Content>
            <Field required>
              <Box
                className="w-full h-[42px] rounded-[10px] bg-white border-[#CAD0DB] border pl-[12px] py-[11px]"
                display={`flex`}
                justifyContent="space-between"
                alignItems="center"
                gapX="7px"
              >
                {" "}
                <User size={20} />{" "}
                <Input
                  placeholder={` full name`}
                  className=" outline-none placeholder:text-[#878484] placeholder:font-medium px-2"
                  name="fullName"
                  type="text"
                />
              </Box>
            </Field>
            <Field required>
              <Box
                className="w-full h-[42px] rounded-[10px] bg-white border-[#CAD0DB] border pl-[12px] py-[11px]"
                display={`flex`}
                justifyContent="space-between"
                alignItems="center"
                gapX="7px"
              >
                {" "}
                <EnvelopeSimple size={20} />{" "}
                <Input
                  placeholder={`email address`}
                  className=" outline-none placeholder:text-[#878484] placeholder:font-medium px-2"
                  name="email"
                  type="email"
                />
              </Box>{" "}
            </Field>

            <Field required>
              <Box
                className="w-full h-[42px] rounded-[10px] bg-white border-[#CAD0DB] border pl-[12px] py-[11px]"
                display={`flex`}
                justifyContent="space-between"
                alignItems="center"
                gapX="7px"
              >
                {" "}
                <DeviceMobileCamera size={20} />
                <Input
                  placeholder={`mobile NO`}
                  className=" outline-none placeholder:text-[#878484] placeholder:font-medium px-2 "
                  name="phoneNumber"
                  type="tel"
                />
              </Box>
            </Field>

            <Text className="w-full border border-[#D2D1CF]"></Text>

            <Field required>
              <Box
                className="w-full h-[125px] rounded-[10px] bg-white border-[#CAD0DB] border px-[12px] "
                display={`flex`}
                justifyContent="space-between"
                alignItems="center"
                gapX="7px"
              >
                <Textarea
                  placeholder={`I would like to make enquiries about movements from....`}
                  className=" outline-none h-full py-2 placeholder:text-[#878484] placeholder:font-medium"
                  name="message"
                />
              </Box>
            </Field>
            <Button
              className="flex justify-center items-center py-[13px] px-[26px] w-[287px] md:w-[133px] h-[41px] md:h-[46px] bg-[#051937] text-white text-[16px] font-medium"
              borderRadius="33px"
              // type="submit"
            >
              Contact us
            </Button>
          </Fieldset.Content>
        </Fieldset.Root>
      </form>
    </Box>
  );
};
