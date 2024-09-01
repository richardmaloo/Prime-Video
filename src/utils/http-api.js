import axios from 'axios'

const BASE_URL = 'https:///api.themoviedb.org/3'
export default {
    getRequest(path){
        return axios.get(BASE_URL + path)
    }
}