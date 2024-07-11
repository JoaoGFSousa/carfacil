// components/FloatingButton.tsx
import { Button, BoxProps, Box, useDisclosure } from "@chakra-ui/react";
import { BiSolidCartAlt } from "react-icons/bi";
import React from "react";
import Cart from "../Cart/cart";



const FloatingButton: React.FC = () => {
    const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure();
    return (
        <>
            <Cart isOpen={isOpenCart} onClose={onCloseCart} />
            <Button
                position="fixed"
                left="20px"
                bottom="20px"
                zIndex="1000"
                colorScheme="teal"
                variant="solid"
                onClick={onOpenCart}
                borderRadius="full"
                boxShadow="lg"
                p="4"
                display="flex"
                alignItems="center"
            >
                <BiSolidCartAlt size="24px" />
                <Box as="span" ml="2">
                    Carrinho
                </Box>
            </Button>
        </>
    );
};

export default FloatingButton;