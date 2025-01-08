"use client";
import {
  Box,
  Group,
  Input,
  InputAddon,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  DeviceMobileCamera,
  EnvelopeSimple,
  MapPin,
  User,
  XCircle,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { useQueryState } from "nuqs";
import { LocationDetails } from "../Herosection/Herosection";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ObjectSchema } from "yup";
import { FormStateType } from "@/components/EmailTemplate/EmailTemplate";

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const locations = [
  "Carstairs",
  "Didsbury",
  "Innisfail",
  "Irricana",
  "Linden",
  "Olds",
  "Sundre",
  "Three Hills",
  "Saskatoon",
  "Calgary",
  "Airdrie",
  "Beiseker",
  "Bowden",
  "Chestermere",
  "Cremona",
  "Crossfield",
];

export const MovingForm = ({ isOpen, onClose }: FormProps) => {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validationSchema: ObjectSchema<FormStateType> = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    pickUp: Yup.string().required("Required"),
    dropOff: Yup.string().required("Required"),
    moveCategory: Yup.string().required("Required"),
    commercialCategory: Yup.string().when("moveCategory", {
      is: (val: string) => val === "commercial",
      then: (schema) => schema.required("Required"),
      otherwise: (schema) => schema.optional(),
    }),
    specialityMove: Yup.string().required("Required"),
    customInput: Yup.string().when("moveCategory", {
      is: (val: string) => val === "commercial",
      then: (schema) => schema.required("Required"),
      otherwise: (schema) => schema.optional(),
    }),
    serviceType: Yup.string().required("Required"),
    propertySize: Yup.string().when("moveCategory", {
      is: (val: string) => val === "residential",
      then: (schema) => schema.required("Required"),
      otherwise: (schema) => schema.optional(),
    }),
    otherSpeciality: Yup.string().when("specialityMove", {
      is: (val: string) => val === "others",
      then: (schema) => schema.required("Required"),
      otherwise: (schema) => schema.optional(),
    }),
    date: Yup.string().required("Required"),
  });

  const [locationsDetails, setLocationsDetails] =
    useQueryState<LocationDetails>("locationsDetails", {
      parse: (value) =>
        value ? JSON.parse(value) : { pickUpLocation: "", dropOffLocation: "" },
      serialize: (value) => JSON.stringify(value),
    });

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    pickUp: locationsDetails?.pickUpLocation || "",
    dropOff: locationsDetails?.dropOffLocation || "",
    moveCategory: "",
    commercialCategory: "",
    specialityMove: "",
    customInput: "",
    serviceType: "",
    propertySize: "",
    otherSpeciality: "",
    date: "",
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setSubmitting(true);

    try {
      const details = { ...values };
      if (details.moveCategory !== "commercial") {
        delete (details as Partial<typeof details>).customInput;
        delete (details as Partial<typeof details>).commercialCategory;
      }
      if (details.specialityMove !== "others") {
        delete (details as Partial<typeof details>).otherSpeciality;
      }
      if (details.moveCategory !== "residential") {
        delete (details as Partial<typeof details>).propertySize;
      }

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const data = await response.json();

      if (data.success) {
        resetForm();

        setLocationsDetails(null);
        setSuccess(true);
        setSubmitting(false);
        const timer = setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 5000);

        return () => clearTimeout(timer);
      } else {
        console.error("Error sending email:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Box
        width={{ base: "100%", xl: "707px" }}
        height={{ base: "100%", xl: "474px" }}
        maxHeight={{ base: "120vh", xl: "474px" }}
        display={success ? "none" : "flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"12px"}
        gapY={"10px"}
        backgroundColor={"#FCF7F1"}
        paddingX={{ base: "16px", xl: "0px" }}
        paddingY={{ base: "15px", xl: "0px" }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, setValues }) => (
            <Box
              width={{ base: "100%", xl: "674px" }}
              height={{ base: "100%", xl: "451px" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={{ base: "", xl: "center" }}
              paddingX={{ base: "0px", xl: "16px" }}
              paddingY={{ base: "10px", xl: "15px" }}
              gap={{ base: "10px", xl: "29px" }}
            >
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                height={{ xl: "100px" }}
              >
                <Text
                  fontSize={{ base: "", xl: "24px" }}
                  fontWeight={"600"}
                  textAlign={"left"}
                  display={"flex"}
                  lineHeight={{ base: "", xl: "29.52px" }}
                >
                  Let’s get you moving
                </Text>
                <XCircle
                  size={32}
                  onClick={() => {
                    onClose();
                    setValues({
                      ...values,
                      fullName: "",
                      email: "",
                      phoneNumber: "",
                      pickUp: "",
                      dropOff: "",
                      moveCategory: "",
                      commercialCategory: "",
                      specialityMove: "",
                      customInput: "",
                      serviceType: "",
                      propertySize: "",
                      otherSpeciality: "",
                      date: "",
                    });
                    setLocationsDetails(null);
                  }}
                  cursor="pointer"
                />
              </Box>
              <Form
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  width={"100%"}
                  gap={"5px"}
                  display={"flex"}
                  flexDirection={"column"}
                  height={{ base: "fit-content", xl: "68px" }}
                >
                  <Text
                    fontSize={{ base: "", xl: "14px" }}
                    fontWeight={"400"}
                    textAlign={"left"}
                    lineHeight={{ base: "", xl: "17.22px" }}
                    color={"#878484"}
                  >
                    DESTINATION
                  </Text>
                  <Box
                    display={"flex"}
                    flexDirection={{ base: "column", xl: "row" }}
                    width={"100%"}
                    gap={{ base: "5px", xl: "22px" }}
                    height={{ base: "fit-content", xl: "100%" }}
                  >
                    <Box
                      width={{ base: "100%", xl: "233px" }}
                      gapY={"5px"}
                      height={"100%"}
                    >
                      <Group
                        attached
                        width={"100%"}
                        height={{ base: "46px", xl: "46px" }}
                        borderRadius={"10px"}
                        borderWidth={"1px"}
                        borderColor={"#CAD0DB"}
                      >
                        <InputAddon
                          _focus={{
                            borderWidth: "0px",
                            outlineWidth: "0px",
                          }}
                          backgroundColor={"#FFFFFF"}
                          variant={"subtle"}
                          height={"100%"}
                          borderRadius={"10px"}
                        >
                          <MapPin size={24} />
                        </InputAddon>

                        <NativeSelectRoot
                          variant={"subtle"}
                          width={{ base: "100%", xl: "205.65px" }}
                          display={"flex"}
                          height={"44px"}
                          alignItems={"center"}
                        >
                          <NativeSelectField
                            color={"#878484"}
                            backgroundColor={"#FFFFFF"}
                            _placeholder={{
                              color: "#878484",
                              fontWeight: "500",
                            }}
                            _focus={{
                              borderWidth: "0px",
                              outlineWidth: "0px",
                            }}
                            placeholder={"Pick-Up"}
                            borderWidth={"0px"}
                            borderColor={"#CAD0DB"}
                            borderRightRadius={"10px"}
                            height={"100%"}
                            value={values.pickUp}
                            onChange={handleChange}
                            name="pickUp"
                          >
                            {locations.map((location) => (
                              <option key={location} value={location}>
                                {location}
                              </option>
                            ))}
                          </NativeSelectField>
                        </NativeSelectRoot>
                      </Group>
                      <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                        <ErrorMessage name="pickUp" />
                      </Text>
                    </Box>
                    <Box
                      width={{ base: "100%", xl: "233px" }}
                      gapY={"5px"}
                      height={"100%"}
                    >
                      <Group
                        attached
                        width={"100%"}
                        height={{ base: "46px", xl: "46px" }}
                        borderRadius={"10px"}
                        borderWidth={"1px"}
                        borderColor={"#CAD0DB"}
                      >
                        <InputAddon
                          _focus={{
                            borderWidth: "0px",
                            outlineWidth: "0px",
                          }}
                          backgroundColor={"#FFFFFF"}
                          variant={"subtle"}
                          height={"100%"}
                          borderRadius={"10px"}
                        >
                          <MapPin size={24} />
                        </InputAddon>
                        <NativeSelectRoot
                          variant={"subtle"}
                          width={{ base: "100%", xl: "205.65px" }}
                          display={"flex"}
                          height={"44px"}
                          alignItems={"center"}
                        >
                          <NativeSelectField
                            color={"#878484"}
                            backgroundColor={"#FFFFFF"}
                            _placeholder={{
                              color: "#878484",
                              fontWeight: "500",
                            }}
                            _focus={{
                              borderWidth: "0px",
                              outlineWidth: "0px",
                            }}
                            placeholder={"Drop-Off"}
                            borderWidth={"0px"}
                            borderColor={"#CAD0DB"}
                            borderRightRadius={"10px"}
                            height={"100%"}
                            value={values.dropOff}
                            onChange={handleChange}
                            name="dropOff"
                          >
                            {locations.map((location) => (
                              <option key={location} value={location}>
                                {location}
                              </option>
                            ))}
                          </NativeSelectField>
                        </NativeSelectRoot>
                      </Group>
                      <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                        <ErrorMessage name="dropOff" />
                      </Text>
                    </Box>
                    <Box
                      width={{ base: "100%", xl: "233px" }}
                      gapY={"5px"}
                      height={"100%"}
                    >
                      <Input
                        type={"date"}
                        height={{ base: "46px", xl: "46px" }}
                        backgroundColor={"#FFFFFF"}
                        _placeholder={{ color: "#878484", fontWeight: "500" }}
                        _focus={{
                          borderWidth: "0px",
                          outlineWidth: "0px",
                        }}
                        variant={"subtle"}
                        borderRadius={"10px"}
                        width={{ base: "full", xl: "130px" }}
                        color={"#878484"}
                        borderWidth={"1px"}
                        borderColor={"#CAD0DB"}
                        onChange={handleChange}
                        value={values.date}
                        name="date"
                        min={getTodayDate()}
                      />
                      <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                        <ErrorMessage name="date" />
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  width={"100%"}
                  gap={"5px"}
                  display={"flex"}
                  flexDirection={"column"}
                  height={{ base: "fit-content", xl: "68px" }}
                >
                  <Text
                    fontSize={{ base: "", xl: "14px" }}
                    fontWeight={"400"}
                    textAlign={"left"}
                    lineHeight={{ base: "", xl: "17.22px" }}
                    color={"#878484"}
                  >
                    PERSONAL
                  </Text>
                  <Box
                    display={"flex"}
                    flexDirection={{ base: "column", xl: "row" }}
                    width={"100%"}
                    gap={{ base: "5px", xl: "10px" }}
                    height={{ base: "fit-content", xl: "100%" }}
                    alignItems={"center"}
                  >
                    <Box
                      width={{ base: "100%", xl: "233px" }}
                      gapY={"5px"}
                      height={"100%"}
                    >
                      <Group
                        attached
                        width={{ base: "100%", xl: "205.65px" }}
                        height={{ base: "46px", xl: "46px" }}
                        borderRadius={"10px"}
                        borderWidth={"1px"}
                        borderColor={"#CAD0DB"}
                      >
                        <InputAddon
                          _focus={{
                            borderWidth: "0px",
                            outlineWidth: "0px",
                          }}
                          backgroundColor={"#FFFFFF"}
                          variant={"subtle"}
                          height={"100%"}
                          borderRadius={"10px"}
                        >
                          <User size={24} />
                        </InputAddon>
                        <Input
                          placeholder={"full name"}
                          borderRadius={"10px"}
                          height={"100%"}
                          variant={"subtle"}
                          color={"#878484"}
                          backgroundColor={"#FFFFFF"}
                          _placeholder={{
                            color: "#878484",
                            fontWeight: "500",
                          }}
                          _focus={{
                            borderWidth: "0px",
                            outlineWidth: "0px",
                          }}
                          name="fullName"
                          onChange={handleChange}
                          value={values.fullName}
                          type="text"
                        />
                      </Group>
                      <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                        <ErrorMessage name="fullName" />
                      </Text>
                    </Box>
                    <Box
                      width={{ base: "100%", xl: "233px" }}
                      gapY={"5px"}
                      height={"100%"}
                    >
                      <Group
                        attached
                        width={"100%"}
                        height={{ base: "46px", xl: "46px" }}
                        borderRadius={"10px"}
                        borderWidth={"1px"}
                        borderColor={"#CAD0DB"}
                      >
                        <InputAddon
                          _focus={{
                            borderWidth: "0px",
                            outlineWidth: "0px",
                          }}
                          backgroundColor={"#FFFFFF"}
                          variant={"subtle"}
                          borderRadius={"10px"}
                          height={"100%"}
                        >
                          <EnvelopeSimple size={24} />
                        </InputAddon>
                        <Input
                          placeholder={"email address"}
                          variant={"subtle"}
                          borderRadius={"10px"}
                          color={"#878484"}
                          backgroundColor={"#FFFFFF"}
                          _placeholder={{
                            color: "#878484",
                            fontWeight: "500",
                          }}
                          _focus={{
                            borderWidth: "0px",
                            outlineWidth: "0px",
                          }}
                          height={"100%"}
                          name="email"
                          type="email"
                          onChange={handleChange}
                          value={values.email}
                        />
                      </Group>
                      <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                        <ErrorMessage name="email" />
                      </Text>
                    </Box>
                    <Box
                      width={{ base: "100%", xl: "233px" }}
                      gapY={"5px"}
                      height={"100%"}
                    >
                      <Group
                        attached
                        width={"100%"}
                        height={{ base: "46px", xl: "46px" }}
                        borderRadius={"10px"}
                        borderWidth={"1px"}
                        borderColor={"#CAD0DB"}
                      >
                        <InputAddon
                          _focus={{
                            borderWidth: "0px",
                            outlineWidth: "0px",
                          }}
                          backgroundColor={"#FFFFFF"}
                          variant={"subtle"}
                          height={"100%"}
                          borderRadius={"10px"}
                        >
                          {" "}
                          <DeviceMobileCamera size={24} />
                        </InputAddon>
                        <Input
                          height={"100%"}
                          backgroundColor={"#FFFFFF"}
                          _placeholder={{
                            color: "#878484",
                            fontWeight: "500",
                          }}
                          _focus={{
                            borderWidth: "0px",
                            outlineWidth: "0px",
                          }}
                          variant={"subtle"}
                          name="phoneNumber"
                          type="tel"
                          placeholder={`mobile NO`}
                          borderRadius={"10px"}
                          value={values.phoneNumber}
                          onChange={handleChange}
                        />
                      </Group>
                      <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                        <ErrorMessage name="phoneNumber" />
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  width={"100%"}
                  gap={"5px"}
                  display={"flex"}
                  flexDirection={"column"}
                  height={{ base: "fit-content", xl: "68px" }}
                >
                  <Text
                    fontSize={{ base: "", xl: "14px" }}
                    fontWeight={"400"}
                    textAlign={"left"}
                    lineHeight={{ base: "", xl: "17.22px" }}
                    color={"#878484"}
                  >
                    MOVING DETAILS
                  </Text>
                  <Box
                    display={"flex"}
                    flexDirection={{ base: "column", xl: "row" }}
                    width={"100%"}
                    gap={{ base: "5px", xl: "10px" }}
                    height={{ base: "fit-content", xl: "100%" }}
                    flexWrap={{ xl: "wrap" }}
                  >
                    <Box
                      width={{ base: "100%", xl: "205.65px" }}
                      gapY={"5px"}
                      height={"100%"}
                    >
                      <NativeSelectRoot
                        variant={"subtle"}
                        width={{ base: "100%", xl: "205.65px" }}
                        display={"flex"}
                        height={"46px"}
                        alignItems={"center"}
                      >
                        <NativeSelectField
                          color={"#878484"}
                          backgroundColor={"#FFFFFF"}
                          _placeholder={{
                            color: "#878484",
                            fontWeight: "500",
                          }}
                          _focus={{
                            borderWidth: "1px",
                            outlineWidth: "0px",
                          }}
                          placeholder={`Service Type`}
                          borderWidth={"1px"}
                          borderColor={"#CAD0DB"}
                          borderRadius={"10px"}
                          height={"100%"}
                          value={values.serviceType}
                          onChange={handleChange}
                          name="serviceType"
                        >
                          <option value="full _ervice">Full Service </option>
                          <option value="packing">Packing only Service</option>
                          <option value="muscles">Just Muscles</option>
                        </NativeSelectField>
                      </NativeSelectRoot>
                      <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                        <ErrorMessage name="serviceType" />
                      </Text>
                    </Box>
                    <Box
                      width={{ base: "100%", xl: "205.65px" }}
                      gapY={"5px"}
                      height={"100%"}
                    >
                      <NativeSelectRoot
                        variant={"subtle"}
                        width={{ base: "100%", xl: "205.65px" }}
                        display={"flex"}
                        height={"46px"}
                        alignItems={"center"}
                      >
                        <NativeSelectField
                          color={"#878484"}
                          backgroundColor={"#FFFFFF"}
                          _placeholder={{
                            color: "#878484",
                            fontWeight: "500",
                          }}
                          _focus={{
                            borderWidth: "1px",
                            outlineWidth: "0px",
                          }}
                          placeholder={`Move Category`}
                          borderWidth={"1px"}
                          borderColor={"#CAD0DB"}
                          borderRadius={"10px"}
                          value={values.moveCategory}
                          onChange={handleChange}
                          defaultValue={"none"}
                          height={"100%"}
                          name="moveCategory"
                        >
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                        </NativeSelectField>
                      </NativeSelectRoot>
                      <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                        <ErrorMessage name="moveCategory" />
                      </Text>
                    </Box>
                    {values.moveCategory === "commercial" ? (
                      <Box
                        display={"flex"}
                        height={"46px"}
                        gap={"5px"}
                        width={{ base: "100%", xl: "205.65px" }}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                      >
                        <NativeSelectRoot
                          variant={"subtle"}
                          width={{ base: "", xl: "2/3" }}
                          height={"46px"}
                        >
                          <NativeSelectField
                            color={"#878484"}
                            backgroundColor={"#FFFFFF"}
                            _placeholder={{
                              color: "#878484",
                              fontWeight: "500",
                            }}
                            _focus={{
                              borderWidth: "1px",
                              outlineWidth: "0px",
                            }}
                            borderWidth={"1px"}
                            borderColor={"#CAD0DB"}
                            borderRadius={"10px"}
                            defaultValue={"none"}
                            value={values.commercialCategory}
                            onChange={handleChange}
                            height={"100%"}
                            name="commercialCategory"
                          >
                            <option value="no_of_rooms">
                              Number of Rooms/Offices
                            </option>
                            <option value="sq_ft">Square Footage</option>
                          </NativeSelectField>
                        </NativeSelectRoot>

                        <Text
                          display={"flex"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          height={"100%"}
                        >
                          :
                        </Text>
                        <Box
                          width={{ base: "100%", xl: "2/3" }}
                          gapY={"5px"}
                          height={"100%"}
                        >
                          <Input
                            placeholder="value"
                            value={values.customInput}
                            onChange={handleChange}
                            backgroundColor={"#FFFFFF"}
                            _placeholder={{
                              color: "#878484",
                              fontWeight: "500",
                            }}
                            _focus={{
                              borderWidth: "0px",
                              outlineWidth: "0px",
                            }}
                            borderRadius="10px"
                            width={{ base: "", xl: "100%" }}
                            height={"46px"}
                            name="customInput"
                            type="number"
                            min="0"
                          />
                          <Text
                            color="red.500"
                            fontSize="10px"
                            paddingX={"12px"}
                          >
                            <ErrorMessage name="customInput" />
                          </Text>
                        </Box>
                      </Box>
                    ) : values.moveCategory === "residential" ? (
                      <Box
                        width={{ base: "100%", xl: "205.65px" }}
                        gapY={"5px"}
                        height={"100%"}
                      >
                        <NativeSelectRoot
                          variant={"subtle"}
                          width={{ base: "100%", xl: "205.65px" }}
                          display={"flex"}
                          height={"46px"}
                          alignItems={"center"}
                        >
                          <NativeSelectField
                            color={"#878484"}
                            backgroundColor={"#FFFFFF"}
                            _placeholder={{
                              color: "#878484",
                              fontWeight: "500",
                            }}
                            _focus={{
                              borderWidth: "1px",
                              outlineWidth: "0px",
                            }}
                            placeholder={`Property Size`}
                            borderWidth={"1px"}
                            borderColor={"#CAD0DB"}
                            borderRadius={"10px"}
                            height={"100%"}
                            value={values.propertySize}
                            onChange={handleChange}
                            name="propertySize"
                          >
                            <option value="single_room">
                              Single Room, Studio
                            </option>
                            <option value="1_to_3_bedroom_apartment">
                              1, 2, 3+ Bedroom Apartment
                            </option>
                            <option value="2_to_4_bedroom_apartment">
                              2, 3, 4+ Bedroom Apartment
                            </option>
                          </NativeSelectField>
                        </NativeSelectRoot>
                        <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                          <ErrorMessage name="propertySize" />
                        </Text>
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Box
                  width={"100%"}
                  gap={"5px"}
                  display={"flex"}
                  flexDirection={"column"}
                  height={{ base: "fit-content", xl: "68px" }}
                >
                  <Text
                    fontSize={{ base: "", xl: "14px" }}
                    fontWeight={"400"}
                    textAlign={"left"}
                    lineHeight={{ base: "", xl: "17.22px" }}
                    color={"#878484"}
                  >
                    SPECIAL HANDLING REQUEST
                  </Text>
                  <Box
                    display={"flex"}
                    flexDirection={{ base: "column", xl: "row" }}
                    width={"100%"}
                    gap={"10px"}
                    height={{ base: "fit-content", xl: "46px" }}
                    alignItems={{ xl: "center" }}
                  >
                    <Box
                      width={{ base: "100%", xl: "205.65px" }}
                      gapY={"5px"}
                      height={"100%"}
                    >
                      <NativeSelectRoot
                        variant={"subtle"}
                        width={{ base: "100%", xl: "205.65px" }}
                        display={"flex"}
                        height={"46px"}
                        alignItems={"center"}
                      >
                        <NativeSelectField
                          color={"#878484"}
                          backgroundColor={"#FFFFFF"}
                          _placeholder={{
                            color: "#878484",
                            fontWeight: "500",
                          }}
                          _focus={{
                            borderWidth: "1px",
                            outlineWidth: "0px",
                          }}
                          borderWidth={"1px"}
                          borderColor={"#CAD0DB"}
                          borderRadius={"10px"}
                          defaultValue={"none"}
                          value={values.specialityMove}
                          onChange={handleChange}
                          height={"100%"}
                          name="specialityMove"
                          placeholder={"Special Move"}
                        >
                          <option value="piano">Piano Type</option>
                          <option value="gun_safe">Gun Safe Weight</option>
                          <option value="pool_table">Pool Table</option>
                          <option value="antique">Antique</option>
                          <option value="fine_art">Fine Art</option>
                          <option value="others">Others</option>
                        </NativeSelectField>
                      </NativeSelectRoot>
                      <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                        <ErrorMessage name="specialityMove" />
                      </Text>
                    </Box>
                    {values.specialityMove === "others" && (
                      <Box
                        width={{ base: "100%", xl: "205.65px" }}
                        gapY={"5px"}
                        height={"100%"}
                      >
                        <Input
                          placeholder="Please specify"
                          backgroundColor={"#FFFFFF"}
                          _placeholder={{
                            color: "#878484",
                            fontWeight: "500",
                          }}
                          _focus={{
                            borderWidth: "0px",
                            outlineWidth: "0px",
                          }}
                          borderRadius="10px"
                          width={{ base: "100%", xl: "205.65px" }}
                          height={"46px"}
                          value={values.otherSpeciality}
                          onChange={handleChange}
                          name="otherSpeciality"
                        />
                        <Text color="red.500" fontSize="10px" paddingX={"12px"}>
                          <ErrorMessage name="otherSpeciality" />
                        </Text>
                      </Box>
                    )}
                    <Button
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      width={{ base: "287px", xl: "104px" }}
                      height={{ base: "41px", xl: "46px" }}
                      backgroundColor={"#051937"}
                      color={"#FFFFFF"}
                      paddingX={"26px"}
                      paddingY={"13px"}
                      fontWeight={"500"}
                      fontSize={"14px"}
                      borderRadius="33px"
                      cursor={submitting ? "disabled" : "pointer"}
                      opacity={submitting ? 0.5 : 1}
                      type="submit"
                    >
                      {submitting ? "Submitting..." : "Submit"}
                    </Button>
                  </Box>
                </Box>
              </Form>
            </Box>
          )}
        </Formik>
        <Box
          borderRadius={"7px"}
          paddingX={"35px"}
          paddingY={"18px"}
          width={"100%"}
          gap={"15px"}
          backgroundColor={"#051937"}
          color={"#FFFFFF"}
          height={"88px"}
          display={{ base: "flex", xl: "none" }}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Text fontSize={"16px"} fontWeight={"600"}>
            info@bindlebundlemovers.com
          </Text>
          <Text fontSize={"16px"} fontWeight={"600"}>
            403-399-7904
          </Text>
        </Box>
      </Box>
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
              onClose();
            }}
            cursor={"pointer"}
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gapY={"10px"}
          width={{ base: "100%", xl: "339px" }}
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
            We have recived your request for a{" "}
            <Text fontWeight={"600"} as={"span"}>
              moving quote
            </Text>
            , our team will get back to you in a few hours
          </Text>
        </Box>
      </Box>
    </>
  );
};
