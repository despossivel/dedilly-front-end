import axios from 'axios'

console.log(import.meta.env.VITE_HOST_API)

export const instance = axios.create({
    baseURL: `http://localhost:3033/`,
    headers: { 'Content-Type': 'application/json' }
});

export default instance