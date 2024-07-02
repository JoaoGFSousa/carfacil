"use client"

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import img from "../../../public/logo.png"
import { StyledLink } from "../Link";
import * as S from "./header.style";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


const Header: React.FC = () => {
    const { handleCategoriaClick } = useContext(AuthContext);
    return (
        < S.Header>
            <S.HeaderTop>
                <Image src="/logo.png" alt="logo"
                    w="150px"
                    h="100px"
                />
                <Heading
                    color="White"
                    display={{ base: "none", md: "block" }}>CarFácil</Heading>
                <StyledLink href="/login">Login</StyledLink>
                <StyledLink href="/register">Criar Conta</StyledLink>
                <Image src="/logo.png" alt="logo"
                    w="150px"
                    h="100px"
                    display={{ base: "none", md: "block" }}
                />
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

        </S.Header>



    );

};

export default Header;