// Input.jsx
import React, { useState } from 'react';
import "./assets/css/Input.css";

function Input({ label = null, type, placeholder, id = null, classes = [], value, error }) {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="input-wrapper">
            {(id || label) && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={classes.join(' ')}
                value={inputValue}
                onChange={handleChange}
            />
            {error && <span className="error">{error}</span>}
        </div>
    );
}

export default Input;
