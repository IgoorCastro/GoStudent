import styled from "styled-components";

export const Title = styled.h2`
    font-size: 22px;
    text-transform: uppercase;    

    ${({ color }) => color && `color: ${color};`}

    height: min-content;
    text-align: center;
    
    color: black;
`;