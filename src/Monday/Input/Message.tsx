import {useState} from "react";
import {Input} from "./Input";

export const Message = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    return (
        <div>
            {message.map((el, index) => {
                return <div key={index}>{el.message}</div>
            })}
        </div>
    )
}