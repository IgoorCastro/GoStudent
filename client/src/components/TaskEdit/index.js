import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useCalendarContext } from '../../context/DataContext';
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import Button from '../Button';
import Title from '../../components/Title';
import LabelErro from '../../components/LabelErro';
import ConfirmEvent from '../../components/ConfirmEvent';

const TaskEdit = () => {
    // Pegando useDataContext do contexto
    const { isTaskEditVisible, listDataSelecionada, closeTaskEdit, currentIndex, isTaskConfirmEvent, showTaskConfirmEvent, convertIdCategoria, nameDisciplina } = useCalendarContext();
    //console.log("Context - listDataSelecionada: ", listDataSelecionada);

    // State para guardar as informações das input
    const [values, setValues] = useState({
        id: '',
        dataString: '',
        titleString: '',
        disciplinaString: listDataSelecionada[currentIndex].dis_id,
        tipoString: listDataSelecionada[currentIndex].cat_id,
        observacaoString: '',
        // outros campos do formulário aqui
    });
    //console.log("--values: ", values);

    const [lastListDataSelecionada, setLastListDataSelecionada] = useState();
    const [erro, setErro] = useState("");
    //onsole.log("dataString: ", values);

    useEffect(() => { updateDateData() }, []);

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

    const handleChangeValues = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const handleClickButton = () => {
        if (!values.titleString) {
            setErro("Título obrigatório");
            return;
        }
        if (values.titleString.length > 100) {
            setErro("Título deve ter no máximo 100 caracteres");
            return;
        }
        if (values.observacaoString.length > 255) {
            setErro("Observação deve ter no máximo 255 caracteres");
            return;
        }

        showTaskConfirmEvent();
    }

    const handleConfirmEdit = () => {
        const fragmentDate = values.dataString.split('/');
        const dateToDb = fragmentDate[2] + '/' + fragmentDate[1] + '/' + fragmentDate[0];

        console.log("dateToDb: ", dateToDb);


        Axios.put("http://localhost:3001/edit", {
            data: dateToDb,
            titulo: values.titleString,
            disciplina: values.disciplinaString,
            tipo: values.tipoString,
            observacao: values.observacaoString,
            id: values.id,
        });
        alert("Alteração concluida");
        closeTaskEdit();
    }


    const convertDate = (date) => {
        //console.log("E-convertDate: " + date);

        const data = new Date(date.substring(0, 10));

        const dia = data.getDate() + 1; // Obter o ano como dia
        const mes = data.getMonth() + 1; // Mês (lembrando que Janeiro começa do zero)
        const ano = data.getFullYear(); // Obter o dia como ano

        // Formatar para o padrão dd/mm/yyyy
        const dataString = `${dia}/${mes}/${ano}`;

        console.log("convertDate: " + dataString);
        return dataString;
    }

    const updateDateData = () => {
        setLastListDataSelecionada(listDataSelecionada[currentIndex].eve_dataHora);
        if (Array.isArray(listDataSelecionada) && isTaskEditVisible) {
            setValues({
                id: listDataSelecionada[currentIndex].eve_id,
                dataString: convertDate(listDataSelecionada[currentIndex].eve_dataHora),
                titleString: listDataSelecionada[currentIndex].eve_titulo,
                disciplinaString: listDataSelecionada[currentIndex].dis_id,
                tipoString: listDataSelecionada[currentIndex].cat_id,
                observacaoString: listDataSelecionada[currentIndex].eve_descricao,
                // outros campos do formulário aqui
            });
        }
        //console.log("values update: ", values.tipoString);
    }

    if (lastListDataSelecionada !== listDataSelecionada[0].eve_dataHora) {
        updateDateData();
    }

    const handleClickConfiNotif = () => {
        alert("handleClickConfiNotif");
    }

    const handleClickExit = () => {
        closeTaskEdit();
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
    //console.log("Data selecionada: ", dataString);
    //console.log("Data selecionada: ", dataSelecionada);

    return (
        <C.AddContainer>
            {isTaskConfirmEvent && <ConfirmEvent title='Editar' text='Confirmar edição do registro?' onConfirm={handleConfirmEdit}>
            </ConfirmEvent>}
            <C.TopAddContainer>
                <C.TopIconsContent>
                    <C.IconsContent>
                        <FontAwesomeIcon icon={faTurnUp} rotation={270} onClick={() => handleClickExit()} />
                    </C.IconsContent>
                    <C.IconsContent>
                        <FontAwesomeIcon icon={faBell} onClick={() => handleClickConfiNotif()} />
                    </C.IconsContent>
                </C.TopIconsContent>
                <C.TopAddTitle>
                    <Title>EDITAR REGISTRO</Title>
                </C.TopAddTitle>
            </C.TopAddContainer>

            <C.MainAddCointainer>
                <C.InputContainer>
                    <C.DateContainer>
                        <C.DateContent>
                            <C.DayLabel>{handleDay(listDataSelecionada[currentIndex].eve_dataHora)}</C.DayLabel>
                            <C.MonthLabel>{nomesDosMeses[handleMonth(listDataSelecionada[currentIndex].eve_dataHora)]}</C.MonthLabel>
                        </C.DateContent>
                    </C.DateContainer>
                    <C.InputContent>
                        <C.AuxDiv>
                            <C.Label>título:</C.Label>
                        </C.AuxDiv>
                        <Input type='text' bg='#fff' name='titleString' onChange={(e) => { handleChangeValues(e); setErro(""); }} defaultValue={values.titleString} ></Input>
                    </C.InputContent>
                    <C.InputContent>
                        <C.AuxDiv>
                            <C.Label>disciplina:</C.Label>
                        </C.AuxDiv>
                        <C.Select name='idDisciplina' onChange={handleChangeValues} defaultChecked={nameDisciplina.length + 1 - values.disciplinaString}>
                            <C.Option value='1' disabled selected>Seleciona uma disciplina</C.Option>
                            {nameDisciplina.map((item, index) => (
                                <C.Option key={index} value={index + 1}>
                                    {item.dis_nome}
                                </C.Option>
                            ))}
                        </C.Select>
                    </C.InputContent>
                    <C.InputContent>
                        <C.AuxDiv>
                            <C.Label>tipo:</C.Label>
                        </C.AuxDiv>
                        <C.Select name='idTipo' onChange={handleChangeValues} defaultChecked={convertIdCategoria.length + 1 - values.tipoString}>
                            <C.Option value='1' disabled selected>Tipo de atividade</C.Option>
                            {convertIdCategoria.map((item, index) => (
                                <C.Option key={index} value={index + 1}>
                                    {item.cat_nome}
                                </C.Option>
                            ))}
                        </C.Select>
                    </C.InputContent>
                    <C.InputContent>
                        <C.AuxDiv>
                            <C.Label>observação:</C.Label>
                        </C.AuxDiv>
                        <C.InputObs type='text' bg='#fff' name='observacaoString' onChange={handleChangeValues} defaultValue={values.observacaoString} ></C.InputObs>
                    </C.InputContent>
                </C.InputContainer>
                <C.ButtonContainer>
                    <LabelErro>{erro}</LabelErro>
                    <Button text='SALVAR' onClick={handleClickButton}></Button>
                </C.ButtonContainer>
            </C.MainAddCointainer>
        </C.AddContainer>

    )
}

export default TaskEdit
