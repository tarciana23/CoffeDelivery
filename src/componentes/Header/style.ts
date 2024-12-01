import styled from "styled-components";

export const HeaderStyled = styled.header`
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
            list-style-type: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;

            span {
                background-color: #ebe5f9;
                color: #8047f8;
                padding: 0.6rem 0.5rem;
                border-radius: 10px;
                font-weight: 400;
            }
        }
    }

    @media (max-width: 768px) {
        ul {
            flex-direction: column;
            gap: 1rem;
        }
    }
`;