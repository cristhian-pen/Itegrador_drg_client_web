import React, { useLayoutEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from '../Footer/index';
import api from '../../Services/API/index';


export default function Logs() {
    const [data, setData] = useState([]);

    useLayoutEffect(() => {

        api.get('/logsExecucao')
            .then(res => {
                setData(res.data.info);
            })
            .catch(e => {
                console.log(e);

            })
    }, 100);

    return (
        <>
            <Navbar />
            <section>
                <div className="mt-32 z-10 flex items-center justify-center ">
                    <div className="flex items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative h-96 bg-white transform overflow-hidden rounded-lg text-center shadow-xl transition-all sm:my-8  sm:w-full sm:max-w-lg">
                            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex mt-3 sm:items-start">
                                    <div className="text-center flex flex-col justify-center items-center sm:mt-0 sm:text-left">
                                        <h3 className="text-xl text-center font-semibold leading-6 text-gray-900" id="modal-title">Logs da Aplicação</h3>
                                        <div className="mt-5 overflow-auto h-72 flex justify-center items-center shadow-lg">
                                            {
                                                data.length > 0
                                                    ?
                                                    <div className="flex sticky mt-2 mt-10 mb-10 flex-col-reverse">
                                                        {
                                                            Object.values(data).map(
                                                                item => <ul key={item.id}>
                                                                    <li className="text-sm static top-9 ml-10 mt-5 mr-10 font-semibold text-center text-gray-500">{item.LOGS}</li>
                                                                </ul>
                                                            )
                                                        }
                                                    </div>

                                                    :

                                                    <p className="text-sm ml-10 mr-10 font-semibold text-center text-gray-500"> Sem logs no momento.... </p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}