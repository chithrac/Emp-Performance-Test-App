import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import './Login.css';
import { Button } from "primereact/button";
import CryptoJS from 'crypto-js';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Login() {
    // const SECRET_KEY = process.env.REACT_APP_SECRET_KEY; 
    const navigate = useNavigate();
    document.title = 'Login';
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');
    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted');
        if (uname === '' || pwd === '') {
            alert('Please fill mandatory fields!');
            return;
        } else {
            console.log(pwd, uname);
        }
        const login = {
            userName: uname,
            password: pwd
        }
        // const encryptedObject = CryptoJS.AES.encrypt(
        //     JSON.stringify(login),
        //     process.env.REACT_APP_SECRET_KEY
        // ).toString();
        // fetch('http://localhost:5000/login', {
        //     method: "POST", // *GET, POST, PUT, DELETE, etc.
        //     mode: "cors", // no-cors, *cors, same-origin
        //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: "include", // include, *same-origin, omit
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     redirect: "follow", // manual, *follow, error
        //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify({ encryptedObject }), // body data type must match "Content-Type" header
        // }).then(res => {
        //     if (res.status === 200)
        //         // window.location.replace("/");
        //         navigate('/');
        // });
        navigate('/Home');
    }

    return (
        <div className="login-page-container App">
            <div className="welcome-container">
                <span className="welcome">Login to Continue</span>
            </div>
            <form className="signup-container">
                <Container>
                    <Row className="ip-row">
                        <Col xs={3}><span>Email ID</span></Col>
                        <Col xs={9}><input className={'signup-IP'} value={uname} onChange={(e) => setUname(e.target.value)}></input></Col>
                    </Row>
                    <Row className="ip-row">
                        <Col xs={3}><span>Password</span></Col>
                        <Col xs={9}><input className={'signup-IP signup-IP-pwd'} type="password" value={pwd} onChange={(e) => setPwd(e.target.value)}></input></Col>
                    </Row>
                    <div className="action-buttons">
                        <Button className="submit-button" type="cancel" severity="success" onClick={() => navigate('/')}>Back</Button>
                        <Button className="submit-button" type="submit" severity="success" onClick={onFormSubmit}>Submit</Button>
                    </div>
                </Container>
            </form>
        </div>
    );
}

export default Login;
