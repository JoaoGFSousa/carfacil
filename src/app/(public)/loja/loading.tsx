"use client";

import { Center, Heading, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center h="100vh" w="100vw" bgColor="orange.300">
      <Heading fontSize="2xl">
        Eco
        <Text as="span" color="orange.100">
          Market
        </Text>
      </Heading>
      <Spinner size={{ base: "sm", md: "xl" }} color="orange.100" />
    </Center>
  );
}
