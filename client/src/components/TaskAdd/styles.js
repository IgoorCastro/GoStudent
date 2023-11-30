import styled from "styled-components";

export const AddContainer = styled.div`
    width: 95%;

    // @media (min-width: 768px){
    //     width: 35%;
    // }

    display: flex;
    flex-direction: column;
    align-items: center;

    //background: rgb(255,255,255, 0.2);
    //background: rgb(255,144,124, 0.9);

    border-radius: 15px;


    //border: 1px solid red;
`;

export const MainAddCointainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    gap: 15px;

    padding: 20px 0;
    //border: 1px solid red;
`;

export const TopAddContainer = styled.div`
    width: 100%;
    border-radius: 15px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding: 20px 0;

    //background: #FB6E66;

    //border: 1px solid blue;
`;

export const TopAddContent = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;

    //border: 1px solid red;
`;

export const TopIconsContent = styled.div`
    width: 90%;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;

    //border: 1px solid red;
`;

export const IconsContent = styled.div`
    width: min-content;
    height: min-content;

    padding: 10px;
    
    font-size: 2rem;
    color: #1B262C;
    border-radius: 0.3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    
    &:hover {
        background: #a9a9a9;
    }

    //border: 1px solid red;
`;

export const InputContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;   

    gap: 9px;

    //border: 1px solid red;
`;

export const AuxDiv = styled.div`
    width: 90%;
    display: flex;
    align-items: start;

    //border: 1px solid blue;
`;

export const Option = styled.option`
    &:hover{
        border: 0.5px solid #fff;
    }
`;

export const Select = styled.select`
    outline: none;
    width: 93%;

    border-radius: 2px;
    border: none;

    font-size: 1rem;
    padding: 8px 7px;
    text-align: start;

    //border: 1px solid red;
`;

export const DefaultA = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

export const Label = styled.label`
    font-size: 0.9rem;
    padding: 0;
    margin: 0;

    text-transform: uppercase;
`;

export const Title = styled.h2`
    font-size: 22px;
    text-transform: uppercase;

    ${({ color }) => color && `color: ${color};`}
    //border: 1px solid blue;

    height: min-content;
    text-align: center;
    
`;