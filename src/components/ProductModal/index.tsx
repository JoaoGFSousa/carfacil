import { getProductById } from "@/service/product.service";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";


export interface IProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: number;
}

const ProductModal: React.FC<IProductModalProps> = ({ isOpen, onClose, id }) => {
    const product = getProductById(id);
    // const { addProduct } = useCard()
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={{ base: "lg", md: "lg", lg: "lg" }}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text>{product.description}</Text>
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}
export default ProductModal;