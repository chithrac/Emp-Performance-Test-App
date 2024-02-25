import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import styles from './Welcome.module.css';
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();
    document.title = 'Welcome';

    return (
        <div className={styles.welcomePageContainer + " App"}>
            <div className={styles.welcomeContainer}>
                <span className={styles.welcome}>Welcome to XYZ Ltd.</span>
                <div className={styles.description}>Let's get started!</div>
                <button onClick={() => navigate('/Login')}>Login</button>
                <button onClick={() => navigate('/Signup')}>Signup</button>
            </div>
        </div>
    );
}

export default Welcome;
