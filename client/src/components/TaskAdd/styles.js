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

export const MainAddContainer = styled.div`
    width: 100%;
    height: 77%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    //border: 1px solid red;
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
    width: 90%;
    height: 40%;

    display: flex;
    align-items: start;
    text-align: center;
    justify-content: center;

    //border: 1px solid red;
`;

export const TopIconContainer = styled.div`
    width: 90%;
    height: 60%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 2rem;

    //border: 1px solid red;
`;

export const IconsContent = styled.div`
    width: min-content;
    height: min-content;

    padding: 10px;
    
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

export const ButtonContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;   

    gap: 9px;

    //border: 1px solid green;
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 75%;
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

export const DateContent = styled.div`
    width: 40%;
    height: 20%;

    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: start;

    //border: 1px solid red;
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
    padding: 15px 7px;
    text-align: start;

    color: #302e2e;

    //border: 1px solid red;
`;

export const InputObs = styled.textarea`
    outline: none;
    width: 90%;
    max-width: 100%;
    height: 100%;

    border-radius: 5px;
    border: none;

    font-size: 1.1rem;
    padding: 15px 7px;
    text-align: start;

    color: #302e2e;

    /* Quebra de linha ao atingir a largura máxima */
    word-wrap: break-word;

    /* Adiciona barra de rolagem vertical quando a altura exceder o limite */
    max-height: 200px; /* Altura máxima antes do scrollbar aparecer */
    overflow-y: auto; /* Adiciona barra de rolagem vertical */
    resize: none; /* Impede o redimensionamento do textarea pelo usuário */
    
    /* Estilos adicionais, se necessário */
`;

export const Title = styled.h2`
    font-size: 22px;
    text-transform: uppercase;

    ${({ color }) => color && `color: ${color};`}
    //border: 1px solid blue;

    height: min-content;
    text-align: center;
    
`;

export const LabelDate = styled.h2`
    width: 90%;

    border-radius: 5px;
    border: none;

    background: #fff;
    color: #0F4C75;

    font-size: 1.2rem;
    padding: 15px 7px;
    text-align: center;    

    box-shadow: 9px 10px 5px -7px rgba(0,0,0,0.2);

    //border: 1px solid blue;
`;