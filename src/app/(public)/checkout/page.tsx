"use client"


import { useCard } from "@/components/Context/CartContext";
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, useToast, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
    const { cart, totalCart, clearCart } = useCard();
    const router = useRouter()
    const [form, setForm] = useState({ name: '', email: '', address: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const toast = useToast();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            clearCart();
            setIsLoading(false);
            setIsSuccess(true);
            toast({
                title: "Compra realizada com sucesso!",
                description: "Obrigado por comprar conosco.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }, 2000); // Simula uma requisição de 2 segundos
    };

    return (
        <Box p={8} h={isSuccess ? '59.5vh' : '85vh'}>
            <Heading as="h2" size="xl" mb={8}>Checkout</Heading>
            {isSuccess ? (
                <><Text color="#586994" fontWeight="bold" mt={4}>
                    Compra finalizada com sucesso!
                </Text>
                    <Button onClick={() => router.push("/")} mt="15px" bg="#586994">Continuar comprando.</Button>
                </>
            ) : (
                <Stack spacing={4}>
                    <FormControl id="name">
                        <FormLabel>Nome</FormLabel>
                        <Input type="text" name="name" placeholder="Digite o seu nome" value={form.name} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="email" placeholder="Digite o seu Email" value={form.email} onChange={handleChange} />
                    </FormControl>
                    <FormControl id="address">
                        <FormLabel>Endereço</FormLabel>
                        <Input type="text" name="address" placeholder="Digite o seu Endereço " value={form.address} onChange={handleChange} />
                    </FormControl>

                    <Text>Total: {totalCart}</Text>
                    <Button
                        colorScheme="green"
                        onClick={handleSubmit}
                        isLoading={isLoading}
                        disabled={isSuccess}
                    >
                        Finalizar Compra
                    </Button>
                </Stack>
            )}
        </Box>
    );
}