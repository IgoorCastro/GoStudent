import React, { createContext, useContext, useState } from 'react';

// --------- Contexto global: Data selecionada e controle do component TaskInfo ---------------
// Contexto para controlar a visibilidade do componente e a data selecionada
const DataContext = createContext();

// Hook personalizado para acessar o contexto
export const useCalendarContext = () => {
    return useContext(DataContext);
};

// Componente de contexto que manterá o dado e a visibilidade
export const DataProvider = ({ children }) => {
    const [listDataSelecionada, setListDataSelecionada] = useState(null);
    const [dataSelecionada, setDataSelecionada] = useState(null);
    const [isTaskInfoVisible, setIsTaskInfoVisible] = useState(false);
    const [isTaskAddVisible, setIsTaskAddVisible] = useState(false);
    const [isTaskWeeklyVisible, setIsTaskWeeklVisible] = useState(true);
    const [isTaskEditVisible, setIsTaskEditVisible] = useState(null);

    const setListData = (listData) => {
        // Caso a lista esteja vazia, setar apenas a data selecionada
        if (listData.length > 0)
            setListDataSelecionada(listData);
        //console.log("Context: ", listData);
    };

    const setData = (data) => {
        setDataSelecionada(data);
        //console.log("(context 'setData': ", dataSelecionada);
    }

    const showTaskEdit = () => {
        setIsTaskInfoVisible(false);
        setIsTaskAddVisible(false);
        setIsTaskWeeklVisible(false);
        setIsTaskEditVisible(true); // Mostrar o componente quando selecionado o icone de edição
    }

    const closeTaskEdit = () => {
        setIsTaskEditVisible(false);
        setIsTaskWeeklVisible(true);
    }

    const showTaskInfo = () => {
        setIsTaskInfoVisible(true); // Mostrar o componente quando a data for selecionada
        setIsTaskAddVisible(false);
        setIsTaskWeeklVisible(false);
        setIsTaskEditVisible(false);
    }

    const closeTaskInfo = () => {
        setIsTaskInfoVisible(false);
        setIsTaskWeeklVisible(true);
    }

    const showAddTask = () => {
        //console.log("showAddTask");
        setIsTaskInfoVisible(false); // Fecha o component 'TaskInfo'
        setIsTaskAddVisible(true); // Mostra o component 'TaskAdd'
        setIsTaskWeeklVisible(false);
        setIsTaskEditVisible(false);
    }

    const closeTaskAdd = () => {
        setIsTaskAddVisible(false);
        setIsTaskWeeklVisible(true);
    }

    const showWeeklyTask = () => {
        setIsTaskWeeklVisible(true);
        setIsTaskInfoVisible(false);
        setIsTaskAddVisible(false);
        setIsTaskEditVisible(false);
    }

    const closeTaskWeekly = () => {
        setIsTaskWeeklVisible(false);
    }

    const toggleComponentVisibility = () => {
        setIsTaskInfoVisible(prevState => !prevState);
    };

    return (
        <DataContext.Provider value={{
            listDataSelecionada, setListData, dataSelecionada, setData, isTaskInfoVisible, toggleComponentVisibility,
            isTaskAddVisible, showAddTask, showTaskInfo, closeTaskInfo, closeTaskAdd, isTaskWeeklyVisible, showWeeklyTask, closeTaskWeekly,
            isTaskEditVisible, showTaskEdit, closeTaskEdit
        }}>
            {children}
        </DataContext.Provider>
    );
};