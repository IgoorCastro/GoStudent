import React, { useState, useEffect } from 'react';
import * as C from './styles';
import Axios from 'axios';
import { useCalendarContext } from '../../context/DataContext';
import Title from '../Title';

const Calendario = () => {
    const { showTaskInfo, showAddTask, listDataSelecionada, setListData, setData, setCalendarUpdt, updateCalendar, closeTaskAdd } = useCalendarContext();
    //setListData({});
    // console.log("listDataSelecionada: ", listDataSelecionada);
    // console.log("dataSelecionada: ", dataSelecionada);
    // --------------------------------- States ---------------------------------

    // Pega o dia/ mês atual do sistema
    const [mesAtual, setMesAtual] = useState(new Date().getMonth() + 1);
    const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());
    const [selectDate, setSelectDate] = useState(null);
    const [colorControl, setColorControl] = useState({});
    const [qntSemanas, setQntSemanas] = useState(null);
    //console.log("qntSemanas: ", qntSemanas);

    useEffect(() => {
        getCalendarColorControl();
    }, [updateCalendar]);

    // effect para pegar a quantidade de semanas do mês exibido
    useEffect(() => {
        // pega a quantidade de dias do mes/ ano exibido
        const numeroDeDias = getDaysInMonth(anoAtual, mesAtual);

        // indica em qual dia da semana o primeiro dia do mês cai (0 para domingo, 1 para segunda-feira, e assim por diante).
        const primeiroDiaSemana = new Date(anoAtual, mesAtual - 1, 1).getDay();

        // numero de semanas do mes atual
        const linhas = Math.ceil((numeroDeDias + primeiroDiaSemana) / 7);

        setQntSemanas(linhas);
    }, [anoAtual, mesAtual]);

    // --------------------------------- Variaveis estaticas de controle ---------------------------------
    // Cores de selação da data
    const selectDateColor = '#3282B8';
    const currentDateColor = 'rgb(66, 135, 245, 0.4)';

    // Array para controle do titulo
    // Varia de acordo com o mesAtual
    const nomesDosMeses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ];
    // --------------------------------- Funções de interação ---------------------------------

    // Função do botão prixmo mês
    const proximoMes = () => {
        if (mesAtual === 12) { //Verifica se o mês atual do calendario é Dezembro
            setMesAtual(1); //Se for volta para o mês 1 e avança +1 no anoAtual
            setAnoAtual(anoAtual + 1);
        } else {
            setMesAtual(mesAtual + 1);
        }
    };

    // Função do botão prixmo mês
    const mesAnterior = () => {
        if (mesAtual === 1) { //Verifica se o mês atual do calendario é Janeiro
            setMesAtual(12); //Se for volta para o mês 12 e recua -1 no anoAtual
            setAnoAtual(anoAtual - 1);
        } else {
            setMesAtual(mesAtual - 1);
        }
    };

    // Função para lidar com a seleção de um dia
    const handleSelecionarDia = (dia, mes, ano) => {
        return new Promise((resolve, reject) => {
            setSelectDate({ dia, mes, ano });
            setData(`${ano}/${mes}/${dia}`);

            Axios.get("http://localhost:3001/getDateData", {
                params: {
                    date: `${ano}/${mes}/${dia}`,
                },
            })
                .then((response) => {
                    setListData(response.data);
                    resolve(); // Resolvendo a Promise após setListData ser executado
                })
                .catch((e) => {
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
                    reject(e); // Rejeitando a Promise em caso de erro na requisição
                });
        });
    };

    const helpRequest = () => {
        alert("Desenvolver pagina de ajuda")
    }

    // --------------------------------- Funções principais ---------------------------------
    // Função responsavel por retornar a quantidade de dias de um determinado (ano, mês) sendo passado por parametro
    // Cada mês tem sua quantidade de dias
    const getDaysInMonth = (ano, mes) => {
        const date = new Date(ano, mes - 1, 1); //Pega o primeiro dia do mes (ex: 1/9/2023 : outubro)
        date.setMonth(date.getMonth() + 1); //Avança um mês (soma + 1 no mês, ex: 1/10/2023)
        date.setDate(date.getDate() - 1); //Volta um dia para pegar o ultimo dia do mes (ex: 31/9/2023)
        return date.getDate(); // Retorna apenas o dia
    };

    // Variaveis de controle de calendario
    const numeroDeDias = getDaysInMonth(anoAtual, mesAtual); // Chama a função getDaysInMonth para pegar quantos dias a no mês
    const primeiroDiaSemana = new Date(anoAtual, mesAtual - 1, 1).getDay(); // Armazena o dia da semana em que o mês começa (0 para domingo, 1 para segunda, etc.).
    const linhas = Math.ceil((numeroDeDias + primeiroDiaSemana) / 7); // Calcula a quantidade de linhas para o calendario (ex: numeroDeDias=30 + primeiroDiaSemana=4 / 7'dias da semana')

    // Função que verifica se o dia atual é igual ao dia que está sendo montado no calendario
    const isDiaAtual = (dia) => {
        const dataAtual = new Date(); // Pega o calendario do sistema
        const diaAtual = dataAtual.getDate(); // Pega o dia atual do calendario
        const mesAtualSelecionado = dataAtual.getMonth() + 1; // Pega o mês atual do sistema
        return dia === diaAtual && mesAtual === mesAtualSelecionado; // Compara o dia que está sendo montado com o dia atual, mesma coisa para o mes (retorna um boolean)
    };

    // Função para criar um array bidimensional para representar os dias do calendario    
    const criarArrayDeDias = () => {
        const dias = []; // Array que vai armazenar os dias do calendario
        for (let linha = 0; linha < linhas; linha++) { // Loop para percorrer as linhas do calendario calculada anteriormente (Quntidade de semanas do mês)
            const semana = []; // Para cada linha, criamos um array vazio para representar os dias dessa semana
            for (let diaDaSemana = 0; diaDaSemana < 7; diaDaSemana++) { // Loop para percorrer os dias da semana (0 a 6, representando domingo a sábado)
                const dia = linha * 7 + diaDaSemana - primeiroDiaSemana + 1; // Calculo do valor do dia atual (pode ser um valor positivo representando o dia do mês, ou null se estivermos antes do início do mês ou após o final do mês)
                semana.push(dia > 0 && dia <= numeroDeDias ? dia : null); // Monta o array com os dias calculados (de domingo a sabado) 
            }
            dias.push(semana);
            // Monta o array dia com os dias da array da semana  ex: 
            // [null, null, 1, 2, 3, 4, 5], // Primeira semana
            // [6, 7, 8, 9, 10, 11, 12],   // Segunda semana
            // [13, 14, 15, 16, 17, 18, 19],  // Terceira semana
            // [20, 21, 22, 23, 24, 25, 26],  // Quarta semana
            // [27, 28, 29, 30, null, null, null]  // Quinta semana)            
        }
        return dias;
    };

    const getCalendarColorControl = () => {
        Axios.get("http://localhost:3001/testData", {
        }).then((response) => {
            setColorControl(response.data);
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
    }

    const calendarColorControl = (dia, mes, ano) => {
        let repeatedDaysCount = 0;
        const dataAtual = dia ? dia + "/" + mes + "/" + ano : null;

        // Verificar se se colorControl recebeu retorno do banco e seu length é > 0
        if (colorControl.length > 0 && dataAtual) {
            let updatedColorControl = [...colorControl]; // Cria uma cópia do estado colorControl

            // Laço para ver quantas vezes a data se repete no retorno do banco
            for (let i = 0; i <= updatedColorControl.length - 1; i++) {
                if (convertDate(updatedColorControl[i].eve_dataHora) === dataAtual) {
                    repeatedDaysCount++;
                    updatedColorControl.splice(i, 1);
                    i--;
                }
            }
        }

        let color = 'rgb(242, 41, 59';
        switch (repeatedDaysCount) {
            case 1:
                return { background: color + ', 0.3)' };
            case 2:
                return { background: color + ', 0.5)' };
            case 3:
                return { background: color + ', 0.6)' };
            case 4:
                return { background: color + ', 0.7)' };
            default:
                return {};
        }

    }

    const convertDate = (date) => {
        let data = "";

        if (typeof date === 'object') {
            const { dia, mes, ano } = date;
            data = new Date(`${ano}/${mes}/${dia}`);

        } else
            data = new Date(date);

        const dia = data.getDate(); // Obter o ano como dia
        const mes = data.getMonth() + 1; // Mês (lembrando que Janeiro começa do zero)
        const ano = data.getFullYear(); // Obter o dia como ano

        // Formatar para o padrão dd/mm/yyyy
        const dataString = `${dia}/${mes}/${ano}`;

        //console.log("convertDate: " + dataString);
        return dataString;
    }

    const handlePreviousMonth = () => {
        mesAnterior();
        setCalendarUpdt();
        // getCalendarColorControl();
    }

    const handleNextMonth = () => {
        proximoMes();
        setCalendarUpdt();
        // getCalendarColorControl();
    }

    return (

        <C.MainContent>
            <C.CalendarioContainer>
                <C.TitleContent>
                    <C.Button position='left' onClick={handlePreviousMonth}>&lt;</C.Button>
                    <C.Title>{`${nomesDosMeses[mesAtual - 1]}  ${anoAtual}`}</C.Title>
                    <C.Button position='right' onClick={handleNextMonth}>&gt;</C.Button>
                </C.TitleContent>

                <C.CalendarioTable>
                    <C.CalendarioThread>
                        <C.CalendarioTr>
                            <C.CalendarioTdWeekly style={{ cursor: 'default' }}>Dom</C.CalendarioTdWeekly>
                            <C.CalendarioTdWeekly style={{ cursor: 'default' }}>Seg</C.CalendarioTdWeekly>
                            <C.CalendarioTdWeekly style={{ cursor: 'default' }}>Ter</C.CalendarioTdWeekly>
                            <C.CalendarioTdWeekly style={{ cursor: 'default' }}>Qua</C.CalendarioTdWeekly>
                            <C.CalendarioTdWeekly style={{ cursor: 'default' }}>Qui</C.CalendarioTdWeekly>
                            <C.CalendarioTdWeekly style={{ cursor: 'default' }}>Sex</C.CalendarioTdWeekly>
                            <C.CalendarioTdWeekly style={{ cursor: 'default' }}>Sab</C.CalendarioTdWeekly>
                        </C.CalendarioTr>
                    </C.CalendarioThread>
                    <C.CalendarioTBody>
                        {criarArrayDeDias().map((semana, index) => (
                            <C.CalendarioTr key={index}>
                                {semana.map((dia, index) => (
                                    <C.CalendarioTdDay
                                        key={index}
                                        onDoubleClick={() => {
                                            // verifica se há uma dataSeleciona
                                            if (listDataSelecionada && listDataSelecionada.length > 0 && convertDate(selectDate) === convertDate(listDataSelecionada[0].eve_dataHora)) {
                                                showTaskInfo();
                                                //console.log(listDataSelecionada.length);
                                            }
                                        }}
                                        onClick={() => {
                                            if (dia !== null) {
                                                // data atual do sistema
                                                const dataSistema = new Date();
                                                // objeto para o contrutor de Date interpretar (manter dia +1 para a seleção do dia atual)
                                                const dataSelecionada = `${anoAtual}-${mesAtual}-${dia + 1}`;
                                                // gera a data selecionada pelo usuario
                                                const dataAtual = new Date(dataSelecionada);

                                                handleSelecionarDia(dia, mesAtual, anoAtual);

                                                // verificar se a data do sistema é maior que a data selecionada
                                                if (dataAtual.getTime() > dataSistema.getTime())
                                                    showAddTask();
                                                else {
                                                    closeTaskAdd();
                                                    alert("Impossivel agendar em uma data passada");
                                                }
                                            }
                                        }}
                                        style={{
                                            ...dia === null ? { cursor: 'default' } : {}
                                        }}
                                    >
                                        <C.RadiusContent
                                            key={updateCalendar}
                                            day={dia}
                                            style={{
                                                // controle da altura do contorno da data
                                                ...(qntSemanas === 5) ? { height: '67%' } : { height: '80%' },
                                                // Controle de cores de acordo com a quantidade de atv cadastradas 
                                                ...colorControl.length > 0 ? calendarColorControl(dia, mesAtual, anoAtual) : {},
                                                // Data selecionada
                                                ...(selectDate && dia === selectDate.dia && mesAtual === selectDate.mes && anoAtual === selectDate.ano
                                                    ? { background: selectDateColor, border: '1px solid #fff', color: '#E7E7E7' } : {}),
                                                // Data atual
                                                ...dia !== null && isDiaAtual(dia) ? { background: currentDateColor, border: '1px solid #fff' } : {}
                                            }}>
                                            {dia !== null ? dia : ''}
                                        </C.RadiusContent>
                                    </C.CalendarioTdDay>
                                ))}
                            </C.CalendarioTr>
                        ))}
                    </C.CalendarioTBody>
                </C.CalendarioTable>
            </C.CalendarioContainer>
        </C.MainContent>
    );
};

export default Calendario;
