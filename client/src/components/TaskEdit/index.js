import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useCalendarContext } from '../../context/DataContext';
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import Button from '../Button';

const TaskEdit = () => {
    // Pegando useDataContext do contexto
    const { isTaskEditVisible, listDataSelecionada, closeTaskEdit, dataSelecionada } = useCalendarContext();

    // State para guardar as informações das input
    const [values, setValues] = useState({
        dataString: '',
        titleString: '',
        disciplinaString: '',
        tipoString: '',
        observacaoString: '',
        // outros campos do formulário aqui
    });
    const [lastListDataSelecionada, setLastListDataSelecionada] = useState();
    console.log("dataString: ", values);

    const handleChangeValues = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const handleClickButton = () => {
        // Formatação da data para o DB
        if (listDataSelecionada) {
            const dataHora = new Date(listDataSelecionada[0].eve_dataHora);
            // Convertendo a string para um objeto Date
            // Extraindo apenas a parte da data
            const newData = new Date(dataHora.getFullYear(), dataHora.getMonth(), dataHora.getDate());

            const dia = newData.getDate();
            const mes = newData.getMonth() + 1;
            const ano = newData.getFullYear();

            var data = `${ano}/${mes}/${dia}`;
        }
        else
            var data = dataSelecionada;
        console.log("Data: ", data);


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

        console.log("convertDate: " + dataString);
        return dataString;
    }

    const updateDateData = () => {
        setLastListDataSelecionada(listDataSelecionada[0].eve_dataHora);
        if (Array.isArray(listDataSelecionada) && isTaskEditVisible) {
            setValues({
                dataString: convertDate(listDataSelecionada[0].eve_dataHora),
                titleString: listDataSelecionada[0].eve_titulo,
                disciplinaString: listDataSelecionada[0].dis_id,
                tipoString: listDataSelecionada[0].cat_id,
                observacaoString: listDataSelecionada[0].eve_descricao,
                // outros campos do formulário aqui
            });
            //alert("ALERT");
        }
    }

    useEffect(() => { updateDateData() }, []);

    if (lastListDataSelecionada !== listDataSelecionada[0].eve_dataHora)
        updateDateData();




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
                    <C.Title color='#fff'>EDITAR</C.Title>
                    <C.DefaultA onClick={null}></C.DefaultA>
                </C.TopAddContent>
            </C.TopAddContainer>
            <C.MainAddCointainer>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>título:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='titulo' onChange={handleChangeValues} defaultValue={values.titleString} ></Input>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>disciplina:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='disciplina' onChange={handleChangeValues} defaultValue={values.disciplinaString} ></Input>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>tipo:</C.Label>
                    </C.AuxDiv>
                    <C.Select name='tipo' onChange={handleChangeValues} value={values.tipoString}>
                        <C.Option value='atividade' >1</C.Option>
                        <C.Option value='avaliação'>2</C.Option>
                        <C.Option value='trabalho'>3</C.Option>
                    </C.Select>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>data:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='data' onChange={handleChangeValues} defaultValue={values.dataString}></Input>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>observação:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='observacao' onChange={handleChangeValues} defaultValue={values.observacaoString} ></Input>
                </C.InputContent>
                <Button text='SALVAR' onClick={() => handleClickButton()}></Button>
            </C.MainAddCointainer>
        </C.AddContainer>

    )
}

export default TaskEdit