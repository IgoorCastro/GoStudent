import React from 'react';
import * as C from './styles';

const LabelErro = ({ children, hvColor }) => {
    return (
        <C.Label
            hoverColor={hvColor}
        >
            {children}
        </C.Label>
    )
}

export default LabelErro;
