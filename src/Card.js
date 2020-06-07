import React from 'react';
import './Card.css';

import image from './mountain.jpg';

function Card() {
    return (
        <div className="Card">
            <img src={image} className="Card-image"/>
            <div className="Card-company">TooTravel</div>
            <div className="Card-beauty">The most beautiful places in the world!</div>
            <div className="Card-desc">Plan your vacation on the most beautiful places in the world</div>
            <div className="Card-button">Get Started</div>
        </div>
    );
}

export default Card;