import React, { useEffect, useState } from "react";
import api from '../../Services/API/index';

//Handlers de error
import { ServerError, ServerOK, ServerSearch } from "./statusServer/errorStatus";


export default function CheckServer() {
    const [status, setStatus] = useState(<ServerSearch />);
    const [background, setBackground] = useState("bg-indigo-500");


    //Validaçao do servidor
    useEffect(() => {
        api.get('/')
            .then(res => {
                if (res.status === 200) {
                    setStatus(<ServerOK />);
                    setBackground('bg-green-600');
                }
            })
            .catch(e => {
                setStatus(<ServerError />);
                setBackground('bg-red-600');
            });
    }, [200])

    return (
        <>
            <div className={`justify-center items-center h-auto rounded-b-md py-2 shadow-2xl w-full ${background}`}>
                {status}
            </div>
        </>
    );
}