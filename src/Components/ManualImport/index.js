import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from '../Footer/index';
import { ManualIntegration } from "../Button";
import { QuestionInformation } from '../../animations/anim';
import Swal from "sweetalert2";


export default function ManualImport() {
    const [data, setData] = useState({ dateIni: '', dateFin: '', pages: '' });

    const handleForm = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    }
    const showInfo = () => {
        Swal.fire({
            title: 'Informações!',
            text: 'O campo página e direcionado ao numero da pagina que sera enviado, este numero deverá ser de 1 a 5 e cada importação carregará 1 numero de página apenas.',
        });
    }

    const showInfoDate = () => {
        Swal.fire({
            title: 'Informações!',
            text: 'Os parâmetros de importação são baseados na data da alta inicial e final do paciente.'
        })
    }

    return (
        <>
            <Navbar />
            <section>
                <div className="mt-32 z-10 flex items-center justify-center ">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className={`bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4`}>
                                <div className="sm:flex mt-5 sm:items-start">
                                    <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-xl text-center font-semibold leading-6 text-gray-900" id="modal-title">Importação de dados manual DRG</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-center mt-5 mb-2 text-steal-700">Selecione abaixo o período que sera importado os dados!</p>
                                        </div>
                                        <form className="mt-5 flex flex-wrap justify-around mr-10 ml-10 ">

                                            <div className="flex flex-col">
                                                <label htmlFor="date" className="text-sm flex flex-row text-gray-600 mb-0.5 pl-0.5" >
                                                    Data Inicial
                                                    <button type="button" className="ml-1" onClick={showInfoDate} >
                                                        <QuestionInformation />
                                                    </button>
                                                </label>
                                                <input type="date"
                                                    className="border w-36 border-gray-300 hover:border-slate-400 text-md rounded-sm pl-2 pr-2 shadow-sm"
                                                    required="yes"
                                                    name="dateIni"
                                                    value={data.dateIni}
                                                    onChange={handleForm}
                                                />
                                            </div>

                                            <div className="flex flex-col">
                                                <label htmlFor="date" className="text-sm flex flex-row text-gray-600 mb-0.5 pl-0.5">
                                                    Data Final
                                                    <button type="button" className="ml-1" onClick={showInfoDate} >
                                                        <QuestionInformation />
                                                    </button>
                                                </label>
                                                <input type="date"
                                                    className="border w-36 border-gray-300 hover:border-slate-400 text-md rounded-sm pl-2 pr-2 shadow-sm"
                                                    name="dateFin"
                                                    value={data.dateFin}
                                                    onChange={handleForm}
                                                />
                                            </div>

                                            <div className="flex flex-col mt-5">
                                                <label htmlFor="text" className="text-sm flex flex-row text-gray-600 mb-0.5 pl-0.5 ">
                                                    Página
                                                    <button type="button" className="ml-1" onClick={showInfo} >
                                                        <QuestionInformation />
                                                    </button>
                                                </label>
                                                <input type="text"
                                                    className="border w-36 border-gray-300 hover:border-slate-400 text-md pl-1.5 font-light rounded-sm shadow-sm"
                                                    name="pages"
                                                    value={data.pages}
                                                    onChange={handleForm}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <ManualIntegration dataAltaIni={data.dateIni} dataAltaFin={data.dateFin} page={data.pages} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}