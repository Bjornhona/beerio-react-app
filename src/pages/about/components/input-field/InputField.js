import React from 'react'
import './inputField.css'

const InputField = ({
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
    <div className="members-input" data-testid="input-field">
      <h5>{title}</h5>
      <div
        className={alert ? 'members-input-field alert' : 'members-input-field'}
      >
        <input
          id="members-input-field"
          type="text"
          value={defaultInput}
          onChange={targetValue}
        />
      </div>
      <p>{alert}</p>
    </div>
  )
}

export default InputField;