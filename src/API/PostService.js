import axios from 'axios'

export default class PostService {
    static async getAllTrips() {
        const response = await axios.get(`https://raw.githubusercontent.com/BinaryStudioAcademy/react-homework/production/homework/data/trips.json`)
        return response
    }
}