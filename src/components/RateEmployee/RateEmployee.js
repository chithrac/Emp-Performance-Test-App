import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import './RateEmployee.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RateEmployee() {
    const [ratingSelected, setRatingSelected] = useState("");
    const navigate = useNavigate();
    document.title = 'Rating';
    return (
        <div className="rate-page-container App">
            <div className="title">Rate Chithra C</div>
            <div className="previous">Previous Rating: Good</div>
            <div className="input-box">
                <select value={ratingSelected} onChange={(e) => setRatingSelected(e.target.value)}>
                    <option disabled selected value="">Select an option</option>
                    <option value={"Poor"}>Poor</option>
                    <option value={"Needs Improvement"}>Needs Improvement</option>
                    <option value={"Met Expectation"}>Met Expectation</option>
                    <option value={"Commendable"}>Commendable</option>
                    <option value={"Outstanding"}>Outstanding</option>
                </select>
            </div>
            <div className='button' onClick={() => { alert("Rating saved successfully"); navigate('/Home') }}>Submit</div>
        </div>
    )

}


export default RateEmployee;