import React, {useEffect, useState, useContext} from 'react'
import TripList from '../components/TripList'
import {useFetch} from '../hooks/useFetch'
import PostService from '../API/PostService'
import TripFilter from '../components/TripFilter'
import {TripsContext} from '../context/index'
import {useTrips} from '../hooks/useTrips'
 
const MainPage = () => {

    const {trips, setTrips, bookedTrips} = useContext(TripsContext)
    const [filter, setFilter] = useState({duration:'', level: '', query: ''})
    const [fetching, error] = useFetch(async () => {
        const response = await PostService.getAllTrips()
        setTrips(response.data)
    })
    const sortedTrips = useTrips(trips, filter.duration, filter.level, filter.query)

    useEffect(() => {
        fetching()
    }, [])

    return (
            <div>
            <h1 className="visually-hidden">Travel App</h1>
            <TripFilter filter={filter} setFilter={setFilter} />
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <TripList trips={sortedTrips} />
            </section>
            </div>
    )
}

export default MainPage