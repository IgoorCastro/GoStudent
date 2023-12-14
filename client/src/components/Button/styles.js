import styled from "styled-components";

export const Button = styled.button`
    width: 65%;
    //min-width: 15rem; 
    
    padding: 12px 0;
    cursor: pointer;

    background-color: #0F4C75;
    border: 1px solid #0F4C75;
    border-radius: 0.25rem;

    font-family: 'Staatliches', sans-serif;
    font-size: 1.5rem; //24px 
    line-height: 1.25rem; 
    letter-spacing: 2px;
    color: #fff;

    &:hover{
        background-color: #3282B8;
        border: 1px solid #3282B8;
    }

    //border: 1px solid red;
`;