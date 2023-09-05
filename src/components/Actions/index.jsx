/* eslint-disable react/prop-types */
import './index.css' 

export function Actions({ setAddress, getgeoemeteo }) {
  return <div className="actions">
    <input onChange={e => setAddress(e.target.value)} />
    <button onClick={getgeoemeteo}>Buscar</button>
  </div>
} 