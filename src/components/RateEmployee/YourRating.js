import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import './RateEmployee.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SeeRating() {
    const [ratingSelected, setRatingSelected] = useState("");
    const navigate = useNavigate();
    document.title = 'Rating';
    return (
        <div className="rate-page-container App">
            <div className="title">Your Rating</div>
            <div className="previous">Your rating for this year is:</div>
            <div className="rating">Met Expectation</div>
        </div>
    )

}


export default SeeRating;