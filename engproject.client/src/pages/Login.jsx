import React, { useState, useEffect } from 'react';
import "./Login.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const navigate = useNavigate();


    const onButtonClick = () => {
        setNameError('')
        if ('' === name) {
            setNameError('Please enter a name')
            return
        }
        let params = {
            fullname: name
        };
  
    
        axios({
            method: "post",
            url: "https://localhost:7056/Login/Insert",
            data: params,
            config: {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log("the error has occured: " + error);
            });

        navigate('/Test', { state: { name:name, problem_id:1 }, });
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Mihee's Test</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={name}
                    placeholder="Enter your name here"
                    onChange={(ev) => setName(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{nameError}</label>
            </div>
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Start'} />
            </div>
        </div>
    )

}

export default Login;