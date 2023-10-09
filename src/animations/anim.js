import React from "react";
import searchAnimation from './loading_animation.json';
import darkmode_animation from './darkmode_animation.json';
import notfound_animation from './notfound_animation.json';
import questionInformation from './question_information.json';

import Lottie from 'react-lottie';

export const AnimSearch = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: searchAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={30}
                width={30}
                isStopped={false}
                isPaused={false}
                isClickToPauseDisabled={true}
            >
            </Lottie>
        </div>
    );
}

export const QuestionInformation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: questionInformation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={15}
                width={15}
                isStopped={true}
                isPaused={true}
                isClickToPauseDisabled={false}
                speed={1}
            >
            </Lottie>
        </div>
    );
}



export default function NFound() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notfound_animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={500}
                width={800}
                isStopped={false}
                isPaused={false}
                isClickToPauseDisabled={true}
            >
            </Lottie>
        </div>
    );
}


export const DarkMode = ({ isStopped, isPaused, direction }) => {

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: darkmode_animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={50}
                width={100}
                isStopped={isStopped}
                isPaused={isPaused}
                direction={direction}
                speed={2}
            >
            </Lottie>
        </div>
    );
}



