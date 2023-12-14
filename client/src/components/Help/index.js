import React, { useEffect } from 'react'
import * as C from './styles';

const Help = ({ closeHelpWithTimer, toggleHelp }) => {

    useEffect(() => {
        closeHelpWithTimer()
    }, [])

    return (
        <C.HelpContainer onClick={() => toggleHelp()}>
            {/* <C.HelpBox> */}
            <C.VideoContainer>
                <C.Title>
                    <h1>Registrar Atividade</h1>
                </C.Title>

                <C.Video autoPlay>
                    <source src="/Video.mp4" type="video/mp4" />
                </C.Video>
            </C.VideoContainer>

            {/* <C.NextModalContainer onClick={() => changeHelpModal()}>
                    <h1>&gt;</h1>
                </C.NextModalContainer> */}
            {/* </C.HelpBox> */}
        </C.HelpContainer>
    )
}

export default Help