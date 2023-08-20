import React from "react";
import {ButtonType} from "../../App";

type ButtonPropsType = {
    nameButton: string
    callBack: () => void
}

export const CountButton = (props: ButtonPropsType) => {
    return (
        <button onClick={() => props.callBack()}>{props.nameButton}</button>
    )
}