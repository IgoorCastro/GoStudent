import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    //border: 1px solid red;
`;

// -------------------------- Navbar --------------------------

export const Navbar = styled.div`
    z-index: 1;

    width: 100%;
    height: 9%;   

    display: flex;
    justify-content: center;
    align-items: center;

    background: #0F4C75;
    box-shadow: -1px 2px 8px -2px rgba(0,0,0,0.75);

    //border: 1px solid red;
`;

export const NavbarContent = styled.div`
    width: 95%;
    height: max-content;   

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    //border: 1px solid red;
`;


export const IconGroup = styled.div`
    width: min-content;
    height: min-content;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin-top: 3px;
    
    gap: 10px;

    //border: 1px solid red;
`;

export const IconContent = styled.div`
    width: min-content;
    height: min-content;

    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.8rem;
    color: #E7E7E7;

    border-radius: 0.3rem;

    //border: 1px solid red;

    ${({ selected }) => selected && `
        background: #BBE1FA;
        color: #1B262C;
    `}

    &:hover{
        cursor: pointer;
        background: #BBE1FA;
        color: #1B262C;
    }
`;

export const IconContentLogo = styled.div`
    width: min-content;
    height: min-content;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 2.5rem;
    color: #fff;

    border-radius: 0.3rem;

    //border: 1px solid red;

    &:hover{
        cursor: pointer;
    }
`;


// -------------------------- Navbar --------------------------

export const CalendarContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    //border: 1px solid red;
`;

export const CalendarContent = styled.div`
    width: 65%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    //border: 1px solid red;
`;

export const DateInfoContent = styled.div`
    width: 35%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;

    background: #cfcfcf;
    //border: 1px solid blue;
`;

export const AddTaskContent = styled.div`
    height: 10%;

    display: flex;
    align-items: end;

    //border: 1px solid red;
`;


export const MessageContent = styled.div`
    width: 85%;
    height: 12%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    //border: 1px solid red;
`;

export const Label = styled.label`
    font-size: 1.2rem;

    margin-top: 1%;

    //text-transform: uppercase;
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

    font-size: 16px;
    line-height: 32px;
    font-weight: bold;
    
    cursor: pointer;

    border-radius: 50%;
    color: #939799;

    display: flex;
    align-items: center;
    justify-content: center;

    ${({ border }) => border && `border-color: ${border};`}   
    
    ${({ color }) => color && `color: ${color};`}
    
    ${({ fs }) => fs && `font-size: ${fs};`}

    ${({ bg }) => bg && `background-color: ${bg};`}

    ${({ position }) => position && `${position}: 80px;`}

    &:hover{
        background: #939799;
        color: #E7E7E7;
    }
`;