import React from 'react'

const BookingsItem = ({trip, remove}) => {
  return (
    <li className="booking">
        <h3 className="booking__title">{trip.title}</h3>
        <span className="booking__guests">{trip.guests} guests</span>
        <span className="booking__date">{trip.date}</span>
        <span className="booking__total">{trip.totalPrice} $</span>
        <button className="booking__cancel" title="Cancel booking" onClick={() => remove(trip)} >
            <span className="visually-hidden">Cancel booking</span>
            ×
        </button>
    </li>
  )
}

export default BookingsItem