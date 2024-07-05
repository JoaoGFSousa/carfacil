import { Box, Flex, Text, Image, background, Button, Divider } from "@chakra-ui/react";
import img from "../../../public/argofiat.avif"
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";



const BannerCards = () => {
    const { product } = useContext(AuthContext)
    return (
        <>
            {
                product.map((product) => (


                    < Box as="li" key={product.id}
                        display="flex"
                        bg="white"
                        flexDirection="column"
                        w="250px"
                        borderRadius="8px"
                        boxShadow=" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"
                    >
                        <Box>
                            <Image src={product.img} alt="carro" w="250px" h="150px" objectFit="contain" borderTopRadius="8px" />
                            <Box gap="10px"
                                display="flex"
                                flexDir="column"
                                alignItems="center">
                                <Divider />
                                <Text>
                                    Marca:  {product.marca}
                                </Text>
                                <Divider />
                                <Text>
                                    Modelo:  {product.nome}
                                </Text>
                                <Divider />
                                <Text>
                                    Ano:  {product.ano}
                                </Text>
                            </Box>
                        </Box>
                        <Link href={`loja/${product.id}`}>
                            <ChakraLink
                                mt="10px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                w="100%"
                                h="40px"
                                bg="#6B7898"
                                color="white"
                                borderRadius="0 0 7px 7px"
                                _hover={{ bg: "teal.600", textDecoration: 'none' }}
                            >
                                Alugar
                            </ChakraLink>
                        </Link>
                    </Box >
                ))
            }
        </>
    )
}

export default BannerCards;