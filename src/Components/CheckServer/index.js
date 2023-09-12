import React, { useEffect, useState } from "react";
import axios from "axios";

//Handlers de error
import { ServerError, ServerOK, ServerSearch } from "./statusServer/errorStatus";


export default function CheckServer() {
    const [status, setStatus] = useState(<ServerSearch />);
    const [background, setBackground] = useState("bg-indigo-500");


    //Validaçao do servidor
    useEffect(() => {
        axios.get('http://localhost:3002/')
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