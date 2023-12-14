import React from 'react';
import * as C from './styles';
import Title from '../../components/Title';
import Button from '../../components/Button';
import { useCalendarContext } from '../../context/DataContext';

const ConfirmEvent = ({ title = 'title', text = 'text', onConfirm, onCancel }) => {
    const { closeTaskConfirmEvent, setCalendarUpdt } = useCalendarContext();
    const handleConfirmEvent = () => {
        if (onConfirm)
            onConfirm();
        else
            console.log("--(handleConfirmEvent) erro: nenhuma função encontrada. Use 'onConfirm' como parametro!");

        // atualiza as cores do calendário
        setCalendarUpdt();
        closeTaskConfirmEvent();
    }

    const handleCancelEvent = () => {
        closeTaskConfirmEvent();
    }

    return (
        <C.Container>
            <C.ConfirmContainer>
                <Title>{title}</Title>
                <C.Label>{text}</C.Label>
                <C.ButtonContainer>
                    <Button fontSize='.8rem' text='CONFIRMAR' onClick={handleConfirmEvent} ></Button>
                    <Button fontSize='.8rem' text='CANCELAR' onClick={handleCancelEvent} ></Button>
                </C.ButtonContainer>
            </C.ConfirmContainer>
        </C.Container>
    )
}

export default ConfirmEvent
