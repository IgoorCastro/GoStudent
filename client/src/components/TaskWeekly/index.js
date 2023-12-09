import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useCalendarContext } from '../../context/DataContext';
import Title from '../../components/Title';

const TaskWeekly = () => {
    const [weeklyList, setWeeklyList] = useState({});
    const { isTaskWeeklyVisible } = useCalendarContext();

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

    const convertDate = (date) => {

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
                console.log("response: ", response);
            }).catch((e) => {
                // tratamento de erro 'requests, response e configuração'
                if (e.response) {
                    console.error("--erro status:", e.response.status);
                    console.error("--dados do erro:", e.response.data);
                } else if (e.request) {
                    // requisição feita, mas não houve resposta do servidor
                    console.e("Sem resposta do servidor:", e.request);
                } else {
                    // erro ao configurar a requisição
                    console.error("--erro requisição:", e.message);
                }
            });
        }
    }, []);

    const handleDay = (props) => {
        const newData = props.eve_dataHora.slice(0, 10);

        const data = new Date(newData);
        const dia = data.getDate();
        return dia + 1;
    }
    const handleMonth = (props) => {
        const newData = props.eve_dataHora.slice(0, 10);

        const data = new Date(newData);
        const mes = data.getMonth();
        return mes;
    }

    return (
        <C.WeeklyContainer>
            <C.TopWeeklyContainer>
                <C.TopIconContainer>
                    <C.TopIconContent><FontAwesomeIcon icon={faCircleInfo} /></C.TopIconContent>
                </C.TopIconContainer>
                <C.TopAddTitle>
                    <Title>Resumo da semana</Title>
                </C.TopAddTitle>
            </C.TopWeeklyContainer>

            <C.MainContainer>
                <C.MainContent>
                    {weeklyList.length > 0 && (
                        weeklyList.map((item, index) => (
                            // <C.LabelContent key={index}>
                            //     <Label color='#1B262C' hvColor='#E7E7E7' key={index}>{item.eve_titulo} - {convertDate(item.eve_dataHora)}</Label>
                            // </C.LabelContent>
                            <C.DataInfoContainer>
                                <C.DataInfoContent>
                                    <C.DataContainer>
                                        <C.DayLabel>
                                            {handleDay(item)}
                                        </C.DayLabel>
                                        <C.MonthLabel>
                                            {nomesDosMeses[handleMonth(item)]}
                                        </C.MonthLabel>
                                    </C.DataContainer>
                                    <C.Divider />
                                    <C.InfoContainer>
                                        <C.TitleLabel>
                                            {item.eve_titulo}
                                        </C.TitleLabel>
                                        <C.InfoLabel>
                                            {item.eve_descricao}
                                        </C.InfoLabel>
                                    </C.InfoContainer>
                                </C.DataInfoContent>
                            </C.DataInfoContainer>
                        ))
                    )}
                </C.MainContent>
            </C.MainContainer>
        </C.WeeklyContainer>
    )
}

export default TaskWeekly
