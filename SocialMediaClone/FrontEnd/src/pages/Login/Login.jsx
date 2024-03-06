// Login.jsx
import React, { useState } from 'react';
import Input from '../../components/Form/InputBox/Input';
import SubmitButton from '../../components/Form/SubmitButton/SubmitButton';
import Form from '../../components/Form/Form';
import fetchRequest from '../../util/fetchAPIRequest';
import useFieldValidator from './hooks/useFieldValidator';

function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        let [{email},{password}] = useFieldValidator([{name:"email",value: Email}, {name:"password",value: Password}]);

        if(email !== true){
            console.log(email);
            setEmailError(email?null:email);
            return;
        }else if(password !== true){
            console.log(password);
            setPasswordError(password?null:password);
            return;
        }

        // If validation passes, proceed with form submission
        const p = fetchRequest("http://localhost:3000/login", { method: "POST", body: JSON.stringify({ email, password }), headers: { "Content-Type": "application/json" } });
        p.then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    }

    function submissionHandle() {}

    return (
        <>
            {passwordError && <span className="error">{passwordError}</span>}
            <Form actionUrl="http://localhost:3000/login" method="post" onSubmit={handleSubmit}>
                <div>
                    <Input label="Email" id="email" type="email" placeholder="Enter your email" value={Email} error={emailError} classes={["input-box"]} />
                </div>
                <div>
                    <Input label="Password" id="password" type="password" placeholder="Enter your password" value={Password} error={passwordError} classes={["input-box"]} />
                </div>
                <div>
                    <SubmitButton title="Login" submissionFunction={submissionHandle} />
                </div>
            </Form>
        </>
    );
}

export default Login;
