import { Box, Flex, Text, Image, background, Button, Divider } from "@chakra-ui/react";
import img from "../../../public/argofiat.avif"
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

interface IBannerCardsProps {
    ano: number;
    nome: string;
    marca: string;
    cor: string;
    cv: string;
    combustivel: string;
    img: string;
}

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
                                <Divider />
                                <Text>
                                    Cor:  {product.cor}
                                </Text>
                                <Divider />
                                <Text>
                                    Cilindradas:  {product.cv}
                                </Text>
                                <Divider />
                                <Text>
                                    Combustível:  {product.combustivel}
                                </Text>
                                <Divider />
                            </Box>
                        </Box>
                        <Button type="submit" borderRadius="0 0 7px 7px" bg="gray" _hover={{ bg: "green" }}>Alugar</Button>
                    </Box >
                ))
            }
        </>
    )
}

export default BannerCards;