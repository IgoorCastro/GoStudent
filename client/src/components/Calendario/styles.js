import styled from "styled-components";


export const MainContent = styled.div`
    width: 100%;
    height: 88%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    //border: 1px dashed green;
`;

export const CalendarioContainer = styled.div`
    //position: absolute;
    width: 85%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;   

    //border: 1px solid blue;
`;

export const TitleContent = styled.div`
    min-width: 45%;
    //max-width: 65%;
    height: 8%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;    
    //padding: 10px 23px;

    //border: 1px solid blue;
`;

export const Title = styled.h2`
    height: min-content;

    text-align: center;
    font-size: 1.7rem;
    text-transform: uppercase; 

    color: #1B262C;

    //border: 1px solid blue;
`;

export const Button = styled.a`
    height: 30px;
    width: 30px;
    line-height: 32px;
    cursor: pointer;

    border: 2px solid #939799;
    
    border-radius: 50%;

    color: #939799;

    font-size: 16px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
    ${({ position }) => position && `${position}: 80px;`}

    &:hover{
        background: #0F4C75;
        color: #E7E7E7;
        border: 2px solid #BBE1FA;
    }
    `;

export const CalendarioTable = styled.table`
    width: 100%;
    height: 80%;
    border-collapse: collapse;

    //border: 1px solid blue;
`;

export const CalendarioThreadWeekly = styled.thead`
    max-height: 16%;
    font-weight: 550;
    text-transform: uppercase;
    background: #fff;

    //border: 1px solid blue;
`;

export const CalendarioThread = styled.thead`
    height: 12%;
    font-weight: 550;
    text-transform: uppercase;
    background: #fff;

    //border: 1px solid blue;
`;

export const CalendarioTr = styled.tr`
`;

export const CalendarioTdWeekly = styled.td`
    border: 2px solid #cbd1d2;
    //max-height: 16%;
    
    font-size: 16px;
    font-weight: 500;

    //height: 70px;
    //width: 70px;
    text-align: center;
    
    cursor: pointer;
    
    //border: 1px solid red;
`;

export const CalendarioTdDay = styled.td`
    border: 2px solid #cbd1d2;
    width: 14.28%;
    height: 16%;
    
    font-size: 16px;
    font-weight: 500;

    //height: 70px;
    //width: 70px;
    text-align: center;
    
    cursor: pointer;
    
    //border: 1px solid blue;
`;

export const CalendarioTBody = styled.tbody`
    min-height: 87%;
    max-width: 100%;
    //background: #0F4C75;

    //border: 1px solid blue;
`;

export const RadiusContent = styled.div`
    border-radius: 50%;
    max-width: 50%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    //border: 1px solid red;

    &:hover {
        background: ${({ day }) => (day !== null ? "#BBE1FA!important" : "inherit")};
        border: ${({ day }) => (day !== null ? "2px dashed #0F4C75!important" : "none")};
    }    
`;

export const Label = styled.label`
    font-size: 0.9rem;
    padding: 0;
    margin: 0;

    text-transform: uppercase;
`;

export const TopCalendarContainer = styled.div`
    width: 100vw;
    
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    //margin-bottom: 12px;

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

export const AuxDivIcon = styled.div`
    //border: 1px solid blue;
`;

export const Select = styled.select`
    width: 90%;
    padding: 8px 3px;

    border: none;
`;

export const Option = styled.option`
    &:hover{
        border: 0.5px solid #fff;
    }
`;

