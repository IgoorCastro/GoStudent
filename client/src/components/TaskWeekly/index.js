import React, { useState } from 'react';
import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useCalendarContext } from '../../context/DataContext';

const TaskWeekly = () => {
    const { listDataSelecionada, dataSelecionada } = useCalendarContext();

    const convertDate = (date) => {
        console.log("E-convertDate: " + date);

        const data = new Date(date.substring(0, 10));

        const dia = data.getDate() + 1; // Obter o ano como dia
        const mes = data.getMonth() + 1; // Mês (lembrando que Janeiro começa do zero)
        const ano = data.getFullYear(); // Obter o dia como ano

        // Formatar para o padrão dd/mm/yyyy
        const dataString = `${dia}/${mes}/${ano}`;

        console.log("convertDate: " + dataString);
        return dataString;
    }



    console.log("listDataSelecionada", listDataSelecionada);
    console.log("dataSelecionada", dataSelecionada);



    return (
        <C.WeeklyContainer>

            <C.MainContainer>
                <C.LabelContent>
                    <C.Label>{ }</C.Label>
                </C.LabelContent>
                <C.LabelContent>
                    <C.Label>{ }</C.Label>
                </C.LabelContent>
                <C.LabelContent>
                    <C.Label>{ }</C.Label>
                </C.LabelContent>
                <C.LabelContent>
                    <C.Label>{ }</C.Label>
                </C.LabelContent>
                <C.LabelContent>
                    <C.Label>{ }</C.Label>
                </C.LabelContent>
            </C.MainContainer>

        </C.WeeklyContainer>
    )
}

export default TaskWeekly
