import {useMemo, useState} from 'react'

export const useByDur = (trips, duration) => {

    const sortByDur = useMemo(() => {
        if (duration) {
            if (duration === "x_5") {
                return(trips.filter(trip => trip.duration < 5 ))
            } else if (duration === "x_10") {
                return(trips.filter(trip => trip.duration < 10 ))
            } else if (duration === "10_x") {
                return(trips.filter(trip => trip.duration > 10 ))
            }
        } else {
            return trips
        }
    }, [trips, duration])
    return sortByDur
}

export const useSortedTrips = (trips, duration, level) => {
    const sortByDur = useByDur(trips, duration)

    const sortedTrips = useMemo(() => {
        if (level) {        
            return sortByDur.filter(trip => trip.level.includes(level))      
        } else {
            return sortByDur           
        }
    }, [sortByDur, level])
    return sortedTrips
}

export const useTrips = (trips, duration, level, query) => {
    const sortedTrips = useSortedTrips(trips, duration, level)

    const sortAndSearchedTrips = useMemo(() => {
        return sortedTrips.filter(trip => trip.title.toLowerCase().includes(query))
    }, [sortedTrips, query])
    return sortAndSearchedTrips
}