
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
    useToast,
} from "@chakra-ui/react";
import { useCard } from "../Context/CartContext";
import CartProduct from "../CartProduto";
import { useRouter } from "next/navigation";
import { order, checkout } from "@/service/checkout.service";
import { useState } from "react";

export interface ICartProps {
    isOpen: boolean;
    onClose: () => void;
}


const Cart: React.FC<ICartProps> = ({ isOpen, onClose }) => {
    const router = useRouter();
    const { cart, totalCart, clearCart } = useCard();
    const [form, setForm] = useState({ name: '', email: '', address: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const toast = useToast();
    const handleSubmit = async () => {
        setIsLoading(true);
        
        try{
          const orderId = await order(cart);
          const url = await checkout (orderId);
          clearCart();
          setIsSuccess(true);
    
          toast({
              title: "Compra realizada com sucesso!",
              description: "Obrigado por comprar conosco.",
              status: "success",
              duration: 5000,
              isClosable: true,
          });
          window.open(url, "_blank");
        }catch(e:any){
          toast({
              title: "Oops! algo deu errado",
              description: `Mensagem do erro ${e.message}`,
              status: "error",
              duration: 5000,
              isClosable: true,
          });
          console.error(e);
        }finally{
          setIsLoading(false);
        }
      };
     const handleCheckout = () => {
    handleSubmit();
    onClose();

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