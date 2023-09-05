import axios from 'axios'
 

export const instance = axios.create({
    baseURL: `http://localhost:3033/`,
    headers: { 'Content-Type': 'application/json' }
});

export default instance