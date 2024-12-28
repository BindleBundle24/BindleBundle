import Footer from "@/components/LandingPage/Footer/Footer";
import NavBar from "@/components/LandingPage/NavBar/NavBar";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useQueryState } from "nuqs";
import { Form } from "../LandingPage/Form/Form";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isFormOpen, setIsFormOpen] = useQueryState("formState", {});
  const closeForm = () => setIsFormOpen(null);
  const isFormOpenBoolean = isFormOpen === "open";

  return (
    <Box
      minWidth={"393px"}
      width={"100vw"}
      backgroundColor={"white"}
      color={"black"}
      marginX={"auto"}
      overflowX={"hidden"}
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Box
        display={"flex"}
        width={"full"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <NavBar />
        <Box
          display={{ base: isFormOpenBoolean ? "none" : "flex", xl: "flex" }}
          flexGrow={1}
          width={"full"}
          overflow={"hidden"}
          marginX={"auto"}
          opacity={{ base: "", xl: isFormOpenBoolean ? "0.2" : "1" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {children}
        </Box>
        <Box
          width={"100vw"}
          position={{ xl: "fixed" }}
          top={{ xl: "50%" }}
          left={{ xl: "50%" }}
          transform={{ xl: "translate(-50%, -50%)" }}
          zIndex={{ xl: isFormOpenBoolean ? "1" : "-1" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Form isOpen={isFormOpenBoolean} onClose={closeForm} />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};
