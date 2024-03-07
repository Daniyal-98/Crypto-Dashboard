import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="23.75rem">
        <Icon as={icon} boxSize="6" color="p.purple" />
        <Text as="h1" fontWeight="medium" textStyle="h1">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="34.375rem" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
