import styled from "styled-components";

export const Label = styled.label`
    width: 100%;
    //height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    font-size: 1.2rem;

    user-select: none;

    //text-transform: uppercase;

    color: ${props => props.color};

    &:hover {
        color: ${props => props.hoverColor || props.color};
    }

    //border: 1px solid red;
`;