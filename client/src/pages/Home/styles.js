import styled from "styled-components";
import logo from '../../assets/logo1.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    //border: 1px solid purple;
`;

export const MainContent = styled.div`
    width: 100%;
    height: 91%;

    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;

    //border: 1px solid blue;
`;

// -------------------------- Navbar --------------------------

export const NavbarContainer = styled.div`
    z-index: 1;

    width: 100%;
    height: 9%;   

    display: flex;
    justify-content: center;
    align-items: center;

    //background: #0F4C75;
    background: linear-gradient(12deg, rgba(15,76,117,1) 0%, rgba(23,80,122,1) 100%);
    box-shadow: -1px 2px 8px -2px rgba(0,0,0,0.75);

    //border: 1px solid red;
`;

export const NavbarContent = styled.div`
    width: 94%;
    height: 100%;   

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

export const LogoContainer = styled.div`
    //min-width: 4.5%;
    max-width: 10%;
    height: 70%;
    //height: min-content;

    //padding: 10px;

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

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

// -------------------------- Navbar --------------------------

export const CalendarContainer = styled.div`
    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    //border: 1px solid red;
`;

export const CalendarContent = styled.div`
    width: 100%;
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

    background: #dddddd;
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
    justify-content: start;
    align-items: center;    

    //border: 1px solid red;
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