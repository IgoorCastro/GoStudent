import styled from "styled-components";

export const Label = styled.label`
    width: max-content;
    height: min-content;
    
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    font-size: 1.2rem;

    user-select: none;

    //text-transform: uppercase;

    color: #f2293a;

    &:hover {
        color: ${props => props.hoverColor || props.color};
    }

    //border: 1px solid red;
`;

