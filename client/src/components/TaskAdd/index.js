import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useCalendarContext } from '../../context/DataContext';
import Axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTurnUp } from '@fortawesome/free-solid-svg-icons';
import ConfirmEvent from '../../components/ConfirmEvent';
import Input from '../Input';
import Button from '../Button';
import LabelErro from '../../components/LabelErro';

const AddTask = () => {
    // Pegando useDataContext do contexto
    const { convertIdCategoria, closeTaskAdd, dataSelecionada, isTaskConfirmEvent, showTaskConfirmEvent } = useCalendarContext();
    const [erro, setErro] = useState("");

    // State para guardar as informações das input
    const [values, setValues] = useState({
        data: '',
        tipo: 1,
        disciplina: 1,
        titulo: '',
        observacao: '',
    });
    console.log("--values: ", values);

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

    useEffect(() => {
        setValues(prevValues => ({
            ...prevValues,
            data: dataSelecionada
        }));
    }, [dataSelecionada]);


    const handleChangeValues = (value) => {
        console.log("value.target.name: ", value.target.name);
        console.log("value.target.value: ", value.target.value);

        setValues(prevValues => ({
            ...prevValues,
            [value.target.name]: value.target.value,
        }));
    }

    const handleClickButton = () => {
        //Mensagens de erro
        if (!values.titulo) {
            setErro("Título obrigatório");
            return;
        }

        showTaskConfirmEvent();
    }

    const handleConfirmReg = () => {
        // Formatação da data para o DB
        if (dataSelecionada) {
            var data = dataSelecionada;
        }

        Axios.post("http://localhost:3001/register", {
            titulo: values.titulo,
            disciplina: values.disciplina,
            tipo: values.tipo,
            data: values.data,
            observacao: values.observacao
        }).then((response) => {
            console.log("--response: ", response);
        });

        alert("Registro concluidos");
        closeTaskAdd();
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
            {isTaskConfirmEvent && <ConfirmEvent title='Confirmar registro' text='Deseja confirmar o registro?' onConfirm={handleConfirmReg}>
            </ConfirmEvent>}
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
                    <Input type='text' bg='#fff' name='titulo' onChange={(e) => { handleChangeValues(e); setErro(""); }} ></Input>
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
                    <Input type='text' bg='#fff' name='data' value={convertDate(dataSelecionada)}></Input>
                </C.InputContent>
                <C.InputContent>
                    <C.AuxDiv>
                        <C.Label>observação:</C.Label>
                    </C.AuxDiv>
                    <Input type='text' bg='#fff' name='observacao' onChange={handleChangeValues} ></Input>
                </C.InputContent>
                <LabelErro>{erro}</LabelErro>
                <Button text='SALVAR' onClick={handleClickButton}></Button>
            </C.MainAddCointainer>
        </C.AddContainer>
    )
}

export default AddTask
