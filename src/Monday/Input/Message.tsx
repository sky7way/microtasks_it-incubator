// Message.tsx
import React from 'react';

type MessagePropsType = {
    messages: { message: string }[];
}

export const Message = (props: MessagePropsType) => {
    return (
        <div>
            {props.messages.map((el, index) => {
                return <div key={index}>{el.message}</div>
            })}
        </div>
    );
}
