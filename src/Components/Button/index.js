


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