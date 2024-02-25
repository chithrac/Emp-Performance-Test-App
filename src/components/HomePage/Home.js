import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import './Home.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <div className="d-flex justify-content-between">
                <div className='graphs'>

                </div>
                <div className="actions">
                    <div>Actions:</div>
                    <div className="action-item"onClick={() => navigate('/')}>Go Back to welcome page</div>
                </div>
            </div>
        </div>

    );
}

export default Home;
