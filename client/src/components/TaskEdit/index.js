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
    console.log("Context - listDataSelecionada: ", listDataSelecionada);

    // State para guardar as informações das input
    const [values, setValues] = useState({
        id: listDataSelecionada[0].eve_id,
        dataString: listDataSelecionada[0].eve_dataHora,
        titleString: listDataSelecionada[0].eve_titulo,
        disciplinaString: listDataSelecionada[0].dis_id,
        tipoString: listDataSelecionada[0].cat_id,
        observacaoString: listDataSelecionada[0].eve_descricao,
        // outros campos do formulário aqui
    });
    console.log("--values: ", values);

    const [lastListDataSelecionada, setLastListDataSelecionada] = useState();
    const [erro, setErro] = useState("");
    //onsole.log("dataString: ", values);

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

        showTaskConfirmEvent();
    }

    const handleConfirmEdit = () => {
        const fragmentDate = values.dataString.split('/');
        const dateToDb = fragmentDate[2] + '/' + fragmentDate[1] + '/' + fragmentDate[0];;

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
            //alert("ALERT");
        }
    }

    useEffect(() => { updateDateData() }, []);

    if (lastListDataSelecionada !== listDataSelecionada[0].eve_dataHora) {
        updateDateData();
    }




    const handleClickConfiNotif = () => {
        alert("handleClickConfiNotif");
    }

    const handleClickExit = () => {
        closeTaskEdit();
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
                <C.TopAddContent>
                    <C.DefaultA onClick={null}></C.DefaultA>
                    <Title>EDITAR</Title>
                    <C.DefaultA onClick={null}></C.DefaultA>
                </C.TopAddContent>
            </C.TopAddContainer>
            <C.MainAddCointainer>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>título:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='titleString' onChange={(e) => { handleChangeValues(e); setErro(""); }} defaultValue={values.titleString} ></Input>
                </C.InputContent>
                <C.InputContent>
                    <C.Select name='disciplina' onChange={handleChangeValues}>
                        <C.Option value='1' disabled selected>Disciplina</C.Option>
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
                    <C.Select name='tipo' onChange={handleChangeValues}>
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
                        <C.Label>data:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='dataString' value={values.dataString}></Input>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>observação:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='observacaoString' onChange={handleChangeValues} defaultValue={values.observacaoString} ></Input>
                </C.InputContent>
                <LabelErro>{erro}</LabelErro>
                <Button text='SALVAR' onClick={handleClickButton}></Button>
            </C.MainAddCointainer>
        </C.AddContainer>

    )
}

export default TaskEdit
