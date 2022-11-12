import React, {useContext, useMemo, useState} from 'react'
import {useParams} from 'react-router-dom'
import Modal from '../components/UI/modal/Modal'
import {TripsContext} from '../context/index'
import {TommorowDate} from '../utils/Date'

const TripIdPage = () => {
  const {trips, bookedTrips, setBookedTrips} = useContext(TripsContext)
  const params = useParams()
  const currentTrip = trips.find(trip => trip.id === params.id)
  const [visible, setVisible] = useState(false)
  const tomorrow = TommorowDate();  
  const [newParams, setNewParams] = useState({guests: '1', date: '', totalPrice: ''})

  useMemo(() => {
    setNewParams({...newParams , totalPrice: currentTrip.price * newParams.guests})
  }, [newParams.guests])

  const addBooking = (e) => {
    e.preventDefault()
    const newBook = {...currentTrip, ...newParams}
    setNewParams({guests: '', date: '', totalPrice: ''})
    setBookedTrips([...bookedTrips, newBook])
    setVisible(false)
  }

  return (
    <div>
      <h1 className="visually-hidden">Travel App</h1>
      <div className="trip">
        <img src={currentTrip.image} style={{width:'400px', height:'400px'}} className="trip__img" alt="trip image" />
        <div className="trip__content">
          <div className="trip-info">
            <h3 className="trip-info__title">{currentTrip.title}</h3>
            <div className="trip-info__content">
              <span className="trip-info__duration"><strong>{currentTrip.duration}</strong> days</span>
              <span className="trip-info__level">{currentTrip.level}</span>
            </div>
          </div>
          <div className="trip__description">
            {currentTrip.description}
          </div>
          <div className="trip-price">
            <span>Price</span>
            <strong className="trip-price__value">{currentTrip.price} $</strong>
          </div>
          <button className="trip__button button" onClick={() => setVisible(true)} >Book a trip</button>
          <Modal visible={visible} setVisible={setVisible}  >
            <form className="trip-popup__form" autoComplete="off">
              <div className="trip-info">
                <h3 className="trip-info__title">{currentTrip.title}</h3>
                <div className="trip-info__content">
                  <span className="trip-info__duration"><strong>{currentTrip.duration}</strong> days</span>
                  <span className="trip-info__level">{currentTrip.level}</span>
                </div>
              </div>
              <label className="trip-popup__input input">
                <span className="input__heading">Date</span>
                <input 
                  name="date" 
                  type="date" 
                  required 
                  min={tomorrow} 
                  value={newParams.date}
                  onChange={e => setNewParams({...newParams, date: e.target.value})}
                />
              </label>
              <label className="trip-popup__input input">
                <span className="input__heading">Number of guests</span>
                <input 
                  name="guests" 
                  type="number" 
                  min="1" 
                  max="10"  
                  value={newParams.guests}
                  required
                  onChange={e => setNewParams({...newParams, guests: e.target.value})}
                />
              </label>
              <span className="trip-popup__total">
                Total: <output className="trip-popup__total-value">{newParams.totalPrice}$</output>
              </span>
              <button className="button"  onClick={addBooking} >Book a trip</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default TripIdPage