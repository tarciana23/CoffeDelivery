import styled from "styled-components";

export const InputNumberStyled = styled.div`
    width: 2.375rem;
    height: 2.375rem;

    padding: 0.5rem ;

    border-radius: 0.375rem;
    gap: 0.25rem;

    background-color: ${({theme}) => theme.COLORS.BASE_BUTTON};
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        width: 1rem;
        background-color: ${({theme}) => theme.COLORS.BASE_BUTTON};

    }

    .qtd{
        font-size: 1rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.BASE_TITLE};
    }

    .buttons{
        color: ${({theme}) => theme.COLORS.PURPLE_DARK};
        font-weight: 700;
        cursor: pointer;
    }
`;