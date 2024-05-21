import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import './Feedback.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import manager from '../../assets/manager.png';
import system from '../../assets/system.png';

function Feedback() {
    const navigate = useNavigate();
    document.title = 'Feedback';
    return (
        <div className="feedback-page-container App">
            <div className="title">Provide Feedback</div>
            <div className="d-flex cards">
                <div>
                    <img src={manager}></img>
                    <div>of your manager</div>
                </div>
                <div>
                    <img src={system}></img>
                    <div>of the rating system</div>
                </div>
            </div>
        </div>
    )

}


export default Feedback;