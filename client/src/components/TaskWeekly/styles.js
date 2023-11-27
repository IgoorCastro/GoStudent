import styled from "styled-components";

export const WeeklyContainer = styled.div`
    width: 98%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    //border: 1px solid red;
`;

export const ButtonContainer = styled.div`
    width: min-content;
    height: min-content;

    font-size: 3rem;

    cursor: pointer;

    color: #1B262C;

    //border: 1px solid green;
`;

export const MainContainer = styled.div`
    width: 88%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //border: 1px solid blue;
`;

export const LabelContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    
    padding: 15px 0;  

    border-radius: 0.3rem;

    background: #a9a9a9;

    //border: 1px solid red;
`;

export const Label = styled.label`
    width: 90%;
    word-wrap: break-word;

    font-size: 1rem;
    padding: 0;
    margin: 0;

    text-transform: uppercase;
    text-align: center;

    //border: 1px solid red;
`;

