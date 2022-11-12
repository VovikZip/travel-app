import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const TripItem = ({trip}) => {

    const [modal, setModal] = useState(false);

    const router = useNavigate()
    return (
        <li className="trip-card">
                <img src={trip.image} style={{width:'313px', height:'208px'}}  alt="trip image" />
                <div className="trip-card__content">
                <div className="trip-info">
                    
                    <h3 className="trip-info__title">{trip.title}</h3>
                    <div className="trip-info__content">
                    <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                    <span className="trip-info__level">{trip.level}</span>
                    </div>
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong className="trip-price__value">{trip.price} $</strong>
                </div>
                </div>
                <button onClick={() => router(`/trip/${trip.id}`)} className="button">Discover a trip</button>
        </li>
    )
}

export default TripItem