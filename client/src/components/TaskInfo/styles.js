import styled from "styled-components";

export const AddContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    background: rgb(15,76,117, 0.9);

    //border: 1px solid purple;
`;

export const MainAddCointainer = styled.div`
    height: 100%;
    width: 90%;

    //border: 1px solid red;
`;

export const MainAddContent = styled.div`
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

export const TopIconContainer = styled.div`
    width: 95%;
    height: 60%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 2rem;

    //border: 1px solid red;
`;

export const IconsContainer = styled.div`
    width: 100%;
    height: 15%;
    
    font-size: 2rem;
    color: #0F4C75;
    border-radius: 0.3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    //border: 1px solid red;
`;

export const IconsContent = styled.div`
    width: 15%;
    height: 65%;
    
    font-size: 2rem;
    //color: #0F4C75;
    color: #E7E7E7;
    border-radius: 0.3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    
    &:hover {
        background: #0F4C75;
        color: #fff;
    }

    //border: 1px solid red;
`;

export const DateContainer = styled.div`
    width: 88%;
    height: 14%;
    //height: 21%;

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
    justify-content: start;

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

export const ButtonContainer = styled.div`
    width: 5%;
    height: min-content;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;

    cursor: pointer;

    color: #1B262C;

    &:hover {
        background: #0F4C75;
        color: #fff;
    }

    //border: 1px solid green;
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

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;  

    //border: 1px solid blue;
`;

export const LabelTitleContainer = styled.div`
    width: 90%;
    height: 13%;

    border-radius: 0.2rem;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;  

    //border: 1px solid green;
`;

export const LabelContainer = styled.div`
    width: 90%;
    height: 14%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;  

    //border: 1px solid orange;
`;

export const LabelObsContainer = styled.div`
    width: 90%;
    height: 26%;
    //max-height: 25%;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;     

    //border: 1px solid red;
`;

export const LabelTitleContent = styled.div`
    width: 100%;
    height: 60%;

    display: flex;
    justify-content: center;
    align-items: center; 

    color: #1B262C;
    background: rgba(255,255,255,0.8);

    border-radius: 0.6rem;

    //border: 1px solid red;
`;

export const LabelContent = styled.div`
    width: 100%;
    height: 54%;

    display: flex;
    justify-content: center;
    align-items: center; 

    border-radius: 0.7rem;
    //border: 1px solid #3282B8;
    //box-shadow: 0 0 0 3px rgba(15,76,117,0.2);

    //background: #cacaca;  
    background: rgba(255,255,255,0.8);  

    color: #1B262C;

    //border: 1px solid red;
`;

export const LabelObsContent = styled.div`
    width: 100%;
    min-height: 50%;
    max-height: 70%;

    display: flex;
    justify-content: center;
    align-items: center; 

    background: rgba(255,255,255,0.8); 
    color: #1B262C;

    border-radius: .6rem;

    //border: 1px solid red;
`;


export const Label = styled.label`
    height: min-content;

    font-size: 1.1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;

    //padding: 9px 0; 

    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1   ; /* Define o número de linhas que o texto ocupará */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; /* Adiciona reticências para indicar texto cortado */
    max-width: 90%; /* Respeita a largura do container */
    

    //border: 1px solid red;
`;

export const LimitLabelOsb = styled.div`
    height: 80%;    
    width: 95%;

    display: flex;
    justify-content: center;
    align-items: start;

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

    //border: 1px solid green;
`;

export const LabelObs = styled.label`
    height: max-content;

    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;

    word-wrap: break-word;
    display: -webkit-box;
    //-webkit-line-clamp: 3; /* Define o número de linhas que o texto ocupará */
    -webkit-box-orient: vertical;
    overflow: hidden;
    //text-overflow: ellipsis; /* Adiciona reticências para indicar texto cortado */
    max-width: 93%; /* Respeita a largura do container */
    

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