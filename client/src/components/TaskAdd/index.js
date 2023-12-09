import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useCalendarContext } from '../../context/DataContext';
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import ConfirmEvent from '../../components/ConfirmEvent';
import Input from '../Input';
import Button from '../Button';
import Title from '../Title';
import LabelErro from '../../components/LabelErro';

const AddTask = () => {
    // Pegando useDataContext do contexto
    const { listNameCategoria, listNameDisciplina, closeTaskAdd, dataSelecionada, isTaskConfirmEvent, showTaskConfirmEvent,
        setCalendarUpdt } = useCalendarContext();
    const [erro, setErro] = useState("");

    // State para guardar as informações das input
    const [values, setValues] = useState({
        data: '',
        tipo: 4,
        disciplina: 4,
        titulo: '',
        observacao: '',
    });
    //console.log("values: ", values);

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

    // função para formatar a data no estilo dia/ mes/ ano
    const convertDate = (date) => {
        const data = new Date(date.substring(0, 10));

        const dia = data.getDate(); // Obter o ano como dia
        const mes = data.getMonth() + 1; // Mês (lembrando que Janeiro começa do zero)
        const ano = data.getFullYear(); // Obter o dia como ano

        // Formatar para o padrão dd/mm/yyyy
        const dataString = `${dia}/${mes}/${ano}`;

        //console.log("convertDate: " + dataString);
        return dataString;
    }

    useEffect(() => {
        setValues(prevValues => ({
            ...prevValues,
            data: dataSelecionada
        }));
    }, [dataSelecionada]);

    const handleChangeValues = (value) => {
        // console.log("value.target.name: ", value.target.name);
        // console.log("value.target.value: ", value.target.value);

        setValues(prevValues => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    }

    const handleClickButton = () => {
        // verifica se o titulo está vazio
        if (!values.titulo) {
            setErro("Título obrigatório");
            return;
        }
        showTaskConfirmEvent();
    }

    const handleConfirmReg = () => {
        // request de registro
        Axios.post("http://localhost:3001/register", {
            titulo: values.titulo,
            disciplina: listNameDisciplina.length + 1 - values.disciplina,
            tipo: listNameCategoria.length + 1 - values.tipo,
            data: values.data,
            observacao: values.observacao
        }).then((response) => {
            alert("Registro concluidos");
            closeTaskAdd();
            //console.log("--response: ", response.data);
        }).catch((e) => {
            // tratamento de erro 'requests, response e configuração'
            if (e.response) {
                setErro("erro ", e.response.status, " - contate um administrador!");
                console.error("--erro status:", e.response.status);
                console.error("--dados do erro:", e.response.data);
            } else if (e.request) {
                // requisição feita, mas não houve resposta do servidor
                setErro("erro ", e.request.status, " - contate um administrador!");
                console.log("Sem resposta do servidor:", e.request);
            } else {
                // erro ao configurar a requisição
                setErro("erro ao configurar a requisição - contate um administrador!");
                console.error("--erro requisição:", e.message);
            }
        });
    }

    const handleClickConfiNotif = () => {
        alert("handleClickConfiNotif");
    }

    const handleClickExit = () => {
        closeTaskAdd();
    }

    // retorno do dia
    const handleDay = (props) => {
        const newData = props.slice(0, 10);

        const data = new Date(newData);
        const dia = data.getDate();
        return dia;
    }

    // retorno do mês 
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
            {isTaskConfirmEvent && <ConfirmEvent title='Confirmar registro' text='Deseja confirmar o registro?' onConfirm={handleConfirmReg}>
            </ConfirmEvent>}
            <C.TopAddContainer>
                <C.TopIconContainer>
                    <C.IconsContent>
                        <FontAwesomeIcon icon={faTurnUp} rotation={270} onClick={handleClickExit} />
                    </C.IconsContent>
                    <C.IconsContent>
                        <FontAwesomeIcon icon={faBell} onClick={handleClickConfiNotif} />
                    </C.IconsContent>
                </C.TopIconContainer>
                <C.TopAddTitle>
                    <Title>REGISTRAR ATIVIDADE</Title>
                </C.TopAddTitle>
            </C.TopAddContainer>

            <C.MainAddContainer>
                <C.InputContainer>
                    <C.DateContainer>
                        <C.DateContent>
                            <C.DayLabel>{handleDay(dataSelecionada)}</C.DayLabel>
                            <C.MonthLabel>{nomesDosMeses[handleMonth(dataSelecionada)]}</C.MonthLabel>
                        </C.DateContent>
                    </C.DateContainer>
                    <C.InputContent>
                        <Input type='text' bg='#fff' name='titulo' placeholder='Título' onChange={(e) => { handleChangeValues(e); setErro(""); }} ></Input>
                    </C.InputContent>
                    <C.InputContent>
                        <C.Select name='disciplina' onChange={handleChangeValues}>
                            <C.Option value={listNameDisciplina.length} disabled selected>Disciplina</C.Option>
                            {listNameDisciplina.map((item, index) => (
                                <C.Option key={index} value={index + 1}>
                                    {item.dis_nome}
                                </C.Option>
                            ))}
                        </C.Select>
                    </C.InputContent>
                    <C.InputContent>
                        <C.Select name='tipo' onChange={handleChangeValues}>
                            <C.Option value={listNameCategoria.length} disabled selected>Tipo de atividade</C.Option>
                            {listNameCategoria.map((item, index) => (
                                <C.Option key={index} value={index + 1}>
                                    {item.cat_nome}
                                </C.Option>
                            ))}
                        </C.Select>
                    </C.InputContent>
                    <C.InputContent>
                        <C.InputObs type='text' bg='#fff' name='observacao' placeholder='Observação' onChange={handleChangeValues} ></C.InputObs>
                    </C.InputContent>
                </C.InputContainer>
                <C.ButtonContainer>
                    <LabelErro>{erro}</LabelErro>
                    <Button text='SALVAR' onClick={handleClickButton}></Button>
                </C.ButtonContainer>
            </C.MainAddContainer>
        </C.AddContainer>
    )
}

export default AddTask;
