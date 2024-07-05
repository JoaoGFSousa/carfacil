"use client"

import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import img from "../../../public/logo.png"
import { StyledLink } from "../Link";
import * as S from "./header.style";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { boolean } from "yup";
import Link from "next/link";


const Header: React.FC = () => {
    const { handleCategoriaClick, islogged, user, logout } = useContext(AuthContext);


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
                {!islogged ? (
                    <>
                        <StyledLink href="/login">Login</StyledLink>
                        <StyledLink href="/register">Criar Conta</StyledLink>
                    </>
                ) : (
                    <>
                        <Text color="white" fontSize="20px" >Bem Vindo, {user.nome}</Text>
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
                <StyledLink href="#" onClick={() => handleCategoriaClick('')} >Todos</StyledLink>
                <StyledLink href="#" onClick={() => handleCategoriaClick('hatch')}>Hatch</StyledLink>
                <StyledLink href="#" onClick={() => handleCategoriaClick('Sedã')}>Sedã</StyledLink>
                <StyledLink href="#" onClick={() => handleCategoriaClick('SUV')}>SUV</StyledLink>
                <StyledLink href="#" onClick={() => handleCategoriaClick('CrossOver')}>CrossOver</StyledLink>
                <StyledLink href="#" onClick={() => handleCategoriaClick('MiniVan')}>MiniVan</StyledLink>
                <StyledLink href="#" onClick={() => handleCategoriaClick('Picape')}>Picape</StyledLink>
                <StyledLink href="#" onClick={() => handleCategoriaClick('Station Wagon')}>Station Wagon</StyledLink>
                <StyledLink href="#" onClick={() => handleCategoriaClick('Cupê')}>Cupê</StyledLink>
            </S.HeaderBot>

        </S.Header >



    );

};

export default Header;