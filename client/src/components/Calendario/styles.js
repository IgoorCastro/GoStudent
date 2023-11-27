import styled from "styled-components";


export const MainContent = styled.div`
    width: 100%;
    height: min-content;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    //border: 1px dashed green;
`;

export const CalendarioContainer = styled.div`
    //position: absolute;
    width: 85%;
    height: min-content;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;   

    //border: 1px solid blue;
`;

export const TitleContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;    
    padding: 10px 23px;

    //border: 1px solid blue;
`;

export const Title = styled.h2`
    font-size: 22px;
    text-transform: uppercase;

    ${({ color }) => color && `color: ${color};`}
    //border: 1px solid blue;

    height: min-content;
    text-align: center;
    
`;

export const Button = styled.a`
    height: 32px;
    width: 32px;
    line-height: 32px;
    cursor: pointer;

    border: 2px solid #939799;
    ${({ border }) => border && `border-color: ${border};`}
    border-radius: 50%;

    color: #939799;
    ${({ color }) => color && `color: ${color};`}

    font-size: 16px;
    ${({ fs }) => fs && `font-size: ${fs};`}
    font-weight: bold;


    ${({ bg }) => bg && `background-color: ${bg};`}

    display: flex;
    align-items: center;
    justify-content: center;
    ${({ position }) => position && `${position}: 80px;`}

    &:hover{
        background: #939799;
        color: #E7E7E7;
    }
    `;

export const CalendarioTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    //border: 1px solid blue;
    
`;

export const CalendarioThread = styled.thead`
    font-weight: 550;
    text-transform: uppercase;
    background: #fff;
`;

export const CalendarioTr = styled.tr`

`;

export const CalendarioTd = styled.td`
    border: 2px solid #cbd1d2;
    
    font-size: 16px;
    font-weight: 500;

    height: 70px;
    width: 70px;
    text-align: center;
    
    cursor: pointer;
    
    //border: 1px solid blue;
`;

export const CalendarioTBody = styled.tbody`
    
`;

export const RadiusContent = styled.div`
    border-radius: 50%;
    max-width: 50%;
    min-height: 80%;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    //border: 1px solid red;

    &:hover {
        background: ${({ day }) => (day !== null ? "#BBE1FA" : "inherit")};
        border: ${({ day }) => (day !== null ? "1px dashed #0F4C75" : "inherit")};
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

