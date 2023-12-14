import React from 'react';
import * as C from './styles';

const LabelErro = ({ children, hvColor, color }) => {
    const labelStyle = {
        color: color
    }
    return (
        <C.Label
            hoverColor={hvColor}
            style={labelStyle}
        >
            {children}
        </C.Label>
    )
}

export default LabelErro;
