import styled from "styled-components";

interface InputStyledProps {
  width?: string;
}

export const InputStyled = styled.input<InputStyledProps>`
 // width: ${({ width }) => (width ? width : "27.125rem")}; /* Largura dinâmica */
 width: ${({ width }) => width || "100%"}; 
 height: 2.625rem;
  box-sizing: border-box;

  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BASE_BUTTON};
  background-color: ${({ theme }) => theme.COLORS.BASE_INPUT};

  padding: 0.75rem;

  font-weight: 400;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.COLORS.BASE_TEXT};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.BASE_LABEL};
    font-size: 14px;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_DARK};
  }

  &:focus:not(:placeholder-shown) {
    border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_DARK};
  }
`;
