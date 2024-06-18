import styled from "styled-components";

export const Header = styled.header`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const HeaderTop = styled.section`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.head.primary};
  justify-content: space-between;
  a {
    color: white;
    &:hover {
      color: black;
    }

`;
export const HeaderBot = styled.section`
  display: flex;
  align-itens: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.head.secondary};
  a {
    color: white;
    &:hover {
      color: black;
    }
  }
  @media (max-width: 450px) {
    overflow-x: scroll;
    gap: 30px;
  }
`;
