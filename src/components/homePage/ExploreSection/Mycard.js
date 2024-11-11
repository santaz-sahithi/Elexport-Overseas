import React from 'react'
import './Mycard.css';
import { replace } from 'react-router-dom';

const Mycard = (props) => {
    return (
        <div className='my-card'>
            <a href={`/${props.countryName.replace(/\s+/g, '')}Uni`} className='each-card'>
                <img src={props.imgSrc} alt={`Flag of ${props.countryName}`} className="card-image" />
                <p className="country-name">{props.countryName}</p> 
            </a>
        </div>
    )
}

export default Mycard