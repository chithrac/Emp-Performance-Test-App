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
                <span className={styles.welcome}>Welcome</span>
                <div className={styles.description}>to your personalized performance dashboard, where your achievements shine and feedback drives growth.</div>
                <button className={styles.button} onClick={() => navigate('/Login')}><span>Login</span><span>{">"}</span></button>
                {/* <button onClick={() => navigate('/Signup')}>Signup</button> */}
            </div>
        </div>
    );
}

export default Welcome;
