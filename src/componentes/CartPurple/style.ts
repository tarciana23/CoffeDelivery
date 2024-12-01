import styled from "styled-components";

export const CartStyled = styled.div`
    width: 2.375rem;
    height: 2.375rem;

    padding: 0.5rem ;

    border-radius: 0.375rem;

    display: flex;
    justify-content: center;
    align-items: center; /* Centraliza a imagem dentro do contêiner */

    background-color: ${({theme})=> theme.COLORS.PURPLE_DARK};

    &:hover{
        background-color: ${({theme})=> theme.COLORS.PURPLE};
    }

    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;