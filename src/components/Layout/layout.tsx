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
      position={"relative"}
    >
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <NavBar />
        <Box
          display={{ base: isFormOpenBoolean ? "none" : "flex", md: "flex" }}
          flexGrow={1}
          width={"full"}
          overflow={"hidden"}
          marginX={"auto"}
          opacity={{ base: "", md: isFormOpenBoolean ? "0.2" : "1" }}
        >
          {children}
        </Box>
        <Box
          width={"100vw"}
          height={"100vh"}
          position={{ md: "fixed" }}
          top={{ md: "50%" }}
          left={{ md: "50%" }}
          transform={{ md: "translate(-50%, -50%)" }}
          zIndex={{ md: isFormOpenBoolean ? "1" : "-1" }}
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
