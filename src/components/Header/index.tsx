"use client"

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import img from "../../../public/logo.png"
import { StyledLink } from "../Link";
import * as S from "./header.style";

const Header: React.FC = () => {
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
                <StyledLink href="/hatch">Hatch</StyledLink>
                <StyledLink href="/seda">Sedã</StyledLink>
                <StyledLink href="/suv">SUV</StyledLink>
                <StyledLink href="/crossover">CrossOver</StyledLink>
                <StyledLink href="/minivan">MiniVan</StyledLink>
                <StyledLink href="/picape">Picape</StyledLink>
                <StyledLink href="statationwagon">Station Wagon</StyledLink>
                <StyledLink href="cupe">Cupê</StyledLink>
            </S.HeaderBot>

        </S.Header>



    );

};

export default Header;