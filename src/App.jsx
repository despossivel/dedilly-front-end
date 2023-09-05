import API from "./services/api"
import './App.css'
import { useState } from "react"
import {
  Actions,
  Details,
  Loader
} from "./components/index"

function App() {
  const [address, setAddress] = useState('av. brasil'),
    [data, setData] = useState({}),
    [loader, setLoader] = useState(false)

  const getgeoemeteo = async () => {
    if (!address) return alert('Endereço não informado!')
    setLoader(true)

    const { status, data } = await API.get(`geocoding/${address}`)

    if (status !== 200) return alert(`Tente novamente mais tarde!`)

    const {
      current_weather: {
        temperature,
        windspeed
      },
      city,
      country
    } = data;

    setData({
      show: true,
      temperature: temperature,
      windspeed: windspeed,
      city: city,
      country: country
    })
    setLoader(false)
  }

  return (<div className="container">
    {data?.hasOwnProperty('show') && <Details {...data} />}
    {loader ? <Loader /> : <Actions {...{
      setAddress,
      getgeoemeteo
    }} />}
  </div>)
}

export default App
