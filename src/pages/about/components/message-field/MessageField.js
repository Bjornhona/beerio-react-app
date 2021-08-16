import React from 'react'
import './messageField.css'

const MessageField = ({
                        setInputValue,
                        title,
                        alert,
                        defaultInput,
                        inputKey,
                    }) => {

    const targetValue = (event) => {
        setInputValue(inputKey, event.target.value)
    }

    return (
        <div className="message-input" data-testid="input-field">
            <h5>{title}</h5>
            <div className={alert ? 'members-input-field alert' : 'members-input-field'}>
                <textarea
                    id="message-input-field"
                    name="contact-message"
                    value={defaultInput}
                    onChange={targetValue}
                />
            </div>
            <p>{alert}</p>
        </div>
    )
}

export default MessageField;