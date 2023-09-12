import React, { useState } from "react";
import Navbar from "../Navbar";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

export default function Contact() {
    const [data, setData] = useState({
        email: ' ',
        text: ' '
    });


    const handler = (event) => {

        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendMail = () => {

        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
        const USER_ID = process.env.REACT_APP_USER_ID;

        let templateParams = {
            contact: data.email,
            message: data.text
        };

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            USER_ID
        )
            .then(res => {
                if (res.status === 200) {
                    setData({ email: '', text: '' });
                    Swal.fire({ icon: 'success', title: "Dados enviados com sucesso!" });
                }
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Email não foi enviado contate o administrador!'
                })
            });
    }

    return (
        <>
            <Navbar />
            <section>
                <div class="mt-32 z-10 flex items-center justify-center ">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative bg-white transform overflow-hidden rounded-lg text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class=" bg-white  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex mt-3 sm:items-start">
                                    <div class="text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 class="text-xl text-center font-semibold leading-6 text-gray-900" id="modal-title">Formulário de contato</h3>
                                        <div className="flex items-center justify-center flex-col">
                                            <form class=" mt-2 w-full xl:w-96">
                                                <label for="email" className="block mb-2 mt-10 text-sm font-medium text-gray-900 ">Seu email</label>
                                                <input type="email" name="email" value={data.email} onChange={handler} id="email" aria-describedby="helper-text-explanation" className=" border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400" placeholder="name@email.com" />
                                                <label for="message" className="block mb-2 mt-8 text-sm font-medium text-gray-900 ">Duvidas ou sugestões</label>
                                                <textarea id="message" name="text" onChange={handler} value={data.text} rows="4" className=" p-2.5 w-full text-sm text-gray-900 rounded-lg border focus:ring-blue-500 focus:border-blue-500 border-gray-400 placeholder-gray-400 " placeholder="Deixe aqui sua duvida ou sugestão de melhoria!">
                                                </textarea>
                                            </form>
                                            <button onClick={sendMail} className="inline-flex mt-5 w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:w-auto">
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}