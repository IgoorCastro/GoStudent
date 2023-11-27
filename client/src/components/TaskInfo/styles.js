import styled from "styled-components";

export const AddContainer = styled.div`
    width: 98%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

   //border: 1px solid red;
`;

export const MainAddCointainer = styled.div`
    width: 87%;
    height: 96%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    //gap: 1px;

    //padding: 20px 0;
    //padding-bottom: 10px;
    //border: 1px solid blue;
`;

export const TopAddContainer = styled.div`
    width: 100%;
    height: 25%;
    //border-radius: 15px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    //padding: 20px 0;

    //background: #FB6E66;

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

    margin-bottom: 50px;

    //border: 1px solid red;
`;

export const IconsContent = styled.div`
    width: 3rem;
    height: 3rem;
    
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
    width: 90%;
    padding: 8px 3px;

    border: none;
`;

export const DefaultA = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

export const Title = styled.h2`
    font-size: 22px;
    text-transform: uppercase;

    ${({ color }) => color && `color: ${color};`}
    //border: 1px solid blue;

    height: min-content;
    text-align: center;
    
    color: black;
`;