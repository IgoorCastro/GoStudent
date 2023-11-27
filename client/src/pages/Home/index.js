import React, { useState } from 'react';
import Calendario from '../../components/Calendario';
import * as C from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarDays, faWallet, faClock } from '@fortawesome/free-solid-svg-icons';
import AddTask from '../../components/TaskAdd';
import TaskInfo from '../../components/TaskInfo';
import TaskWeekly from '../../components/TaskWeekly';
import { useCalendarContext } from '../../context/DataContext';

const Home = () => {

    const [selectedIcon, setSelectedIcon] = useState(false);

    // Contexto para controle da renderização do component 'AddTask'
    const { showAddTask, isTaskInfoVisible, isTaskAddVisible, isTaskWeeklyVisible } = useCalendarContext();

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
                    <C.AddTaskContent>
                        <C.Button position='left' border='#fb6e66' bg='#3282B8' color='#fff' fs='24px' onClick={toggleAddTask} >+</C.Button>
                    </C.AddTaskContent>
                    <Calendario />
                    <C.MessageContent>
                        <C.Label>
                            Texto aqui
                        </C.Label>
                    </C.MessageContent>
                </C.CalendarContent>
                <C.DateInfoContent>
                    {isTaskWeeklyVisible && (<TaskWeekly />)}
                    {isTaskInfoVisible && (<TaskInfo />)}
                    {isTaskAddVisible && (<AddTask />)}
                </C.DateInfoContent>

            </C.CalendarContainer>
        </C.Container >
    )
}

export default Home
