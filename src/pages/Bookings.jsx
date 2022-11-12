import React, {useContext} from 'react'
import BookingsItem from '../components/BookingsItem'
import {TripsContext} from '../context/index'

const Bookings = () => {
  const {bookedTrips, setBookedTrips} = useContext(TripsContext)

  const removeTrip = (t) => {
    setBookedTrips(bookedTrips.filter(trip => trip.id !== t.id))
  }

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      <ul className="bookings__list">
        {bookedTrips.map(trip => 
          <BookingsItem trip={trip} key={trip.id} remove={removeTrip} />
        )}
        
      </ul>
    </main>
  )
}

export default Bookings