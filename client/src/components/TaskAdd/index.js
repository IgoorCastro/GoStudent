import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useCalendarContext } from '../../context/DataContext';
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import Button from '../Button';

const AddTask = () => {
    // Pegando useDataContext do contexto
    const { isTaskAddVisible, listDataSelecionada, closeTaskAdd, dataSelecionada } = useCalendarContext();
    console.log(listDataSelecionada);

    // State para guardar as informações das input
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        //console.log(value.target.value);
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleClickButton = () => {
        // Formatação da data para o DB
        if (dataSelecionada) {
            var data = dataSelecionada;
        }


        console.log("Data: ", data);

        Axios.post("http://localhost:3001/register", {
            titulo: values.titulo,
            disciplina: values.disciplina,
            tipo: values.tipo,
            data: data,
            observacao: values.observacao
        }).then((response) => {
            console.log(response);
        });
        //console.log(values);

        alert("Registro concluido");
        closeTaskAdd();
    }

    const convertDate = (date) => {
        //console.log("E-convertDate: " + date);

        const data = new Date(date.substring(0, 10));

        const dia = data.getDate(); // Obter o ano como dia
        const mes = data.getMonth() + 1; // Mês (lembrando que Janeiro começa do zero)
        const ano = data.getFullYear(); // Obter o dia como ano

        // Formatar para o padrão dd/mm/yyyy
        const dataString = `${dia}/${mes}/${ano}`;

        //console.log("convertDate: " + dataString);
        return dataString;
    }

    var dataString = null;
    //console.log("if-TaskAdd: ", dataSelecionada);
    // console.log("if-TaskAdd: ", listDataSelecionada[0].eve_dataHora);
    if (listDataSelecionada && convertDate(listDataSelecionada[0].eve_dataHora) === dataSelecionada) {
        const data = new Date(listDataSelecionada[0].eve_dataHora);

        const dia = data.getDate(); // Obter o ano como dia
        const mes = data.getMonth() + 1; // Mês (lembrando que Janeiro começa do zero)
        const ano = data.getFullYear(); // Obter o dia como ano

        // Formatar para o padrão dd/mm/yyyy
        dataString = `${dia}/${mes}/${ano}`;
    }
    else {
        // Formatar para o padrão dd/mm/yyyy
        let parts = dataSelecionada.split('/'); // Dividindo a string nos separadores '/'

        // Rearranjando as partes para formar a nova string invertida
        let invertedDate = parts[2] + '/' + parts[1] + '/' + parts[0];
        dataString = invertedDate;
    }



    const handleClickConfiNotif = () => {
        alert("handleClickConfiNotif");
    }

    const handleClickExit = () => {
        closeTaskAdd();
    }

    // ---------- LOG -----------
    //console.log("Data selecionada: ", dataString);
    //console.log("Data selecionada: ", dataSelecionada);

    return (
        <C.AddContainer>
            <C.TopAddContainer>
                <C.TopIconsContent>
                    <C.IconsContent>
                        <FontAwesomeIcon icon={faTurnUp} rotation={270} onClick={handleClickExit} />
                    </C.IconsContent>
                    <C.IconsContent>
                        <FontAwesomeIcon icon={faBell} onClick={handleClickConfiNotif} />
                    </C.IconsContent>
                </C.TopIconsContent>
                <C.TopAddContent>
                    <C.DefaultA onClick={null}></C.DefaultA>
                    <C.Title color='#fff'>REGISTRAR</C.Title>
                    <C.DefaultA onClick={null}></C.DefaultA>
                </C.TopAddContent>
            </C.TopAddContainer>
            <C.MainAddCointainer>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>título:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='titulo' onChange={handleChangeValues} ></Input>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>disciplina:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='disciplina' onChange={handleChangeValues} ></Input>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>tipo:</C.Label>
                    </C.AuxDiv>
                    <C.Select name='tipo' onChange={handleChangeValues}>
                        <C.Option value='atividade' >ATIVIDADE</C.Option>
                        <C.Option value='avaliação'>AVALIAÇÃO</C.Option>
                        <C.Option value='trabalho'>TRABALHO</C.Option>
                    </C.Select>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>data:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='data' onChange={handleChangeValues} value={dataString}></Input>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>observação:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='observacao' onChange={handleChangeValues} ></Input>
                </C.InputContent>
                <Button text='SALVAR' onClick={() => handleClickButton()}></Button>
            </C.MainAddCointainer>
        </C.AddContainer>

    )
}

export default AddTask
