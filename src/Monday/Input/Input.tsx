import {ChangeEvent, useState} from "react";

type InputPropsType = {
    addMessage: (title: string) => void
}

export const Input = (props: InputPropsType) => {
    let [title, setTitle] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

// const  onClickButtonHandler = () => {
//     props.addMessage(title);
//     setTitle('')
// }

    return (
        <>
        <input value={title} onChange={onChangeInputHandler}/>
        {/*<button onClick={onClickButtonHandler}>+</button>*/}
        </>
    )
}