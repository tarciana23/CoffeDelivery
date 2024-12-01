import styled from "styled-components";

export const ButtonRemoveStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    width: 5.688rem ;
    height: 2rem;

    border:none;
    border-radius: 0.375rem;
    padding: 0 0.5rem;

    background-color: ${({theme})=> theme.COLORS.BASE_BUTTON};
    color: ${({theme}) => theme.COLORS.BASE_TEXT};

    font-weight: 400;
    font-size: 0.75rem;
    text-transform: uppercase;

    &:hover{
        background-color: ${({theme})=> theme.COLORS.BASE_HOVER};
        color: ${({theme}) => theme.COLORS.BASE_SUBTITULO};
    }
`;