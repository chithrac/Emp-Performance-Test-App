import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    document.title = 'Home';
    useEffect(() => {
        fetch('http://localhost:5000/profile',
            {
                method: 'GET',
                credentials: 'include'
            }).then(response => {
                console.log(response.status);
                if (response.status === 200) {
                    response.json().then(res => {
                        console.log('Login successful!', res);
                    });
                } else {
                    console.log('failed');
                    navigate('/');
                }

            }).catch((e) => {
                console.log('login failed');
                navigate('/');
            });
    }, []);

    return (
        <div className="welcome-page-container App">
            <div className='app-header'>
                <div>
                    <span>Hello World!</span>
                </div>
            </div>
        </div>

    );
}

export default Home;
