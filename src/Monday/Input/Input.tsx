// Input.tsx
import React, {ChangeEvent, useState} from 'react';
import {Button} from "../1/Button/Button";

type InputPropsType = {
    title: string;
    addMessage: (message: string) => void;
}

export const Input = (props: InputPropsType) => {

    const [inputValue, setInputValue] = useState(props.title);

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }

    const onClickButtonInputHandler = () => {
        props.addMessage(inputValue);
        setInputValue('');
    }

    return (
        <>
            <input value={inputValue} onChange={onChangeInputHandler} />
            <Button nameButton={"+"} callBack={onClickButtonInputHandler} />
        </>
    );
}
