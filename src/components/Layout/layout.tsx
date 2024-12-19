import Footer from "@/components/LandingPage/Footer/Footer";
import NavBar from "@/components/LandingPage/NavBar/NavBar";
import { clashGrotesk } from "@/data/font";
import { Box } from "@chakra-ui/react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
      flexDirection={"column"}
      justifyContent={"center"}
      className={`${clashGrotesk.variable}`}
    >
      <NavBar />
      <Box
        display={"flex"}
        flexGrow={1}
        width={"full"}
        overflow={"hidden"}
        maxWidth={"1440px"}
        marginX={"auto"}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
