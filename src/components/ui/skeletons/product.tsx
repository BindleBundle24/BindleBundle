import { Box, HStack, Skeleton } from "@chakra-ui/react";

export const ProductSkeleton = () => {
  return (
    <Box height="400px" width="400px" borderRadius="8px" background="#fff">
      <Skeleton
        height="252px"
        width="100%"
        borderTopLeftRadius="8px"
        borderTopRightRadius="8px"
      />

      <Box px=".8em" py="1em">
        <Skeleton height=".6em" width="80%" borderRadius="8px" my=".4em" />
        <Skeleton height=".6em" width="65%" borderRadius="8px" my=".4em" />
      </Box>

      <HStack justifyContent="space-between" my=".5em" px=".8em">
        <Skeleton height="46px" width="122px" borderRadius="28px" />

        <Box
          display="flex"
          justifyContent="flex-end"
          flexFlow="column"
          alignItems="flex-end"
        >
          <Skeleton height=".6em" width="80px" borderRadius="8px" my=".4em" />

          <Skeleton height="1.4em" width="120px" borderRadius="8px" my=".4em" />
        </Box>
      </HStack>
    </Box>
  );
};
