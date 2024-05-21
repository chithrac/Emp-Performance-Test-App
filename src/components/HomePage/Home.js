import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import './Home.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import chart from '../../assets/chart.png';

function Home() {
    const navigate = useNavigate();
    document.title = 'Home';
    // useEffect(() => {
    //     fetch('http://localhost:5000/profile',
    //         {
    //             method: 'GET',
    //             credentials: 'include'
    //         }).then(response => {
    //             console.log(response.status);
    //             if (response.status === 200) {
    //                 response.json().then(res => {
    //                     console.log('Login successful!', res);
    //                 });
    //             } else {
    //                 console.log('failed');
    //                 navigate('/');
    //             }

    //         }).catch((e) => {
    //             console.log('login failed');
    //             navigate('/');
    //         });
    // }, []);

    return (
        <div className="home-page-container App">
            <div className='page-title'>
                <span>Employee Overview</span>
            </div>
            <div className="d-flex justify-content-between page-contents">
                <div className='graphs'>
                    <img src={chart}/>
                </div>
                <div className="actions">
                    <div className="action">Actions:</div>
                    <div className="action-items">
                        <div className="action-item" onClick={() => navigate('/')}>Go Back to welcome page</div>
                        <div className="action-item" onClick={() => navigate('/Search')}>Rate an employee</div>
                        <div className="action-item" onClick={() => navigate('/YourRating')}>See my Rating</div>
                        <div className="action-item" onClick={() => navigate('/Feedback')}>Provide feedback</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
