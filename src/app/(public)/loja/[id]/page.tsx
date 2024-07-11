'use client'


import FloatingButton from "@/components/CartButton"
import { useCard } from "@/components/Context/CartContext"
import { getProductById } from "@/service/product.service"
import { Box, Button, Flex, Image, Text, useBreakpointValue, Divider } from "@chakra-ui/react"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useQuery } from "react-query"





export default function Lojas() {
    const { id } = useParams()
    const { data: car } = useQuery(["produto", id], () => getProductById(Number(id)))
    const { addProduct } = useCard();
    const [amount, setAmount] = useState(1);
    const imageSize = useBreakpointValue({ base: "100%", md: "50%" });
    if (!car) {
        return
    }
    return (
        <><Box p="0 10%">

            < Flex key={car.id}
                direction={{ base: "column", md: "row" }}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                m={4}
                h="360px"
                boxShadow="md"
            >

                <Image
                    src={car.img}
                    alt={car.nome}
                    boxSize={imageSize}
                    objectFit="cover"
                    h="100%"
                />
                <Box p={6} textAlign={{ base: "center", md: "left" }}>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="wide"
                    >
                        {car.marca} {car.nome}
                    </Text>
                    <Divider />
                    <Text mt={2} color="gray.500">
                        {car.ano} - {car.cor}
                    </Text>
                    <Text mt={2} fontSize="md" h={{ base: "10px", md: "135px" }}>
                        {car.description}
                    </Text>
                    <Text mt={2} fontSize="lg" color="teal.500" mb="20px">
                        R$ {car.preco}/dia
                    </Text>
                    <Button
                        bgColor="green"
                        color="white" onClick={() => addProduct({ ...car, amount: amount })}>
                        Adicionar ao carrinho
                    </Button>
                </Box>
            </Flex >
        </Box>
            <FloatingButton />
        </>
    )
} 