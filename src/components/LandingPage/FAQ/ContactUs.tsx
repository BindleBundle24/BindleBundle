"use client";
import React, { useState } from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Textarea,
  Image,
  Fieldset,
} from "@chakra-ui/react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  User,
  EnvelopeSimple,
  DeviceMobileCamera,
  XCircle,
} from "@phosphor-icons/react";
import { Field } from "@/components/ui/field";

export const ContactUs = () => {
  const [success, setSuccess] = useState(false);

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, "Full name must be at least 2 characters")
      .required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(
        /^\+?1?[-.\s]?\(?[2-9][0-9]{2}\)?[-.\s]?[2-9][0-9]{2}[-.\s]?[0-9]{4}$/,
        "Phone number is not valid"
      )
      .required("Phone number is required"),

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await fetch("/api/contact_us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("data", data);

      if (!data.response.error) {
        setSuccess(true);
        resetForm();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        console.error("Error sending email:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      <Box
        my="2em"
        display={success ? "none" : "flex"}
        flexDirection="column"
        justifyContent={{ xl: "space-between", base: "" }}
        justifySelf={"center"}
        alignItems={{ xl: "start", base: "" }}
        gapY={"10px"}
        width={{ base: "100%", xl: "411px" }}
        height="550px"
        backgroundColor={"#FCF7F1"}
        borderRadius="6px"
        paddingX={{ base: "0.6em", xl: "1em" }}
        paddingY="1em"
      >
        <Text color="#878484" fontWeight="500" lineHeight="17.22px">
          CONTACT US
        </Text>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form style={{ width: "100%", height: "100%" }}>
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
                  <Field>
                    <Box
                      width={"100%"}
                      height="42px"
                      borderRadius={"10px"}
                      backgroundColor={"#FFFFFF"}
                      borderColor={"#CAD0DB"}
                      paddingLeft={"12px"}
                      paddingY="11px"
                      borderWidth={"1px"}
                      display={"flex"}
                      justifyContent="space-between"
                      alignItems="center"
                      gapX="7px"
                    >
                      {" "}
                      <User size={20} />{" "}
                      <Input
                        placeholder={"full name"}
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
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        borderRadius={"10px"}
                      />
                    </Box>
                    <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                      <ErrorMessage name="fullName" />
                    </Text>
                  </Field>
                  <Field>
                    <Box
                      width={"100%"}
                      height="42px"
                      borderRadius={"10px"}
                      backgroundColor={"#FFFFFF"}
                      borderColor={"#CAD0DB"}
                      paddingLeft={"12px"}
                      paddingY="11px"
                      borderWidth={"1px"}
                      display={"flex"}
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
                        borderRadius={"10px"}
                        name="email"
                        type="email"
                        placeholder={"email address"}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Box>{" "}
                    <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                      <ErrorMessage name="email" />
                    </Text>
                  </Field>

                  <Field>
                    <Box
                      width={"100%"}
                      height="42px"
                      borderRadius={"10px"}
                      backgroundColor={"#FFFFFF"}
                      borderColor={"#CAD0DB"}
                      paddingLeft={"12px"}
                      paddingY="11px"
                      borderWidth={"1px"}
                      display={"flex"}
                      justifyContent="space-between"
                      alignItems="center"
                      gapX="7px"
                    >
                      {" "}
                      <DeviceMobileCamera size={20} />
                      <Input
                        placeholder={"mobile NO"}
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
                        borderRadius={"10px"}
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Box>
                    <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                      <ErrorMessage name="phoneNumber" />
                    </Text>
                  </Field>

                  <Text
                    width="100%"
                    borderWidth={"1px"}
                    borderColor={"#D2D1CF"}
                  ></Text>

                  <Field>
                    <Box
                      width={"100%"}
                      height="125px"
                      borderRadius={"10px"}
                      backgroundColor={"#FFFFFF"}
                      borderColor={"#CAD0DB"}
                      paddingX={"12px"}
                      paddingY="11px"
                      borderWidth={"1px"}
                      display={"flex"}
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
                        placeholder={
                          "I would like to make enquiries about movements from...."
                        }
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Box>
                    <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                      <ErrorMessage name="message" />
                    </Text>
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
                    type="submit"
                  >
                    Contact us
                  </Button>
                </Fieldset.Content>
              </Fieldset.Root>
            </Form>
          )}
        </Formik>
      </Box>

      {success && (
        <Box
          width={{ base: "100%", xl: "389px" }}
          height={{ base: "100%", xl: "321px" }}
          maxHeight={{ base: "110vh", xl: "321px" }}
          display={success ? "flex" : "none"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          borderRadius={"12px"}
          gapY={"10px"}
          backgroundColor={"#FCF7F1"}
          paddingX={"16px"}
          paddingY={"15px"}
        >
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-end"}
            alignSelf={"flex-end"}
          >
            <XCircle
              size={32}
              onClick={() => {
                setSuccess(false);
              }}
              cursor={"pointer"}
            />
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gapY={"10px"}
            width={"333px"}
            height={"189px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src="/assets/success.svg"
              alt={"success image"}
              width={"77px"}
              height={"77px"}
              display={success ? "flex" : "none"}
            />
            <Text fontSize={"16px"} fontWeight={"600"} textAlign={"center"}>
              Successful
            </Text>
            <Text fontSize={"16px"} textAlign={"center"}>
              We have received your message, our team will get back to you in a
              few hours
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};
