import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Calendario from '../../components/Calendario';
import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarDays, faWallet, faClock } from '@fortawesome/free-solid-svg-icons';
import AddTask from '../../components/TaskAdd';
import TaskInfo from '../../components/TaskInfo';
import TaskWeekly from '../../components/TaskWeekly';
import TaskEdit from '../../components/TaskEdit';
import Label from '../../components/Label';
import { useCalendarContext } from '../../context/DataContext';
import logo from '../../assets/logo1.png';

const Home = () => {

    const [selectedIcon, setSelectedIcon] = useState(true);

    // Contexto para controle da renderização do component 'AddTask'
    const { showAddTask, isTaskInfoVisible, isTaskAddVisible, isTaskWeeklyVisible, isTaskEditVisible, setListNameCtg, setListNameDscp,
        updateCalendar } = useCalendarContext();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCategorias", {
        }).then((response) => {
            setListNameCtg(response.data);
            //console.log("--response: ", response);
        }).catch((e) => {
            // tratamento de erro 'requests, response e configuração'
            if (e.response) {
                console.error("--erro status:", e.response.status);
                console.error("--dados do erro:", e.response.data);
            } else if (e.request) {
                // requisição feita, mas não houve resposta do servidor
                console.error("Sem resposta do servidor:", e.request);
            } else {
                // erro ao configurar a requisição
                console.error("--erro requisição:", e.message);
            }
        });

        Axios.get("http://localhost:3001/getDisciplinas", {
        }).then((response) => {
            setListNameDscp(response.data);
            //console.log("--response: ", response.data);
        }).catch((e) => {
            // tratamento de erro 'requests, response e configuração'
            if (e.response) {
                console.error("--erro status:", e.response.status);
                console.error("--dados do erro:", e.response.data);
            } else if (e.request) {
                // requisição feita, mas não houve resposta do servidor
                console.log("Sem resposta do servidor:", e.request);
            } else {
                // erro ao configurar a requisição
                console.error("--erro requisição:", e.message);
            }
        });
    }, []);

    const toogleCalendarIcon = () => {
        setSelectedIcon(!selectedIcon);
    }

    // Toggle de controle da da box Adicionar tarefa
    const toggleAddTask = () => {
        console.log('Função adicionar tarefa');
        showAddTask();
    };



    return (
        <C.Container>
            <C.NavbarContainer>
                <C.NavbarContent>
                    <C.LogoContainer>
                        <C.Img src={logo} />
                    </C.LogoContainer>
                    <C.IconGroup>
                        <C.IconContent
                            selected={selectedIcon}
                        >
                            <FontAwesomeIcon icon={faCalendarDays} onClick={toogleCalendarIcon} />
                        </C.IconContent>
                        <C.IconContent>
                            <FontAwesomeIcon icon={faWallet} />
                        </C.IconContent>
                        <C.IconContent>
                            <FontAwesomeIcon icon={faClock} />
                        </C.IconContent>
                    </C.IconGroup>
                    <C.IconContent>
                        <FontAwesomeIcon icon={faUser} />
                    </C.IconContent>
                </C.NavbarContent>
            </C.NavbarContainer>
            <C.MainContent>
                <C.CalendarContainer>
                    <C.CalendarContent>
                        <Calendario />
                        <C.MessageContent>
                            <Label>
                                Bem vindo de volta aluno
                            </Label>
                            <Label>
                                Mantenha seu calendario sempre atualizado
                            </Label>
                        </C.MessageContent>
                    </C.CalendarContent>
                </C.CalendarContainer>
                <C.DateInfoContent>
                    {isTaskWeeklyVisible && (<TaskWeekly />)}
                    {isTaskInfoVisible && (<TaskInfo />)}
                    {isTaskEditVisible && (<TaskEdit />)}
                    {isTaskAddVisible && (<AddTask />)}
                </C.DateInfoContent>
            </C.MainContent>
        </C.Container >
    )
}

export default Home
