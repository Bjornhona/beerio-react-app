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
        <div className="about-input">
            <h5>{title}</h5>
            <div className={alert ? 'about-input-field alert' : 'about-input-field'}>
                <textarea
                    id="about-input-field"
                    value={defaultInput}
                    name={inputKey}
                    onChange={targetValue}
                />
            </div>
            <p>{alert}</p>
        </div>
    )
}

export default MessageField;