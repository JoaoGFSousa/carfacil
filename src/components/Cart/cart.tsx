
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useCard } from "../Context/CartContext";
import CartProduct from "../CartProduto";
import { useRouter } from "next/navigation";

export interface ICartProps {
    isOpen: boolean;
    onClose: () => void;
}

const Cart: React.FC<ICartProps> = ({ isOpen, onClose }) => {
    const { cart, totalCart } = useCard();
    const router = useRouter();
    const handleCheckout = () => {
        onClose();
        router.push('/checkout');
    };
    return (
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Carrinho</DrawerHeader>

                <DrawerBody display="flex" flexDir="column">
                    {/* agr vou fazer o map e do cart recebido pelo contexto  e fazer verifcao se sacola estiver vazia return carrinho vazio
           */}
                    <Stack>
                        {cart && cart.length > 0 ? (
                            cart.map((product) => (
                                <CartProduct key={product.id} {...product} />
                            ))
                        ) : (
                            <Heading as="h3" size="md">
                                Carrinho vazio
                            </Heading>
                        )}
                    </Stack>

                </DrawerBody>

                <DrawerFooter flexDir="column">
                    <Flex w="100%" justify="space-between">
                        <Text>Total:</Text>
                        <Text>{totalCart}</Text>
                    </Flex>
                    <Button
                        bgColor="green"
                        color="white"
                        w="100%"
                        mt="2rem"
                        _hover={{ bgColor: "green.400" }}
                        onClick={handleCheckout}>
                        Finalizar compra
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default Cart;