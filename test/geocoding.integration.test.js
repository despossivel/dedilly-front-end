import {
    describe,
    it
} from 'node:test'
import assert from 'node:assert'
import axios from "axios"

const API = axios.create({
    baseURL: `http://localhost:3033/`,
    headers: { 'Content-Type': 'application/json' }
});


describe('geocodingController', () => {
    it('should return geocode and weather data for a valid address', async () => {
        const { status } = await API.get(`geocoding/av. brasil`)

        assert.equal(status, 200)
    });

    it('should return an error for an invalid address', async () => {
        try {
            await API.get(`geocoding/asdasdasdas`)
        } catch (error) {
            await assert.rejects(
                async () => {
                    throw new TypeError('Request failed with status code 400');
                },
                {
                    message: error.message
                },
            );
        }
    });
});
