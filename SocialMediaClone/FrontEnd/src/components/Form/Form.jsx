import React from 'react'

function Form({ actionUrl, method,id=null,classes=[], children=[], onSubmit=null}) {

    let formAttributes = {
        action: actionUrl,
        method: method,
        onSubmit: onSubmit,
        id: id,
        className: classes.join(" ")
    };

    return (
        <form {...formAttributes}>
            {children}
        </form>
    )
}

export default Form
