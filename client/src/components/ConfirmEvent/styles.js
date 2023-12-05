import styled from "styled-components";

export const Container = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;

    
    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(5, 5, 5, 0.4);

    z-index: 999; /* Para garantir que fique acima do outro componente */

    //border: 1px solid red;
`;

export const ConfirmContainer = styled.div`
    width: 55%;
    height: 23%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    background: #E7E7E7;

    filter: drop-shadow(5px 5px 10px rgba(5, 5, 5, 0.4));

    background: radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 5px, transparent 5px) 0% 0%/8px 8px no-repeat,
            radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 5px, transparent 5px) 100% 0%/8px 8px no-repeat,
            radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 5px, transparent 5px) 0% 100%/8px 8px no-repeat,
            radial-gradient(circle at 0 0, #ffffff 0, #ffffff 5px, transparent 5px) 100% 100%/8px 8px no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 6px) calc(100% - 16px) no-repeat,
            linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 16px) calc(100% - 6px) no-repeat,
            linear-gradient(16deg, #0f4c75 0%, #3282b8 100%);
border-radius: 8px;
padding: 7px;
box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
    width: 90%;
    height: min-content;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: .5rem;
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    font-size: 1.2rem;

    user-select: none;

    color: #0F4C75;

    //border: 1px solid red;
`;