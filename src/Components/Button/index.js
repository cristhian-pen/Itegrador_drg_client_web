import Swal from 'sweetalert2';
import api from '../../Services/API/index';
import { deletaIntegraLogs, manualIntegraLogs } from '../../Engine/index';


export const IntButton = ({ integra }) => {
    return (
        <button type="button" onClick={integra} className={"inline-flex mb-10 mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-300 sm:ml-3 sm:w-auto"}>
            Iniciar integração
        </button>
    );
}

export const DesButton = ({ timerDown }) => {
    return (
        <button type="button" onClick={timerDown} className={"inline-flex mb-10 mt-5 w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-300 bg-red- sm:ml-3 sm:w-auto"}>
            Parar Integração
        </button>
    );
}

export const ManualIntegration = ({ dataAltaIni, dataAltaFin, page }) => {




    const integraManual = async () => {

        //Alerta de confirmação
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
                        api.post('/integra/manual', {
                            dataAltaIni: dataAltaIni,
                            dataAltaFin: dataAltaFin,
                            page: page,
                        })
                            .then(res => {
                                if (res.status === 200) {
                                    Swal.fire({
                                        title: 'Dados gravados com sucesso!',
                                        icon: 'success',
                                        showConfirmButton: false
                                    });

                                    //Grava logs integrados manualmente
                                    manualIntegraLogs();

                                }
                            })
                    } catch (error) {

                        Swal.fire({
                            title: 'Ocorreu um erro na integração',
                            icon: 'error',
                            text: 'Erro: ' + error.message,
                            showConfirmButton: false
                        });
                    }
                }
            })
    }


    return (
        <button type="button"
            className="inline-flex mb-5 mt-10 w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:w-auto"
            onClick={integraManual}
        >
            Gravar Dados
        </button>
    );
}

export const BtnDelete = ({ dataDeleteIni, dataDeleteFin }) => {


    const dataDelete = () => {

        //Alerta de confirmação
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
                        title: 'Integrador DRG...',
                        html: 'Deletando.....',
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
                    })
                    try {
                        api.post('/integra/delete', {
                            dataIntegracaoIni: dataDeleteIni,
                            dataIntegracaoFin: dataDeleteFin
                        })
                            .then(res => {
                                if (res.status === 200) {
                                    Swal.fire({
                                        title: 'Dados deletados com sucesso!',
                                        icon: 'success',
                                        showConfirmButton: false
                                    });

                                    //Grava logs de deleção
                                    deletaIntegraLogs();

                                }
                            })
                    } catch (error) {
                        Swal.fire({
                            icon: 'error',
                            text: 'Ocorreu um erro de sistema ' + error.message,
                            showConfirmButton: false
                        });
                    }
                }
            })
    }

    return (
        <button type="button"
            className="inline-flex mb-5 mt-10 w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 sm:w-auto"
            onClick={dataDelete}
        >
            Deletar Dados
        </button>
    );
}