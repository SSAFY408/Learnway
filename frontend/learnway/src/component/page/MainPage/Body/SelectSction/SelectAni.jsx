import React from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
    40% {
        left: 50%;
        opacity: 1;
     }
    100% {
        left: 70%;
        opacity: 0;
    }
`;

const Airplane = styled.svg`
	position: absolute;
	width: 30px;
	height: 25px;
	top: 57%;
	left: 30%;
	opacity: 0;
	transform: translate(-50%, -50%);
	animation: ${move} 4s infinite;
`;

function SelectAni() {
    return (
        <>
            <Airplane>
                <use xlinkHref="#airplane"></use>
            </Airplane>
            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" >
                <symbol id="airplane" viewBox="243.5 245.183 25 21.633">
                    <g>
                        <path fill="#92B4EC" d="M251.966,266.816h1.242l6.11-8.784l5.711,0.2c2.995-0.102,3.472-2.027,3.472-2.308
                                                    c0-0.281-0.63-2.184-3.472-2.157l-5.711,0.2l-6.11-8.785h-1.242l1.67,8.983l-6.535,0.229l-2.281-3.28h-0.561v3.566
                                                    c-0.437,0.257-0.738,0.724-0.757,1.266c-0.02,0.583,0.288,1.101,0.757,1.376v3.563h0.561l2.281-3.279l6.535,0.229L251.966,266.816z
                                                    "/>
                    </g>
                </symbol>
            </svg>
        </>
    );
}
export default SelectAni;
