import styled from "styled-components";

interface CatalogCartContainerProps {
  width?: string;
}

export const CatalogCartContainer = styled.div<CatalogCartContainerProps>`
  width: ${({ width }) => (width ? width : "100%")}; /* Largura dinâmica */
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 8px 4px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BASE_CARD};
  color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};

  border: 1px solid ${({theme}) => theme.COLORS.BASE_BUTTON};

  .catalogCartImage {
    width: 64px;
    height: 64px;
  }

  .precoCartCatalog {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const CatalogCartDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;

  .catalogCartActions {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: 768px) {
    display: none;
  }

`;

