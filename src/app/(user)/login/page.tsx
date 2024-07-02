"use client";
import { AuthContext } from "@/components/Context/AuthContext";
import { ISignIn } from "@/components/Types/userAcess.validation";
import { LoginValidation } from "@/validations/userAcess.validation";
import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link, useColorModePreference } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";


export default function Login() {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm<>({
        resolver: yupResolver(LoginValidation),
    });
    return (
        <FormControl
            onSubmit={handleSubmit(console.log('oi'))}
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
            p="20px">
            <h2>Faça Seu Login</h2>
            <FormLabel p="20px">E-mail</FormLabel>
            <Input placeholder="Digite Seu email" color="black" fontWeight="700" border="none" bg="white" {...register('email')} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            <FormLabel p="20px">Senha</FormLabel>
            <Input placeholder="Digite Sua Senha" color="black" fontWeight="700" border="none" bg="white" {...register('senha')} />
            <FormErrorMessage>{errors.senha?.message}</FormErrorMessage>
            <Button type="submit" >Entrar</Button>
            <Box>
                <Heading as="h2" size="md" color="black" >Não Tem Cadastro?</Heading><Link href="/" color="blue" _hover={{ color: "black" }} >Cadastre-se</Link>
            </Box>
        </FormControl >
    );
}
