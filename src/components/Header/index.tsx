"use client"

import { Heading, Image, Text, Button } from "@chakra-ui/react";
import { StyledLink } from "../Link";
import * as S from "./header.style";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import Link from "next/link";
import { useProduct } from "../Context/ProductContext";


const Header: React.FC = () => {
    const { isLogged, user, logout } = useContext(AuthContext);
    const { setFilteredProduct, products } = useProduct();

    const filterProducts = (category: string) => {
        setFilteredProduct(category === '' ? products : products.filter(products => products.categoria === category))
    }

    return (
        < S.Header>
            <S.HeaderTop >
                <Link href="/">
                    <Image src="/logo.png" alt="logo"
                        w="150px"
                        h="100px"
                    />
                </Link>
                <Heading
                    color="White"
                    display={{ base: "none", md: "block" }}>CarFácil</Heading>
                {!isLogged ? (
                    <>
                        <StyledLink href="/login">Login</StyledLink>
                        <StyledLink href="/register">Criar Conta</StyledLink>
                    </>
                ) : (
                    <>
                        <Text color="white" fontSize="20px" >Bem Vindo, {user.name}</Text>
                        <Button type="button" onClick={logout} color="white" bg="transparent" _hover={{ color: "white" }} > Sair</Button>

                    </>
                )
                }
                <Link href="/">
                    <Image src="/logo.png" alt="logo"
                        w="150px"
                        h="100px"
                        display={{ base: "none", md: "block" }}
                    />
                </Link>
            </S.HeaderTop>
            <S.HeaderBot>
                <StyledLink href="#" onClick={() => filterProducts('')} >Todos</StyledLink>
                <StyledLink href="#" onClick={() => filterProducts('hatch')}>Hatch</StyledLink>
                <StyledLink href="#" onClick={() => filterProducts('Sedã')}>Sedã</StyledLink>
                <StyledLink href="#" onClick={() => filterProducts('SUV')}>SUV</StyledLink>
                <StyledLink href="#" onClick={() => filterProducts('CrossOver')}>CrossOver</StyledLink>
                <StyledLink href="#" onClick={() => filterProducts('MiniVan')}>MiniVan</StyledLink>
                <StyledLink href="#" onClick={() => filterProducts('Picape')}>Picape</StyledLink>
                <StyledLink href="#" onClick={() => filterProducts('Station Wagon')}>Station Wagon</StyledLink>
                <StyledLink href="#" onClick={() => filterProducts('Cupê')}>Cupê</StyledLink>
            </S.HeaderBot>

        </S.Header >



    );

};

export default Header;