"use client";
import { AuthContext } from "@/components/Context/AuthContext";
import { ISignIn } from "@/components/Types/userAcess.validation";
import { LoginValidation } from "@/validations/userAcess.validation";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Link } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm<ISignIn>({
        resolver: yupResolver(LoginValidation),
    });

    const handleSignIn = (values: ISignIn) => {
        // Desconstruindo o valores de sign in
        signIn({ email: values.email, password: values.senha })
    }
    return (

        <Box
            as="form"
            onSubmit={handleSubmit(handleSignIn)}
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
            <Heading as="h2" size="lg" mb="20px">Faça Seu Login</Heading>

            <FormControl isInvalid={!!errors.email} mb="20px">
                <FormLabel>E-mail</FormLabel>
                <Input
                    placeholder="Digite Seu email"
                    color="black"
                    fontWeight="700"
                    border="none"
                    bg="white"
                    {...register('email')}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.senha} mb="20px">
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

            <Button type="submit" mb="20px" bg="transparent" _hover={{ bg: "white" }} >Entrar</Button>

            <Box textAlign="center">
                <Heading as="h2" size="md" color="black" mb="10px">Não Tem Cadastro?</Heading>
                <Link href="/register" color="blue" _hover={{ color: "black" }}>Cadastre-se</Link>
            </Box>
        </Box>
    );
}