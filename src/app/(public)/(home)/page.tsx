"use client"
import BannerCards from "@/components/BannerCards";
import { AuthContext } from "@/components/Context/AuthContext";
import { Box, Button, Flex, Heading, List, Stack } from "@chakra-ui/react";
import { useContext } from "react";

export default function Home() {
    const { product } = useContext(AuthContext);
    return (
        <>
            <Box as="ul"
                display="flex"
                gap="30px"
                padding="20px"
                flexWrap="wrap"
                justifyContent="space-evenly">
                <BannerCards />
            </Box>
        </>
    );
};
