'use client'
import { AuthContext } from "@/components/Context/AuthContext";
import { ISignUp } from "@/components/Types/userAcess.validation";
import { RegisterValidation } from "@/validations/userAcess.validation";
import { Heading, FormControl, FormLabel, Input, FormErrorMessage, Button, Box, Link } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";




export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(RegisterValidation),
    });
    const { signInUp } = useContext(AuthContext);
    const handleSignInUp = (values: ISignUp) => {
        // Desconstruindo o valores de sign up
        signInUp({ name: values.nome, email: values.email, password: values.senha })
    }
    return (
        <Box
            as="form"
            onSubmit={handleSubmit(handleSignInUp)}
            display="flex"
            flexDirection="column"
            bg="rgba(175,180,193,1)"
            pos="relative"
            w="lg"
            h="lg"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
            borderRadius="10px"
            p="20px"
        >
            <Heading as="h2" size="lg" mb="20px">Faça Seu Cadastro</Heading>

            <FormControl isInvalid={!!errors.nome} mb="20px">
                <FormLabel>Nome</FormLabel>
                <Input
                    placeholder="Digite seu nome"
                    color="black"
                    fontWeight="700"
                    border="none"
                    bg="white"
                    {...register("nome")}
                />
                <FormErrorMessage>{errors.nome?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mb="20px" isInvalid={!!errors.email} >
                <FormLabel>E-mail</FormLabel>
                <Input
                    placeholder="Digite Seu email"
                    color="black"
                    fontWeight="700"
                    border="none"
                    bg="white"
                    {...register("email")}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl mb="20px" isInvalid={!!errors.senha} >
                <FormLabel>Senha</FormLabel>
                <Input
                    type="password"
                    placeholder="Digite Sua Senha"
                    color="black"
                    fontWeight="700"
                    border="none"
                    bg="white"
                    {...register('senha')}
                />
                <FormErrorMessage>{errors.senha?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.confirmacaosenha} >
                <FormLabel>Confirme Sua Senha</FormLabel>
                <Input
                    type="password"
                    placeholder="Digite Sua Senha"
                    color="black"
                    fontWeight="700"
                    border="none"
                    bg="white"
                    {...register('confirmacaosenha')}
                />
                <FormErrorMessage>{errors.confirmacaosenha?.message}</FormErrorMessage>
            </FormControl>
            <Button type="submit" mb="20px" bg="transparent" _hover={{ bg: "white" }} mt="5px" >Salvar</Button>

            <Box textAlign="center">
                <Link href="/login"
                    color="black"
                    h="auto"
                    w="auto"
                    bg="transparent"
                    _hover={{ bg: "black", color: "white" }}
                    p="10px"

                >
                    Faça Seu Login
                </Link>
            </Box>
        </Box>
    )
}