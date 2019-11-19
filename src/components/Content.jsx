import React from 'react';
import FlyingScotman from "./train-locations/FlyingScotman";
import GoldenArrow from "./train-locations/GoldenArrow";
import HogwartsExpress from "./train-locations/HogwartsExpress";
import OrientExpress from "./train-locations/OrientExpress";

const Content = ({contentToShow}) => {

    const determineContentToShow = () => {
        switch (contentToShow) {
            case 'scotsman':
                return <FlyingScotman/>
            case 'arrow':
                return <GoldenArrow/>
            case 'express':
                return <HogwartsExpress/>
            case 'oexpress':
                return <OrientExpress/>
            default:
                return <FlyingScotman/>
        }
    }

    return determineContentToShow();
};

export default Content;