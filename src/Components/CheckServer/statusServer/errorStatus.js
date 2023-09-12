import React from "react";
import { AnimSearch } from "../../../animations/anim";



export const ServerError = () => {
    return (
        <p className="text-sm font-semibold text-white">
            Servidor não está funcionando!
        </p>
    );
}

export const ServerOK = () => {
    return (
        <p className="text-sm font-semibold text-white">
            Servidor está funcionando!
        </p>
    );
}

export const ServerSearch = () => {
    return (
        <AnimSearch />
    );
}
