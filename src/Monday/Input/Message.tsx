import React, {useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";

export const Message = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
    }

    return (
        <>
        <Input addMessage={addMessage} />
        <div>
            {message.map((el, index) => {
                return <div key={index}>{el.message}</div>
            })}
        </div>
        </>
    )
}