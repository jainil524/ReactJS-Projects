import React, { useRef } from 'react'
import Input from '../../components/Form/InputBox/Input'
import SubmitButton from '../../components/Form/SubmitButton/SubmitButton'
import Form from '../../components/Form/Form'
import useLoginValidator from './hooks/useLoginValidator'

function Login() {

    const EmailRef = useRef();
    const PasswordRef = useRef();

    
    function handleSubmit(e){
        e.preventDefault();
        const [ email,passwword ] = useLoginValidator(EmailRef.current.value, PasswordRef.current.value)
        console.log(email,passwword);
    }

    function submissionHandle(){

    }

    return (
        <>
            <Form actionUrl="http://localhost:3000/login" method="post" onSubmit={handleSubmit}>
                <div>
                    <Input label="Email" ref={EmailRef} id="email" type="email" placeholder="Enter your email" classes={["input-box"]} />
                </div>
                <div>
                    <Input label="Password" ref={PasswordRef} id="password" type="password" placeholder="Enter your password" classes={["input-box"]} />
                </div>
                <div>
                    <SubmitButton title="Login" submissionFunction={submissionHandle} />
                </div>
            </Form>
        </>
    )
}

export default Login
