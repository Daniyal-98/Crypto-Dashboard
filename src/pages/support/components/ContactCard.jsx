import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card
    fontWeight="medium"
    fontSize="sm"
    p="6"
    borderRadius="1rem"
    flexGrow={1}
  >
    <Stack spacing={6}>
      <Text>You will receive response within 24 hours of time submit.</Text>

      <HStack
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Enter Your Name" />
        </FormControl>
        <FormControl>
          <FormLabel>surname</FormLabel>
          <Input placeholder="Enter Your Surname" />
        </FormControl>
      </HStack>
      <FormControl>
        <FormLabel>Email Address</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Enter Your Message" />
      </FormControl>
      <Checkbox defaultChecked>
        <Text fontSize="xs">
          I agree with{" "}
          <Box as="span" color="p.purple">
            Terms & Conditions.
          </Box>
        </Text>
      </Checkbox>
      <Stack>
        <Button fontSize="sm">Send a Message</Button>
        <Button colorScheme="gray" fontSize="sm">
          Book a Meeting
        </Button>
      </Stack>
    </Stack>
  </Card>
  )
};

export default ContactCard;
