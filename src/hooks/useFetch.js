import {useState} from 'react'

export const useFetch = (callback) => {
    const [error, setError] = useState('')

    const fetching = async () => {
        try{
            await callback()
        } catch(e) {
            setError(e.message)
        }
    }

    return [fetching, error]
}