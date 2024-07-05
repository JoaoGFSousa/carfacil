'use client'
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { Box, Divider, Button, Image, Text, Center, useDisclosure, Flex } from "@chakra-ui/react";
import { Resolver } from "dns";
import { ObjectEncodingOptions } from "fs";
import { use } from "react";

const product = {
    id: 2,
    categoria: "hatch",
    ano: 2020,
    nome: "Uno way",
    marca: "Fiat",
    cor: "Vermelho",
    cv: 1.0,
    combustivel: "Flex",
    img: "https://placehold.co/397x157"
}
export interface ILojaProductProps {
    params: { id: string }
}

export default function Lojas({ params: { id } }: ILojaProductProps) {

    return (
        <>
            <ProductCard {...product} />
            <Flex>Teste oi</Flex>
        </>
    )
} 