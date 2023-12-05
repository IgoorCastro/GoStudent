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

const Home = () => {

    const [selectedIcon, setSelectedIcon] = useState(false);

    // Contexto para controle da renderização do component 'AddTask'
    const { showAddTask, isTaskInfoVisible, isTaskAddVisible, isTaskWeeklyVisible, isTaskEditVisible, setConvertIdCtg } = useCalendarContext();

    useEffect(() => {
        Axios.get("http://localhost:3001/getCategorias", {
        }).then((response) => {
            setConvertIdCtg(response.data);
            console.log("--response: ", response);
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
            <C.Navbar>
                <C.NavbarContent>
                    <C.IconContentLogo>
                        LG
                    </C.IconContentLogo>
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
            </C.Navbar>
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
                <C.DateInfoContent>
                    {isTaskWeeklyVisible && (<TaskWeekly />)}
                    {isTaskInfoVisible && (<TaskInfo />)}
                    {isTaskEditVisible && (<TaskEdit />)}
                    {isTaskAddVisible && (<AddTask />)}
                </C.DateInfoContent>

            </C.CalendarContainer>
        </C.Container >
    )
}

export default Home
