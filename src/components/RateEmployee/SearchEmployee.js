import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import './RateEmployee.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchEmployee() {
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate();
    document.title = 'Search';
    return (
        <div className="search-page-container rate-page-container App">
            <div className="title">Select an Employee</div>
            <div className="input-box">
                <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Search with email"></input>
            </div>
            <div className='button' onClick={() => navigate('/Rate')}>Rate</div>
        </div>
    )

}


export default SearchEmployee;