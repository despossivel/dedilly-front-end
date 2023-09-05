/* eslint-disable react/prop-types */
import './index.css'

export function Details({ temperature, windspeed, country, city }) {
    return <div className="details">
        <span><small>Temperatura: </small> <b>{temperature}</b> </span>
        <span><small>Velocidade do vento:</small> <b> {windspeed}</b> </span>
        <small><b>{city}</b> - {country}</small>
    </div>
}
 