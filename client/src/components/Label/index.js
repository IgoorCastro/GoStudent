import React from 'react';
import * as C from './styles';

const Label = ({ children, color = '#0F4C75', hvColor }) => {
    return (
        <C.Label
            color={color}
            hoverColor={hvColor}
        >
            {children}
        </C.Label>
    )
}

export default Label;
