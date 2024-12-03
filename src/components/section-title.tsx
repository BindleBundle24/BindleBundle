// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { ChakraProps, Text } from "@chakra-ui/react";

interface SectionTitleProps extends ChakraProps {
  text: string;
  center?: boolean;
  color?: string;
  transform?: string;
}

export const SectionTitle = ({
  text,
  center,
  transform,
  color,
}: SectionTitleProps) => {
  return (
    <Text
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      textTransform={transform || "none"}
      _after={{
        position: "absolute",
        content: "''",
        bottom: { lg: -1, base: 0, md: 0 },
        left: center ? { lg: 0, base: 0, md: -1 } : 0,
        width: { xl: "100%", base: "100%", md: "100%" },
      }}
      color={color}
      position="relative"
      fontWeight="500"
      fontSize={{ lg: "56px", md: "36px", base: "16px" }}
      lineHeight="43px"
      width={{ xl: "fit-content", base: "fit-content", md: "fit-content" }}
    >
      {text}
    </Text>
  );
};
