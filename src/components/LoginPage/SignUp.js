import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import '../LoginPage/Login.css'
import { Button } from "primereact/button";
import CryptoJS from 'crypto-js';
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

function SignUp() {
    const navigate = useNavigate();
    document.title = 'Sign Up';
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [uname, setUname] = useState('');
    const [pwd, setPwd] = useState('');
    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted');
        if (fname === '' || email === '' || uname === '' || pwd === '') {
            alert('Please fill mandatory fields!');
        } else {
            console.log(pwd, uname, email, fname);
        }
        const data = {
            userName: uname,
            password: pwd,
            email: email,
            firstName: fname
        }
        const encryptedObject = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            process.env.REACT_APP_SECRET_KEY
        ).toString();
        const response = await fetch('http://localhost:5000/users/add', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({ encryptedObject }), // body data type must match "Content-Type" header
        });
        console.log(response.json());
    }

    return (
        <div className="login-page-container App">
            <div className="welcome-container">
                <span className="welcome">Let's create your account!</span>
            </div>
            <form className="signup-container">
                <Container>
                    <Row className="ip-row">
                        <Col xs={3}><span>First Name</span></Col>
                        <Col xs={9}><input className={'signup-IP'} value={fname} onChange={(e) => setFname(e.target.value)}></input></Col>
                    </Row>
                    <Row className="ip-row">
                        <Col xs={3}><span>Email</span></Col>
                        <Col xs={9}><input className={'signup-IP'} value={email} onChange={(e) => setEmail(e.target.value)}></input></Col>
                    </Row>
                    <Row className="ip-row">
                        <Col xs={3}><span>User Name</span></Col>
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
    )

}
export default SignUp;