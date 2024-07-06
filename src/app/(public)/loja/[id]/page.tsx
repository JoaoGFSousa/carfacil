'use client'

import { Flex } from "@chakra-ui/react"


export interface ILojaProductProps {
    params: { id: string }
}

export default function Lojas({ params: { id } }: ILojaProductProps) {

    return (
        <>
            <Flex>Teste oi</Flex>
        </>
    )
} 