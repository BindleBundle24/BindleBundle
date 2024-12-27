import * as React from "react";
import { Box } from "@chakra-ui/react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Box>
    <h1>Welcome, {firstName}!</h1>
  </Box>
);
