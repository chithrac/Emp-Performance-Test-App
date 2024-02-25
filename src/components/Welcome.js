import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import styles from './Welcome.module.css';
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();
    document.title = 'Welcome';

    return (
        <div className="App">
            <div className={styles.welcomeContainer}>
                <span className={styles.welcome}>Welcome</span>
                <button onClick={() => navigate('/Login')}>Login</button>
                <button onClick={() => navigate('/Signup')}>Signup</button>
            </div>
        </div>
    );
}

export default Welcome;
