"use client"

import { useToast, Heading, Image, Text, Button, useDisclosure, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { StyledLink } from "../Link";
import * as S from "./header.style";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Link from "next/link";
import { useProduct } from "../Context/ProductContext";
import { IProductResponseProps } from "../Types/cadastroProduto";
import { useQueryClient, useMutation } from "react-query";
import { createStore } from "@/service/cadastro.service";



// Certifique-se de importar a função createStore corretamente

const initialStore: IProductResponseProps = { categoria: "", ano: 0, nome: "", marca: "", img: "", description: "", cor: "", cilindradas: 0, combustivel: "", preco: 0 };

const Header: React.FC = () => {
    const { isLogged, user, logout,token } = useContext(AuthContext);
    const { setFilteredProduct, products } = useProduct();
    const queryClient = useQueryClient();
    const { isOpen, onOpen, onClose } = useDisclosure();
    // renomenado para nao dar conflito

    const toast = useToast()
    const [newStore, setNewStore] = useState<IProductResponseProps>(initialStore);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        setNewStore((prevState) => ({
            ...prevState, [name]: name === "preco" || name === "ano" || name === "cilindradas" ? parseFloat(value) : name === "img" ? files?.[0] : value,
        }));
    };

    const mutation = useMutation(createStore, {
        onSuccess: () => {
            queryClient.invalidateQueries('products');
            onClose();
            setNewStore(initialStore);
            toast({
                title: "Sucesso",
                description: "Novo carro cadastrado com sucesso!",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        },
        onError: (error) => {
            console.error(error);
            toast({
                title: "Erro",
                description: "Falha ao cadastrar o carro.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    });

    const handleSubmit = () => {
        // Validação básica
        if (!newStore.nome || !newStore.categoria || !newStore.ano || !newStore.marca || !newStore.img || !newStore.description || !newStore.cor || !newStore.cilindradas || !newStore.combustivel || !newStore.preco) {

            return;
        }

        mutation.mutate(newStore);
    };

    const filterProducts = (category: string) => {
        setFilteredProduct(category === '' ? products : products.filter(products => products.categoria === category));
    };

    return (
        <>
            <S.Header>
                <S.HeaderTop>
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" w="150px" h="100px" />
                    </Link>
                    <Heading color="White" display={{ base: "none", lg: "block" }}>CarFácil</Heading>
                    {!isLogged ? (
                        <>
                            <StyledLink href="/login">Login</StyledLink>
                            <StyledLink href="/register">Criar Conta</StyledLink>
                        </>
                    ) : (
                        <>
                            <Text color="white" fontSize="18px" fontWeight="600" display={{ base: "none", md: "flex" }}>Bem Vindo, {user.name}</Text>
                            <Button type="button" onClick={logout} color="white" bg="transparent" _hover={{ color: "white" }}>
                                Sair
                            </Button>
                            <Button bg="transparent" color="white" _hover={{ bg: 'transparent', color: 'black' }} onClick={onOpen}>
                                Cadastre   Seu   Carro
                            </Button>
                        </>
                    )}
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" w="150px" h="100px" display={{ base: "none", md: "block" }} />
                    </Link>
                </S.HeaderTop>
                <S.HeaderBot>
                    <StyledLink href="#" onClick={() => filterProducts('')}>Todos</StyledLink>
                    <StyledLink href="#" onClick={() => filterProducts('hatch')}>Hatch</StyledLink>
                    <StyledLink href="#" onClick={() => filterProducts('seda')}>Sedã</StyledLink>
                    <StyledLink href="#" onClick={() => filterProducts('suv')}>SUV</StyledLink>
                    <StyledLink href="#" onClick={() => filterProducts('crossover')}>CrossOver</StyledLink>
                    <StyledLink href="#" onClick={() => filterProducts('minivan')}>MiniVan</StyledLink>
                    <StyledLink href="#" onClick={() => filterProducts('picape')}>Picape</StyledLink>
                    <StyledLink href="#" onClick={() => filterProducts('station wagon')}>Station Wagon</StyledLink>
                    <StyledLink href="#" onClick={() => filterProducts('cupe')}>Cupê</StyledLink>
                </S.HeaderBot>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Cadastrar Novo Carro</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody maxH="60vh" overflowY="auto">

                            <FormControl>
                                <FormLabel>Nome</FormLabel>
                                <Input name="nome" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Categoria</FormLabel>
                                <Input name="categoria" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Preço</FormLabel>
                                <Input name="preco" type="number" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Imagem</FormLabel>
                                <Input name="img" onChange={handleInputChange} type="file" />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Ano</FormLabel>
                                <Input name="ano" type="number" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Marca</FormLabel>
                                <Input name="marca" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Descrição</FormLabel>
                                <Input name="description" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Cor</FormLabel>
                                <Input name="cor" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Cilindradas</FormLabel>
                                <Input name="cilindradas" type="number" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Combustível</FormLabel>
                                <Input name="combustivel" onChange={handleInputChange} />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                                Cadastrar
                            </Button>
                            <Button variant="ghost" onClick={onClose}>
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </S.Header>
        </>
    );
};

export default Header;