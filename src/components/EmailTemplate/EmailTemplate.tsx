import { ChakraProvider, defaultSystem, Box, Text } from "@chakra-ui/react";

export interface FormStateType {
  fullName: string;
  email: string;
  phoneNumber: string;
  pickUp: string;
  dropOff: string;
  moveCategory: string;
  commercialCategory?: string;
  specialityMove: string;
  customInput?: string;
  serviceType: string;
  propertySize?: string;
  otherSpeciality?: string;
  date: string;
}

export interface ContactUsProps {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const EmailFormTemplate: React.FC<FormStateType> = ({
  fullName,
  email,
  phoneNumber,
  pickUp,
  dropOff,
  date,
  moveCategory,
  commercialCategory,
  specialityMove,
  customInput,
  serviceType,
  propertySize,
  otherSpeciality,
}) => (
  <ChakraProvider value={defaultSystem}>
    <Box padding="4" borderWidth="1px" borderRadius="md" boxShadow="md">
      <Text fontSize="46px" fontWeight="extrabold" marginBottom="4">
        New Moving Details Submission
      </Text>
      <Text>
        <strong>Full Name:</strong> {fullName || "N/A"}
      </Text>
      <Text>
        <strong>Email:</strong> {email || "N/A"}
      </Text>
      <Text>
        <strong>Phone Number:</strong> {phoneNumber || "N/A"}
      </Text>
      <Text>
        <strong>Pick-Up Location:</strong> {pickUp || "N/A"}
      </Text>
      <Text>
        <strong>Drop-Off Location:</strong> {dropOff || "N/A"}
      </Text>
      <Text>
        <strong>Date:</strong> {date || "N/A"}
      </Text>
      <Text>
        <strong>Service Type:</strong> {serviceType || "N/A"}
      </Text>
      <Text>
        <strong>Move Category:</strong> {moveCategory || "N/A"}
      </Text>
      {moveCategory === "commercial" && (
        <>
          <Text>
            <strong>Commercial Category:</strong> {commercialCategory || "N/A"}
          </Text>
          <Text>
            <strong>Custom Input:</strong> {customInput || "N/A"}
          </Text>
        </>
      )}
      {moveCategory === "residential" && (
        <Text>
          <strong>Property Size:</strong> {propertySize || "N/A"}
        </Text>
      )}
      <Text>
        <strong>Special Move:</strong> {specialityMove || "N/A"}
      </Text>
      {specialityMove === "other" && (
        <Text>
          <strong>Other Speciality:</strong> {otherSpeciality || "N/A"}
        </Text>
      )}
    </Box>
  </ChakraProvider>
);

export const EmailContactUsTemplate: React.FC<ContactUsProps> = ({
  fullName,
  email,
  phoneNumber,
  message,
}) => (
  <ChakraProvider value={defaultSystem}>
    <Box padding="4" borderWidth="1px" borderRadius="md" boxShadow="md">
      <Text fontSize="46px" fontWeight="extrabold" marginBottom="4">
        A new message from Bindle Bundle Movers
      </Text>
      <Text>
        <strong>Full Name:</strong> {fullName || "N/A"}
      </Text>
      <Text>
        <strong>Email:</strong> {email || "N/A"}
      </Text>
      <Text>
        <strong>Phone Number:</strong> {phoneNumber || "N/A"}
      </Text>
      <Text>
        <strong>Message:</strong> {message || "N/A"}
      </Text>
    </Box>
  </ChakraProvider>
);
