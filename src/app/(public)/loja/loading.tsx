"use client";

import { Center, Heading, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center h="100vh" w="100vw" bgColor="#586994">
      <Heading fontSize="2xl">
        <Text as="span" color="white">
          Carfácil
        </Text>
      </Heading>
      <Spinner size={{ base: "sm", md: "xl" }} color="black" />
    </Center>
  );
}
