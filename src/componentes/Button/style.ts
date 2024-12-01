import styled from "styled-components";

interface ButtonStyledProps {
    width?: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
    width: ${({ width }) => (width ? width : "auto")}; /* Define a largura personalizada */
    height: 2.875rem;

    padding: 0.75rem 0.5rem;
    border-radius: 0.375rem;
    border: none;

    background-color: ${({ theme }) => theme.COLORS.YELLOW};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
    }
`;
