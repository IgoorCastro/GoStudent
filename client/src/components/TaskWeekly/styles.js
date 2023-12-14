import styled from "styled-components";

export const WeeklyContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

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
    width: 100%;
    height: 77%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    gap: 1.3rem;


    //border: 1px solid purple;
`;

export const MainContent = styled.div`
    width: 100%;
    height: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    gap: 1.3rem;

    padding: 5px 0;

    overflow-y: auto;

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    & {
        scrollbar-width: auto;
        scrollbar-color: #3282b8 #bbe1fa;
    }

    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
        width: 8px;
    }

    // &::-webkit-scrollbar-track {
    //     background: #bbe1fa;
    // }

    &::-webkit-scrollbar-thumb {
        background-color: #3282b8;
        border-radius: 10px;
        border: 0px solid #ffffff;
    }

    //border: 1px solid purple;
`;


export const TopWeeklyContainer = styled.div`
    width: 100%;
    height: 23%;
    
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //border: 1px solid purple;
`;

export const TopIconContainer = styled.div`
    width: 90%;
    height: 60%;
    
    display: flex;
    align-items: center;
    justify-content: right;

    font-size: 2rem;

    //border: 1px solid red;
`;

export const TopIconContent = styled.div`
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

export const TopAddTitle = styled.div`
    width: 90%;
    height: 40%;

    display: flex;
    align-items: start;
    text-align: center;
    justify-content: center;

    //border: 1px solid red;
`;

export const DataInfoContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    //border: 1px solid red;
`;

export const DataInfoContent = styled.div`
    width: 80%;
    height: 5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    
    border-radius: 15px;
    box-shadow: 0 0 0 3px rgba(15,76,117,0.1);


    //border: 1px solid red;
`;

export const DataContainer = styled.div`
    width: 29%;
    height: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;  

    //border: 1px solid blue;
`;

export const DayLabel = styled.label`
    font-size: 1.7rem;
    font-weight: 700;

    color: #1B262C;
`;
export const MonthLabel = styled.label`
    font-size: 1.1rem;
    font-weight: 700;

    text-transform: uppercase;

    color: #1B262C;
`;

export const Divider = styled.div`
    width: 1.5%;
    height: 90%;

    border-radius: .5rem;

    background: rgb(15, 76, 117, 0.6);
`;

export const InfoContainer = styled.div`
    width: 69%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    

    //border: 1px solid blue;
`;

export const InfoLabel = styled.label`
    font-size: 1rem;
    text-align: center;

    color: #1B262C;

    display: -webkit-box;
    -webkit-line-clamp: 2; /* Define o número de linhas que o texto ocupará */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; /* Adiciona reticências para indicar texto cortado */
    white-space: normal; /* Força quebra de linha automática */
    max-width: 90%; /* Respeita a largura do container */

    //border: 1px solid orange;
`;

export const TitleLabel = styled.label`
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;

    display: -webkit-box;
    -webkit-line-clamp: 2; /* Define o número de linhas que o texto ocupará */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; /* Adiciona reticências para indicar texto cortado */
    white-space: normal; /* Força quebra de linha automática */
    max-width: 80%; /* Respeita a largura do container */

    color: #1B262C;

    //border: 1px solid green;
`;


// export const LabelContent = styled.div`
//     width: 90%;
//     height: 8%;
//     display: flex;
//     flex-direction: column;
//     align-items: center; 

//     //padding: 15px 0;  

//     border-radius: 0.3rem;

//     background: #a9a9a9;

//     margin-top: 5%;

//     //border: 1px solid red;

//     &:hover{
//         background: #1B262C;
//     }
// `;

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

