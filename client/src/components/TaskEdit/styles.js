import styled from "styled-components";

export const AddContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //border: 1px solid red;
`;

export const MainAddCointainer = styled.div`
    width: 100%;
    height: 77%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    //border: 1px solid purple;
`;

export const TopAddContainer = styled.div`
    width: 100%;
    height: 23%;
    
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //border: 1px solid blue;
`;

export const TopAddTitle = styled.div`
    width: 95%;
    height: 40%;

    display: flex;
    align-items: start;
    text-align: center;
    justify-content: center;

    //border: 1px solid red;
`;

export const TopIconsContent = styled.div`
    width: 83%;
    height: 60%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 2rem;

    //border: 1px solid red;
`;

export const IconsContent = styled.div`
    width: 13%;
    height: 55%;
    
    font-size: 2rem;
    color: #0F4C75;
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

export const InputContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;  

    //border: 1px solid blue;
`;

export const InputContent = styled.div`
    width: 90%;
    height: 20%;

    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: start;

    //border: 1px solid red;
`;

export const DateContainer = styled.div`
    width: 80%;
    height: 20%;

    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: start;

    //border: 1px solid red;
`;

export const DateContent = styled.div`
    width: 20%;
    height: 82%;

    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: center;

    background: rgba(255,255,255,0.8);

    border-radius: 15px;
    box-shadow: 0 0 0 3px rgba(15,76,117,0.1);

    //border: 1px solid green;
`;

export const DayLabel = styled.label`
    font-size: 1.7rem;
    font-weight: 700;
    text-align: center;

    color: #1B262C;

    //border: 1px solid red;
`;
export const MonthLabel = styled.label`
    font-size: 1.1rem;
    font-weight: 700;
    text-align: center;

    text-transform: uppercase;

    color: #0F4C75;

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

    font-size: 1.1rem;
    padding: 12px 7px;
    text-align: start;

    color: #302e2e;

    //border: 1px solid red;
`;

export const InputObs = styled.textarea`
    outline: none;
    width: 90%;
    max-width: 100%;
    height: 100%;

    font-family: 'Roboto', sans-serif;

    border-radius: 5px;
    border: none;

    font-size: 1.1rem;
    padding: 12px 7px;
    text-align: start;

    color: #302e2e;

    /* Quebra de linha ao atingir a largura máxima */
    word-wrap: break-word;

    /* Adiciona barra de rolagem vertical quando a altura exceder o limite */
    max-height: 200px; /* Altura máxima antes do scrollbar aparecer */
    overflow-y: auto; /* Adiciona barra de rolagem vertical */
    resize: none; /* Impede o redimensionamento do textarea pelo usuário */
    
    overflow: hidden;
    overflow-y: auto;
    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    & {
        scrollbar-width: auto;
        scrollbar-color: #3282b8 #bbe1fa;
    }

    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
        width: 2px;
    }

    // &::-webkit-scrollbar-track {
    //     background: #bbe1fa;
    // }

    &::-webkit-scrollbar-thumb {
        background-color: #3282b8;
        border-radius: 10px;
        border: 0px solid #ffffff;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    height: 30%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   

    gap: 9px;

    //border: 1px solid green;
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