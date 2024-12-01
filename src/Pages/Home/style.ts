import styled from "styled-components";

export const HeroSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 0;

    .descriptionHero {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h2 {
        font-weight: 800;
        font-size: 48px;
        line-height: 62.4px;
        color: ${({ theme }) => theme.COLORS.BASE_TITLE};
    }

    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
    }

    img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        .descriptionHero {
            text-align: center;
        }
    }
`;

export const Features = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    li {
        list-style-type: none;
        font-weight: 400;
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        ul {
            align-items: flex-start;
        }
    }
`;

export const ProductsSection = styled.section`
    h3 {
        font-weight: 800;
        font-size: 32px;
        margin-bottom: 16px;
    }

    .catalogExibiction {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: space-between;
    }

    .catalogExibiction > * {
        flex: 1 1 calc(25% - 16px);
        box-sizing: border-box;
    }

    @media (max-width: 1024px) {
        .catalogExibiction > * {
            flex: 1 1 calc(33.33% - 16px); /* 3 itens por linha em telas menores */
        }
    }

    @media (max-width: 768px) {
        .catalogExibiction > * {
            flex: 1 1 calc(50% - 16px); /* 2 itens por linha em telas ainda menores */
        }
    }

    @media (max-width: 480px) {
        .catalogExibiction > * {
            flex: 1 1 100%; /* 1 item por linha em telas pequenas */
        }
    }
`;
