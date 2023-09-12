import React from "react";
import Navbar from "../Navbar";
import Integrador from "../Integrador";
import CheckServer from "../CheckServer";

export default function Client() {
    return (
        <>
            <Navbar />
            <section>
                <div className="mt-32 z-10 flex items-center justify-center ">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className={`bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4`}>
                                <div className="sm:flex mt-16 sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-xl text-center font-semibold leading-6 text-gray-900" id="modal-title">Bem vindo ao Integrador de dados DRG</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-center text-gray-500">Para iniciar a integração, clique no botão abaixo. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white px-4 py-3 items-center flex flex-col justify-center sm:flex sm:flex-row-reverse sm:px-6">
                                <Integrador />
                            </div>
                            <CheckServer />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}