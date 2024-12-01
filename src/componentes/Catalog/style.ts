import styled from "styled-components";

export const CatalogContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BASE_CARD};

    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem; 
    border: 2px solid ${({ theme }) => theme.COLORS.BASE_CARD}; 
    border-top-left-radius: 0.375rem; 
    border-bottom-right-radius: 0.375rem;

    .coffes_button{
        display: flex;
        gap: 16px;
    }

    .coffeeType {
        background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT};
        color: ${({ theme }) => theme.COLORS.YELLOW_DARK};
        font-size: 0.625rem;
        padding: 0.25rem 0.5rem;
        border-radius: 6.25rem;
    }

    .coffeeDescription > p:first-of-type {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
    }

    .coffeeDescription > p:nth-of-type(2) {
        font-weight: 400;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.COLORS.BASE_LABEL};
    }

    .coffeePrice {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 13rem;
    }

    .coffeePrice > p:first-of-type {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.COLORS.BASE_TEXT};

        span {
            font-size: 1.5rem;
            font-weight: 800;
        }
    }

    .coffeePrice > p:nth-of-type(2) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
    }
`;
