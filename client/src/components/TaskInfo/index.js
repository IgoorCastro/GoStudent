import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useCalendarContext } from '../../context/DataContext';
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTurnUp, faPen, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Title from '../../components/Title';
import ConfirmEvent from '../../components/ConfirmEvent';

const TaskInfo = () => {
    // Pegando useCalendarContext do contexto
    const { dataSelecionada, closeTaskInfo, currentIndex, setCurrentIndx, listDataSelecionada, showTaskEdit, isTaskConfirmEvent,
        showTaskConfirmEvent } = useCalendarContext();

    // State para guardar as informações das input
    const [values, setValues] = useState();

    useEffect(() => (
        setCurrentIndx(0)
    ), []);

    const nomesDosMeses = [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
    ];


    const handleClickButton = () => {
        // Formatação da data para o DB
        const { dia, mes, ano } = dataSelecionada;
        const dataFormatada = ano + "/" + mes + "/" + dia;
        //console.log("Data: ", dataSelecionada);

        //console.log(values);
    }

    const convertDate = (date) => {
        //console.log("E-convertDate: " + date);

        const data = new Date(date);

        const dia = data.getDate(); // Obter o ano como dia
        const mes = data.getMonth() + 1; // Mês (lembrando que Janeiro começa do zero)
        const ano = data.getFullYear(); // Obter o dia como ano

        // Formatar para o padrão dd/mm/yyyy
        const dataString = `${dia}/${mes}/${ano}`;

        //console.log("convertDate: " + dataString);
        return dataString;
    }

    var dataString = null, titleString = null, disciplinaString = null, tipoString = null, observacaoString = null;
    if (listDataSelecionada && listDataSelecionada.length > 1) {
        console.log("---TaskInfo: ", listDataSelecionada);

        titleString = listDataSelecionada[currentIndex].eve_titulo;

        disciplinaString = listDataSelecionada[currentIndex].dis_nome;

        tipoString = listDataSelecionada[currentIndex].cat_nome;

        observacaoString = listDataSelecionada[currentIndex].eve_descricao;
    } else {
        titleString = listDataSelecionada[0].eve_titulo;

        disciplinaString = listDataSelecionada[0].dis_nome;

        tipoString = listDataSelecionada[0].cat_nome;

        observacaoString = listDataSelecionada[0].eve_descricao;
    }

    const handleNext = () => {
        //console.log("currentIndex: ", currentIndex);
        //console.log("listDataSelecionada.length: ", listDataSelecionada.length - 1);
        if (currentIndex < listDataSelecionada.length - 1)
            setCurrentIndx(currentIndex + 1);
    }

    const handlePrevious = () => {
        if (currentIndex > 0)
            setCurrentIndx(currentIndex - 1);
    }

    // Verificar se dataSelecionado é um Array


    const handleClickExit = () => {
        closeTaskInfo();
    }

    const handleEditDate = () => {
        showTaskEdit();
    }

    const handleDeletButton = () => {
        showTaskConfirmEvent();
        console.log("ID: ", listDataSelecionada[currentIndex].eve_id);
    }

    const handleConfirmDelet = () => {
        Axios.delete(`http://localhost:3001/delete/${listDataSelecionada[currentIndex].eve_id}`);
        alert("Registro deletado");
        closeTaskInfo();
    }

    const handleDay = (props) => {
        const newData = props.slice(0, 10);

        const data = new Date(newData);
        const dia = data.getDate();
        return dia + 1;
    }
    const handleMonth = (props) => {
        const newData = props.slice(0, 10);

        const data = new Date(newData);
        const mes = data.getMonth();
        return mes;
    }

    // ---------- LOG -----------
    // console.log("listDataSelecionada.length > 1: ", listDataSelecionada.length > 1);
    // console.log("convertDate(listDataSelecionada[0].eve_dataHora: ", convertDate(listDataSelecionada[0].eve_dataHora));
    // console.log("dataSelecionada: ",);

    return (
        <C.AddContainer>
            {isTaskConfirmEvent && <ConfirmEvent title='Excluir' text='Deseja excluir o registro?' onConfirm={handleConfirmDelet}>
            </ConfirmEvent>}
            <C.ButtonContainer onClick={() => handlePrevious()}>
                {listDataSelecionada.length > 1 && currentIndex > 0 && convertDate(listDataSelecionada[0].eve_dataHora) === convertDate(dataSelecionada) && (
                    <FontAwesomeIcon icon={faChevronLeft} />)}
            </C.ButtonContainer>

            <C.MainAddCointainer>
                <C.TopAddContainer>
                    <C.TopIconContainer>
                        <C.IconsContent>
                            <FontAwesomeIcon icon={faTurnUp} rotation={270} onClick={() => { handleClickExit() }} />
                        </C.IconsContent>
                        <C.IconsContent>
                            <FontAwesomeIcon icon={faPen} onClick={() => handleEditDate()} />
                        </C.IconsContent>
                    </C.TopIconContainer>
                    <C.TopAddTitle>
                        <Title color='#fff'>Sua agenda</Title>
                    </C.TopAddTitle>
                </C.TopAddContainer>

                <C.MainAddContent>

                    <C.DateContainer>
                        <C.DateContent>
                            <C.DayLabel>{handleDay(listDataSelecionada[0].eve_dataHora)}</C.DayLabel>
                            <C.MonthLabel>{nomesDosMeses[handleMonth(listDataSelecionada[0].eve_dataHora)]}</C.MonthLabel>
                        </C.DateContent>
                    </C.DateContainer>
                    <C.LabelTitleContainer>
                        <C.LabelTitleContent>
                            <C.Label>{titleString}</C.Label>
                        </C.LabelTitleContent>
                    </C.LabelTitleContainer>

                    <C.LabelContainer>
                        <C.LabelContent>
                            <C.Label>{disciplinaString}</C.Label>
                        </C.LabelContent>
                    </C.LabelContainer>
                    <C.LabelContainer>
                        <C.LabelContent>
                            <C.Label>{tipoString}</C.Label>
                        </C.LabelContent>
                    </C.LabelContainer>

                    <C.LabelObsContainer>
                        <C.LabelObsContent>
                            <C.LimitLabelOsb>
                                <C.LabelObs>{observacaoString}</C.LabelObs>
                            </C.LimitLabelOsb>
                        </C.LabelObsContent>
                    </C.LabelObsContainer>
                    <C.IconsContainer>
                        <C.IconsContent>
                            <FontAwesomeIcon icon={faTrash} onClick={handleDeletButton} />
                        </C.IconsContent>
                    </C.IconsContainer>

                </C.MainAddContent>
            </C.MainAddCointainer>

            <C.ButtonContainer onClick={() => { handleNext() }}>
                {listDataSelecionada.length > 1 && currentIndex < listDataSelecionada.length - 1 && convertDate(listDataSelecionada[0].eve_dataHora) === convertDate(dataSelecionada) && (
                    <FontAwesomeIcon icon={faChevronRight} />
                )}
            </C.ButtonContainer>
        </C.AddContainer>


    )
}

export default TaskInfo
