import React from 'react';
import * as C from './styles';

const Title = ({ children, color = '#1B262C' }) => {
    const TitleStyle = {
        color: color
    }
    return (
        <C.Title
            style={TitleStyle}
        >{children}</C.Title>
    )
}

export default Title
