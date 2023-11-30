import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useCalendarContext } from '../../context/DataContext';
import Title from '../../components/Title';
import Label from '../../components/Label';

const TaskWeekly = () => {
    const [weeklyList, setWeeklyList] = useState({});
    console.log("weeklyList: ", weeklyList);
    const { isTaskWeeklyVisible } = useCalendarContext();

    const convertDate = (date) => {
        //console.log("E-convertDate: " + date);

        const data = new Date(date);

        const dia = data.getDate(); // Obter o ano como dia
        const mes = data.getMonth() + 1; // Mês (lembrando que Janeiro começa do zero)
        const ano = data.getFullYear(); // Obter o dia como ano

        // Formatar para o padrão dd/mm/yyyy
        const dataString = `${dia}/${mes}/${ano}`;

        return dataString;
    }

    useEffect(() => {
        if (isTaskWeeklyVisible) {
            const data = new Date();
            const limitData = new Date();

            limitData.setDate(data.getDate() + 7);

            // Ultima data para procurar registro
            const lastDate = limitData.getDate();
            const lastMonth = limitData.getMonth() + 1;
            const lastYear = limitData.getFullYear();

            const dia = data.getDate();
            const mes = data.getMonth() + 1;
            const ano = data.getFullYear();

            Axios.get("http://localhost:3001/getDateTaskWeekly", {
                params: {
                    date: ano + "-" + mes + "-" + dia + " 00:00:00",
                    lastDate: lastYear + "-" + lastMonth + "-" + lastDate + " 00:00:00",
                }
            }).then((response) => {
                setWeeklyList(response.data);
                //console.log("response: ", response);
            });
        }
    }, []);

    return (
        <C.WeeklyContainer>
            <C.TopAddContainer>
                <C.TopAddContent>
                    <Title>Resumo da seamana</Title>
                </C.TopAddContent>
            </C.TopAddContainer>

            <C.MainContainer>
                {weeklyList.length > 0 && (
                    weeklyList.map((item, index) => (
                        <C.LabelContent key={index}>
                            <Label color='#1B262C' hvColor='#E7E7E7' key={index}>{item.eve_titulo} - {convertDate(item.eve_dataHora)}</Label>
                        </C.LabelContent>
                    ))
                )}
            </C.MainContainer>
        </C.WeeklyContainer>
    )
}

export default TaskWeekly
