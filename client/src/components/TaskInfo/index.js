import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useCalendarContext } from '../../context/DataContext';
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTurnUp, faPen, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import Button from '../Button';

const TaskInfo = () => {
    // Pegando useCalendarContext do contexto
    const { dataSelecionada, closeTaskInfo, showWeeklyTask, listDataSelecionada, setListData, showTaskEdit } = useCalendarContext();

    // State para guardar as informações das input
    const [values, setValues] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);


    const handleClickButton = () => {
        // Formatação da data para o DB
        const { dia, mes, ano } = dataSelecionada;
        const dataFormatada = ano + "/" + mes + "/" + dia;
        //console.log("Data: ", dataSelecionada);

        //console.log(values);
    }

    const convertDate = (date) => {
        //console.log("E-convertDate: " + date);

        const data = new Date(date.substring(0, 10));

        const dia = data.getDate() + 1; // Obter o ano como dia
        const mes = data.getMonth() + 1; // Mês (lembrando que Janeiro começa do zero)
        const ano = data.getFullYear(); // Obter o dia como ano

        // Formatar para o padrão dd/mm/yyyy
        const dataString = `${dia}/${mes}/${ano}`;

        //console.log("convertDate: " + dataString);
        return dataString;
    }

    var dataString = null, titleString = null, disciplinaString = null, tipoString = null, observacaoString = null;
    console.log(listDataSelecionada.length);
    if (listDataSelecionada && listDataSelecionada.length > 1) {
        //console.log("TaskInfo: ", listDataSelecionada);
        dataString = convertDate(listDataSelecionada[currentIndex].eve_dataHora);

        titleString = listDataSelecionada[currentIndex].eve_titulo;

        disciplinaString = listDataSelecionada[currentIndex].dis_id;

        tipoString = listDataSelecionada[currentIndex].cat_id;

        observacaoString = listDataSelecionada[currentIndex].eve_descricao;
    } else {
        dataString = convertDate(listDataSelecionada[0].eve_dataHora);

        titleString = listDataSelecionada[0].eve_titulo;

        disciplinaString = listDataSelecionada[0].dis_id;

        tipoString = listDataSelecionada[0].cat_id;

        observacaoString = listDataSelecionada[0].eve_descricao;
    }

    const handleNext = () => {
        //console.log("currentIndex: ", currentIndex);
        //console.log("listDataSelecionada.length: ", listDataSelecionada.length - 1);
        if (currentIndex < listDataSelecionada.length - 1)
            setCurrentIndex(currentIndex + 1);
    }

    const handlePrevious = () => {
        //console.log("currentIndex: ", currentIndex);
        //console.log("listDataSelecionada.length: ", listDataSelecionada.length - 1);
        if (currentIndex > 0)
            setCurrentIndex(currentIndex - 1);
    }

    // Verificar se dataSelecionado é um Array


    const handleClickExit = () => {
        closeTaskInfo();
    }

    const handleEditDate = () => {
        showTaskEdit();
    }

    // ---------- LOG -----------
    //console.log("Data selecionada: ", dataString);
    //console.log("Data selecionada {dataConvert}: ", convertDate(listDataSelecionada[0].eve_dataHora));

    return (
        <C.AddContainer>
            {listDataSelecionada.length > 1 && convertDate(listDataSelecionada[0].eve_dataHora) === dataSelecionada && (
                <C.ButtonContainer onClick={() => handlePrevious()}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </C.ButtonContainer>)}
            <C.MainAddCointainer>
                <C.TopAddContainer>
                    <C.TopIconsContent>
                        <C.IconsContent>
                            <FontAwesomeIcon icon={faTurnUp} rotation={270} onClick={() => { handleClickExit() }} />
                        </C.IconsContent>
                        <C.IconsContent>
                            <FontAwesomeIcon icon={faPen} onClick={() => handleEditDate()} />
                        </C.IconsContent>
                    </C.TopIconsContent>
                    <C.TopAddContent>
                        <C.DefaultA onClick={null}></C.DefaultA>
                        <C.Title color='#fff'>Resumo da data</C.Title>
                        <C.DefaultA onClick={null}></C.DefaultA>
                    </C.TopAddContent>
                </C.TopAddContainer>
                <C.LabelContent>
                    <C.Label>{titleString}</C.Label>
                </C.LabelContent>
                <C.LabelContent>
                    <C.Label>{disciplinaString}</C.Label>
                </C.LabelContent>
                <C.LabelContent>
                    <C.Label>{tipoString}</C.Label>
                </C.LabelContent>
                <C.LabelContent>
                    <C.Label>{dataString}</C.Label>
                </C.LabelContent>
                <C.LabelContent>
                    <C.Label>{observacaoString}</C.Label>
                </C.LabelContent>
                <C.IconsContent>
                    <FontAwesomeIcon icon={faTrash} />
                </C.IconsContent>
            </C.MainAddCointainer>
            {listDataSelecionada.length > 1 && convertDate(listDataSelecionada[0].eve_dataHora) === dataSelecionada && (
                <C.ButtonContainer onClick={() => { handleNext() }}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </C.ButtonContainer>)}
        </C.AddContainer>


    )
}

export default TaskInfo
