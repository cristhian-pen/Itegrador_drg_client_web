import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { activatedLogs, deactivateLogs, controlDate } from '../../Engine/index';
import { IntButton, DesButton } from '../Button/index';

//iniciador
let timer;

export default function Integrador() {

    //Armazena o estado dos botoes
    const [state, setState] = useState(() => {
        const storeValue = localStorage.getItem('buttonState');
        return storeValue ? JSON.parse(storeValue) : false
    });
    //armazena o estado inicial das funções 
    const [isActive, setIsActive] = useState(() => {
        const activeValue = sessionStorage.getItem('intervalActive');
        return activeValue ? JSON.parse(activeValue) : false
    });

    //Armazenamento do swap dos botões
    useEffect(() => {
        localStorage.setItem("buttonState", JSON.stringify(state))
    }, [state]);


    //Estado da função interval
    useEffect(() => {
        sessionStorage.setItem('intervalActive', JSON.stringify(isActive));
        if (isActive) {
            //Inicia a itegração diaria
            timer = setInterval(() => { timerUp() }, 30000);
        }
        return () => {
            //limpar a integração
            clearInterval(timer);
        }
    }, [isActive]);

    //valida condições de horario diario para integrar
    const timerUp = () => { controlDate(); }

    //Desativa funções e botões
    const timerDown = () => {
        //Informa que a função foi pausada
        Swal.fire({ icon: 'warning', text: "Integração Pausada!", timer: 2000 });
        //limpa o estado
        setState(' ')
        //Grava logs
        deactivateLogs();
        //pausa a integração
        setIsActive(false);
    }

    //Integração
    const integra = () => {

        Swal.fire({
            title: 'Deseja Prosseguir com a ação?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',

            confirmButtonText: 'Sim'
        })
            .then(res => {
                if (res.isConfirmed) {

                    let timerInterval

                    Swal.fire({
                        title: 'Integrador Drg',
                        html: 'Iniciando.....',
                        timer: 2000,
                        timerProgressBar: true,

                        didOpen: () => {
                            Swal.showLoading()
                            timerInterval = setInterval(() => {
                            }, 100)
                        },

                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    });

                    try {
                        axios.get('http://localhost:3002/integra')
                            .then(res => {
                                if (res.status === 200) {

                                    //inicia o integrador
                                    setIsActive(true);

                                    //Grava os logs
                                    activatedLogs();

                                    //Ativa o botão
                                    setState(prevState => !prevState);

                                    Swal.fire({ icon: 'success', title: 'Integração criada.' });
                                }
                            })
                    } catch (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Integração Falhou ',
                            text: error.message,
                            timer: 3000
                        });

                        //Limpa botão
                        setState(' ');

                    }
                }
            })
    }


    return (
        <>
            {
                !state ?
                    <DesButton timerDown={timerDown} />
                    :
                    <IntButton integra={integra} />

            }
        </>
    );

}