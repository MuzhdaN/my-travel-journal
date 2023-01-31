import React from 'react';
import pin from "./images/pin.png";


function Card(props) {
    return (
        <div className='card-container'>
            <img src={props.item.imageUrl} className='card-img' />
            <div className='content'>
                <div className='location-spot'>
                    <img src={pin} alt='location pin'/>
                    <span className='location'>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on google Maps</a>
                </div>
                <div className='info'>
                    <h1>{props.item.title}</h1>
                    <small>{props.item.startDate} - {props.item.endDate}</small>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;