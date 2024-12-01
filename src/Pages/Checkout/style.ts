import styled from "styled-components";

// Contêiner principal do Checkout
export const ContainerCheckout = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin: 32px 0;
    min-height: 372px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ChekoutCart = styled.div`
    width: 640px;
    min-height: 372px;
    border-radius: 6px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .checkoutCartLinha {
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BASE_BUTTON};
        margin: 16px 0;
    }

    .checkoutCartForm {
        background-color: ${({ theme }) => theme.COLORS.BASE_CARD};
        padding: 16px;
        border-radius: 10px;
    }
    
    .formEndereco{
        display: flex;
        flex-direction: column;
        gap: 16px;

        .formDiv{
            display: flex;
            gap: 16px;
            justify-content: space-between;

            @media (max-width: 768px) {
                flex-direction: column;  // Mudando a direção para coluna em telas menores
                gap: 8px;  // Diminui o espaçamento entre os itens, se necessário
            }
        }
    }

    .checkoutCartTitulo {
        display: flex;
        flex-direction: column;
        gap: 8px;

        p {
            &:first-child {
                color: ${({ theme }) => theme.COLORS.BASE_SUBTITLE};
                font-weight: bold;
                display: flex;
                align-items: center;
            }

            &:last-child {
                color: ${({ theme }) => theme.COLORS.BASE_TEXT};
                font-size: 14px;
                margin-bottom: 16px;
            }
        }

        img {
            margin-right: 8px;
        }
    }

    .checkoutCartTotais {
        margin-top: 16px;
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
        }

        th, td {
            padding: 10px;
            text-align: left;
            font-size: 14px;
        }

        th {
            background-color: ${({ theme }) => theme.COLORS.BASE_BACKGROUND};
        }

        td {
            background-color: ${({ theme }) => theme.COLORS.BASE_CARD};
        }

        td span {
            font-weight: bold;
        }
    }

    .checkoutCartPix {
        background-color: ${({ theme }) => theme.COLORS.BASE_CARD};
        color: ${({ theme }) => theme.COLORS.BASE_TEXT};
        font-weight: 400;
        font-size: 12px;

        p {
            background-color: ${({ theme }) => theme.COLORS.BASE_BUTTON};
            color: ${({ theme }) => theme.COLORS.BASE_TEXT};
            padding: 16px;
            border-radius: 6px;
            width: 178.67px;
            height: 51px;
            font-weight: 400;
            font-size: 12px;
        }
    }

    .checkoutCartConfirmar {
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const CatalogCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px 0;

    > * {
        width: 100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CatalogCart = styled.div`
    width: 200px;
    padding: 10px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.BASE_CARD};

    img {
        width: 100%;
        border-radius: 6px;
    }

    p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.BASE_TEXT};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.COLORS.BASE_BUTTON};
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
    padding: 16px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    
    &:hover {
        background-color: ${({ theme }) => theme.COLORS.BASE_HOVER};
    }

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 16px;
    }
`;

