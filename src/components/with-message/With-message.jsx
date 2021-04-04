import React from 'react';

export default function WithMessage(WrappedComponent) {
    const Message = (displayMessage, message, otherProps) => {
        return displayMessage === true ?
            (<div>
                <h3>{message}</h3>
            </div>) :
            (<WrappedComponent {...otherProps}/>)
    }
    return Message;
}