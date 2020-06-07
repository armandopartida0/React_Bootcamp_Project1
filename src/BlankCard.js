import React from 'react';
import './BlankCard.css';

import face_pic from './face.jpg';

function BlankCard() {
    return (
        <div className="BlankCard">
            <img src={face_pic} className="BlankCard-face"/>
            <div className="BlankCard-title">Discover</div>
            <div className="BlankCard-gallery">Gallery</div>
            <div className="BlankCard-stories">Stories</div>
            <div className="BlankCard-types">Types of Travel</div>
        </div>
    );
}

export default BlankCard;