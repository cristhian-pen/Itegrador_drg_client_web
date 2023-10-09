import Navbar from '../Navbar/index';
import Footer from '../Footer/index';
import { BtnDelete } from '../Button/index';
import { useState } from 'react';


export default function DeleteImport() {

    const [form, setForm] = useState({ dataDeleteIni: '', dataDeleteFin: '' });

    const deleteForm = e => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
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
                                        <h3 className="text-xl text-center font-semibold leading-6 text-gray-900" id="modal-title">Remoção de dados integrados</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-center my-5 text-steal-500">Selecione a data dos registros que deverá ser excluido.</p>
                                            <p className="text-sm text-center my-5 text-red-700">Após a exclusão não sera possível recuperar os dados integrados, caso seja necessario utilize a aba "Importação Manual".</p>
                                        </div>
                                        <form className="mt-10 mb-5 flex flex-wrap justify-center">
                                            <div className='flex flex-col mr-5'>
                                                <label htmlFor="date" className="text-sm text-gray-600 mb-0.5 pl-1" >Data Inicial</label>
                                                <input type="date"
                                                    className="border w-40 border-gray-300 hover:border-slate-400 text-md rounded-sm pl-2 pr-2 shadow-sm"
                                                    required="yes"
                                                    value={form.dataDeleteIni}
                                                    name='dataDeleteIni'
                                                    onChange={deleteForm}
                                                />
                                            </div>
                                            <div className='flex flex-col mr-5'>
                                                <label htmlFor="date" className="text-sm text-gray-600 mb-0.5 pl-1" >Data Final</label>
                                                <input type="date"
                                                    className="border w-40 border-gray-300 hover:border-slate-400 text-md rounded-sm pl-2 pr-2 shadow-sm"
                                                    required="yes"
                                                    value={form.dataDeleteFin}
                                                    name='dataDeleteFin'
                                                    onChange={deleteForm}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <BtnDelete dataDeleteIni={form.dataDeleteIni} dataDeleteFin={form.dataDeleteFin} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}