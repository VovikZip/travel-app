import React from 'react'
import TripItem from './TripItem'

const TripList = ({trips}) => {
  return (
    <ul className="trip-list">
        {trips.map(trip => 
            <TripItem trip={trip} key={trip.id}/>
        )}
    
            
    </ul>
  )
}

export default TripList