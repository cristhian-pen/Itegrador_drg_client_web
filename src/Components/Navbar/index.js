import React, { useEffect, useState } from "react";
import imgPerfil from '../../assets/drg-image.png';
import { DarkMode } from "../../animations/anim";
import { darkColors, lightColors } from "../../colors";

const normalDirection = 1;
const reverseDirection = - 1;

export default function Navbar() {

    const [bgstate, setBgState] = useState({ bg: lightColors.light, title: lightColors.text_light, hover: lightColors.hover_light, titleHover: lightColors.textHover_light });

    const [animation, setAnimation] = useState({ isStopped: true, isPaused: false, direction: -1 });


    //Armazena estado do darkMode
    const [isActive, setIsActive] = useState(() => {
        const storage = localStorage.getItem('activeDarkMode');
        return storage ? JSON.parse(storage) : false
    });

    useEffect(() => {
        //guarda o estado das cores
        localStorage.setItem('activeDarkMode', JSON.parse(isActive));

        //Valida e seta o darkmode
        setAnimation({ direction: animation.direction === normalDirection ? reverseDirection : normalDirection });

        if (isActive) {
            //Darkmode Ativo
            setIsActive(true)
            //Seta as cores do darkmode
            setBgState({ bg: darkColors.dark, title: darkColors.text_dark, hover: darkColors.hover_dark, titleHover: darkColors.textHover_dark });
            //Diz para a animação a posição que deve estar
            setAnimation({ direction: - 1 });

        }

        return () => {
            //retorna par o estado inicial
            setBgState(false);
            //Retorna a animação para o estado inicial
            setAnimation({ direction: 1 })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [isActive])


    const toggleDarkMode = () => {

        setIsActive(true);
        if (isActive === true) {
            setIsActive(false);
        }

        if (animation.direction === 1) {
            setAnimation({
                ...animation,
                isStopped: false,
                direction: animation.direction === normalDirection ?
                    reverseDirection : normalDirection
            })
        }
    }

    return (
        <nav className={`${bgstate.bg} shadow-lg ${bgstate.border}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img src={imgPerfil} alt="" className="h-8 w-10  rounded-lg mr-5" />
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="/" className={` ${bgstate.hover} ${bgstate.titleHover} rounded-md px-3 py-2 text-sm font-medium ${bgstate.title}`}>Home</a>
                                <a href="/logs" className={` ${bgstate.hover} ${bgstate.titleHover} rounded-md px-3 py-2 text-sm font-medium ${bgstate.title}`}>Logs da aplicação</a>
                                <a href="/contato" className={` ${bgstate.hover} ${bgstate.titleHover} rounded-md px-3 py-2 text-sm font-medium ${bgstate.title}`}>Contato de Suporte</a>
                            </div>
                        </div>
                    </div>
                    <button onClick={toggleDarkMode}>
                        <DarkMode isPaused={animation.isPaused} isStopped={animation.isStopped} direction={animation.direction} />
                    </button>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative ml-3">
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="/" className={` ${bgstate.hover} ${bgstate.titleHover} block rounded-md px-3 py-2 text-base font-medium ${bgstate.title}`}>Home</a>
                    <a href="logs" className={` ${bgstate.hover} ${bgstate.titleHover} block rounded-md px-3 py-2 text-base font-medium ${bgstate.title}`}>Logs da Aplicação</a>
                    <a href="/contato" className={` ${bgstate.hover} ${bgstate.titleHover} block rounded-md px-3 py-2 text-base font-medium ${bgstate.title}`}>Contato de Suporte</a>
                </div>
            </div>
        </nav>
    )
}