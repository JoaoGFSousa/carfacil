'use client'
import { Heading, FormControl, FormLabel, Input, FormErrorMessage, Button, Box } from "@chakra-ui/react";
import Link from "next/link";




export default function Register() {
    return (
        <Box
            as="form"
            display="flex"
            flexDirection="column"
            bg="rgba(175,180,193,1)"
            pos="relative"
            w="md"
            h="md"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            borderRadius="10px"
            p="20px"
        >
            <Heading as="h2" size="lg" mb="20px">Faça Seu Cadastro</Heading>

            <FormControl mb="20px">
                <FormLabel>E-mail</FormLabel>
                <Input
                    placeholder="Digite Seu email"
                    color="black"
                    fontWeight="700"
                    border="none"
                    bg="white"
                />
                <FormLabel> Confirme seu  E-mail</FormLabel>
                <Input
                    placeholder="Digite Seu email"
                    color="black"
                    fontWeight="700"
                    border="none"
                    bg="white"
                />

                <FormErrorMessage></FormErrorMessage>
            </FormControl>

            <FormControl mb="20px">
                <FormLabel>Senha</FormLabel>
                <Input
                    type="password"
                    placeholder="Digite Sua Senha"
                    color="black"
                    fontWeight="700"
                    border="none"
                    bg="white"
                />
                <FormErrorMessage></FormErrorMessage>
            </FormControl>

            <Button type="submit" mb="20px" bg="transparent" _hover={{ bg: "white" }} >Entrar</Button>

            <Box textAlign="center">
                <Heading as="h2" size="md" color="black" mb="10px">Não Tem Cadastro?</Heading>
                <Link href="/" color="blue" >Cadastre-se</Link>
            </Box>
        </Box>
    )
}