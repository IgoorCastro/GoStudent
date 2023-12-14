import styled from "styled-components";

export const HelpContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5)
`;

// export const HelpBox = styled.div`
//     width: 80%;
//     background-color: #fff;
//     display: flex;
//     flex-direction: column;
//     border-radius: 5px;
//     padding: 5%;
//     position: relative;
// `;

// export const NextModalContainer = styled.div`
//     width: 45px;
//     height: 45px;
//     border-radius: 50%;
//     background-color: #154F79;
//     color: #fff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
//     position: absolute;
//     bottom: 15px;
//     right: 15px;
// `;

export const VideoContainer = styled.figure`
    width: 80%;
    margin: auto;
    background-color: #fff;
    padding: 3%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const Title = styled.div`
    width: 100%;
    text-align: center;
`

export const Video = styled.video`
    width: 100%;
    border-radius: 10px;
`