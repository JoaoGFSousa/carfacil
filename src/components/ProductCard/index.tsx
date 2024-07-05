import {
    Box,
    Button,
    Card,
    CardBody,
    Center,
    Divider,
    Heading,
    Image,
    Stack,
    StyleProps,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import ProductModal from "../ProductModal";
import { IproductModal, IproductsCart } from "../Types/context";



export const ProductCard: React.FC<IproductsCart> = ({
    id,
    categoria,
    ano,
    nome,
    marca,
    cor,
    cv,
    combustivel,
    img

}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <ProductModal isOpen={isOpen} onClose={onClose} id={id} />
            <Center>
                <Box p="20px">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Image src={img} alt="carro" w="300px" h="200px" objectFit="contain" borderRadius="8px" />
                        <Box w="100%" mt="20px"
                            display="flex"
                            flexDir="column"
                            alignItems="center">
                            <Divider />
                            <Text>Marca: {marca}</Text>
                            <Divider />
                            <Text>Modelo: {nome}</Text>
                            <Divider />
                            <Text>Ano: {ano}</Text>
                            <Divider />
                            <Text>Cor: {cor}</Text>
                            <Divider />
                            <Text>Cilindradas: {cv}</Text>
                            <Divider />
                            <Text>Combustível: {combustivel}</Text>
                            <Divider />
                        </Box>
                        <Button onClick={onOpen} mt="20px" colorScheme="teal">Adicionar Carrinho</Button>
                    </Box>
                </Box>
                <Box p="20px">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Image src={img} alt="carro" w="300px" h="200px" objectFit="contain" borderRadius="8px" />
                        <Box w="100%" mt="20px"
                            display="flex"
                            flexDir="column"
                            alignItems="center"
                        >
                            <Divider />
                            <Text>Marca: {marca}</Text>
                            <Divider />
                            <Text>Modelo: {nome}</Text>
                            <Divider />
                            <Text>Ano: {ano}</Text>
                            <Divider />
                            <Text>Cor: {cor}</Text>
                            <Divider />
                            <Text>Cilindradas: {cv}</Text>
                            <Divider />
                            <Text>Combustível: {combustivel}</Text>
                            <Divider />
                        </Box>
                        <Button mt="20px" colorScheme="teal">Adicionar Carrinho</Button>
                    </Box>
                </Box>
            </Center>

        </>
    );
};

export default ProductCard;
