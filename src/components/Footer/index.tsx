import { Box, Flex, Heading, Text, Center, Divider } from "@chakra-ui/react"

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <Box bg="#586994" p="0 0 10px 0" display="flex"
                alignItems={{ base: "center", lg: "inital" }}
                flexDir="column"
            >
                <Center p="0 0 10px 0" color="white">
                    <Heading>Carfacil</Heading>
                </Center>
                <Flex justifyContent="space-between" p="0 10%"
                    flexDir={{ base: "column", lg: "row" }}
                    gap={{ lg: "15px" }}

                >
                    <Flex flexDir="column" >
                        <Box display="flex" alignItems="center" gap="10px">
                            <FaWhatsapp color="white" /><Text color="white">(62) 99324-9642</Text>
                        </Box>
                        <Box display="flex" alignItems="center" gap="10px">
                            <FaInstagramSquare color="white" /><Text color="white">@academiadesenvolvedor</Text>
                        </Box>
                    </Flex>
                    <Divider orientation='vertical' />
                    <Flex flexDir="column" >
                        <Box display="flex" alignItems="center" gap="10px">
                            <IoIosMail color="white" /><Text color="white">joaogsousa2@outlook.com.br</Text>
                        </Box >
                        <Box display="flex" alignItems="center" gap="10px" w={{ base: "none", lg: "320px" }}>
                            <FaHome color="white" /><Text color="white">Rua SW5 Quadra 20 Lote 40 Vila Norte </Text>

                        </Box>
                    </Flex >
                </Flex>
            </Box >
        </>
    )
}

export default Footer;