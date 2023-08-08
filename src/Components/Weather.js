import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { useDispatch } from "react-redux";
import { stopLoading, setLoading } from "../redux/slices/loadingSlice";

const Weather = () => {
    const [weather, setWeather] = useState();
    let display = useSelector(selectDisplay)
    const latitude = display.capitalInfo.latlng[0]
    const longitude = display.capitalInfo.latlng[1]
    const apiKey = process.env.REACT_APP_API_KEY
    const dispatch = useDispatch()
    
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: `${latitude}, ${longitude}` },
            headers: {
                'X-RapidAPI-Key': `${apiKey}`,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        dispatch(setLoading())

        setTimeout(() => {
            axios.request(options)
            .then((res) => {
                // console.log(res.data)
                setWeather(res.data)
                dispatch(stopLoading())
            })
            .catch((err) => console.log(err))
        }, 2000)

    }, [apiKey,latitude, longitude, dispatch])
   

        return (
            <div>
                <table className="overview-table">
                    <tr>
                        <td>Conditions: </td>
                        <td>{weather?.current?.condition?.text}</td>
                    </tr>
                    <tr>
                        <td>Temperature: </td>
                        <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                    </tr>
                    <tr>
                        <td>Feels Like: </td>
                        <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
                    </tr>
                    <tr>
                        <td>Humidity: </td>
                        <td>{weather?.current?.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Wind Speed: </td>
                        <td>
                            {weather?.current?.wind_mph} mph{" "}
                            {weather?.current?.wind_dir}
                        </td>
                    </tr>
                </table>
            </div>
        );
    };

export default Weather;
