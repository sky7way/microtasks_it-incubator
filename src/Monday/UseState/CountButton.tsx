import React from "react";

type ButtonPropsType = {
    nameButton: string
    callBack: () => void
}

export const CountButton = (props: ButtonPropsType) => {
    return (
        <button onClick={() => props.callBack()}>{props.nameButton}</button>
    );
}