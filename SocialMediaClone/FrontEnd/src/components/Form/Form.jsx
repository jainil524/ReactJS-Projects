import React from 'react'

function Form({ actionUrl, method, children, onSubmit}) {

    let formAttributes = {
        action: actionUrl,
        method: method,
        onSubmit: onSubmit
    };



    return (
        <form {...formAttributes}>
            {children}
        </form>
    )
}

export default Form
