

import {
    Card,
    CardBody,
    IconButton,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import { ICartProduct } from "../Types/context";
import { useCard } from "../Context/CartContext";
import { BiTrash } from "react-icons/bi";

const CartProduct: React.FC<ICartProduct> = ({
    img,
    amount,
    nome,
    preco,
    id,
}) => {
    const { removeProduct } = useCard();
    return (
        <Card direction="row" justify="space-between" align="center" p="0 1rem">
            <Image
                src={img}
                alt={nome}
                width="50px"
                height="50px"
                objectFit="contain"
            />
            <Stack>
                <CardBody>
                    <Text fontWeight="bold">{nome}</Text>
                    <Text>Valor: R$ {preco}</Text>
                    <Text>Dias: {amount}</Text>
                </CardBody>
            </Stack>
            <IconButton
                bgColor="transparent"
                aria-label="Remover"
                icon={<BiTrash />}
                onClick={() => removeProduct(id)}
            />
        </Card>
    );
};

export default CartProduct;