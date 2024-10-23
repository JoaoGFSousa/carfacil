import { Box, Text, Link } from "@chakra-ui/react";

export default function SuccessPayment() {
    return (
        <Box
            textAlign="center"
            mt={10}
            p={5}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="lg"
            maxW="sm"
            mx="auto"
        >
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Pagamento Processado com Sucesso
            </Text>
            <Link href="/" color="teal.500" fontSize="lg">
                Voltar a Tela Inicial
            </Link>
        </Box>
    );
}
