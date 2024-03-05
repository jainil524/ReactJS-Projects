import React from 'react'
import "./assets/css/Input.css"
function Input({ label=null, type, placeholder,id=null, classes=[], value,error=null }) {

    let inputAttributes = {
        type: type,
        placeholder: placeholder,
        className: classes.join(' '),
        defaultValue: value
    }

    return (
        <div className="input-wrapper">
            {(id||label) && <label htmlFor={id}>{label}</label>}
            <input id={id} {...inputAttributes} />
            {error && <span className="error">{error}</span>}
        </div>
    )
}

export default Input
