// Login.jsx
import React, { useState } from 'react';
import Input from '../../components/Form/InputBox/Input';
import SubmitButton from '../../components/Form/SubmitButton/SubmitButton';
import Form from '../../components/Form/Form';
import fetchRequest from '../../util/fetchAPIRequest';
import useFieldValidator from './hooks/useFieldValidator';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const navigate = useNavigate();

    function handleSubmit(e, setFormError) {
        e.preventDefault();

        let [{ email }, { password }] = useFieldValidator([{ name: "email", value: Email }, { name: "password", value: Password }]);

        console.log(email,password,typeof email,typeof password);

        let isEmailValid = email == true;
        let isPasswordValid = password == true;

        setEmailError(email == true?null:email);
        setPasswordError(password == true?null:password);

        if(isEmailValid != true || isPasswordValid != true){
            return;
        }


        // If validation passes, proceed with form submission
        const p = fetchRequest("http://localhost:3000/login", { method: "POST", body: JSON.stringify({ email:Email, password:Password }), headers: { "Content-Type": "application/json" } });
        p.then((data) => {
            
            console.log(data);
            if(data.error){
                console.log("Login Failed");
                setFormError(data.error);
            }else{
                console.log("Login Successfull");
                navigate("/dashboard",{replace:true, state:{user:data.username}});
            }


        }).catch((err) => {
            console.log(err);
        });


    }

    return (
        <>
            <Form actionUrl="http://localhost:3000/login" method="post" Submitfun={handleSubmit}>
                <div>
                    <Input label="Email" id="email" type="email" placeholder="Enter your email" change={setEmail} error={emailError} classes={["input-box"]} />
                </div>
                <div>
                    <Input label="Password" id="password" type="password" placeholder="Enter your password" change={setPassword} error={passwordError} classes={["input-box"]} />
                </div>
                <div>
                    <SubmitButton title="Login"/>
                </div>
            </Form>
        </>
    );
}

export default Login;
