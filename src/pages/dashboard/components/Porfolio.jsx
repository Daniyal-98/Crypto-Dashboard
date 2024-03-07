import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const Porfolio = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="#535D66">
            <Text>Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h4" fontWeight="medium">
            $112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="#535D66">
            <Text>Wallet Balance</Text>
          </HStack>
          <HStack
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h4" fontWeight="medium">
                22.39401000
              </Text>
              <Tag colorScheme="gray" textStyle="h5">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h4" fontWeight="medium">
                1,300.00
              </Text>{" "}
              <Tag colorScheme="gray" textStyle="h5">PKR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button size="sm" leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button size="sm" leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default Porfolio;
