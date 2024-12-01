import styled from 'styled-components';

export const SucessContainer = styled.div`
    margin: 32px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;

        img{
            width: 80%;
        }
    }


`;
export const SucessHeader = styled.div`
    margin: 16px 0;

    h3{
        color: ${({theme}) => theme.COLORS.YELLOW_DARK};
        font-size: 32px;
        font-weight: 800;
    }

    p{
        color: ${({theme}) => theme.COLORS.BASE_SUBTITLE};
        font-size: 20px;
        font-weight: 400;
    }
`;
export const SucessInfoContainer = styled.div`
    padding : 16px;
    /* Estilizando as bordas */
    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem; 
    border: 2px solid ${({ theme }) => theme.COLORS.BORDER_COLOR}; 
    border-top-left-radius: 0.375rem; 
    border-bottom-right-radius: 0.375rem;
`;