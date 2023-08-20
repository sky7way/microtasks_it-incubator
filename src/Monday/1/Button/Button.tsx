import React from "react";

type ButtonPropsType = {
    nameButton: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
    <div>
        <button onClick={onClickHandler}>{props.nameButton}</button>
    </div>
    );
}