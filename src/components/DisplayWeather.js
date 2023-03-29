import React, { useState } from 'react';
import "./displayweather.css";

function DisplayWeather(props) {
    const {data} = props;

    const [unit, setUnit] = useState("Celcius");
    const [temperature, setTemperature] = useState(0);
    

    function toggleUnit() {
        setUnit(unit == "Celcius" ? "Fahrenheit" : "Celcius");
    }

    function handleUnitChange(e) {
        setTemperature(e.target.value);
    }

    const celcius = temperature;
    const fahrenheit = (temperature * 9/5) + 32;

    return (
        <div className='displayweather'>
            <div className='maincard'>
                <div className='temperature'>
                    <h1>
                        {data.weather.icon}
                        Temperature:
                        &nbsp;
                        {Math.floor((data.main.temp - 273.15) * (9/5) + 32 )}
                        <sup>o</sup> F
                    </h1>
                    <button className='unitConverter' onClick={toggleUnit}>
                        {unit == "Celcius" ? "Fahrenheit" : "Celcius"}
                    </button>
                    <h2>
                        Feels like:
                        &nbsp;
                        {Math.floor((data.main.feels_like - 273.15) * (9/5) + 32 )}
                        <sup>o</sup> F
                    </h2>
                </div>
                <h2>
                    Wind Speed:
                    &nbsp;
                    {data.wind.speed} m/s
                </h2>
                <h4>
                    humidity: 
                    &nbsp;
                    {data.main.humidity}%
                </h4>
                <h3>
                    Cloud Cover:
                    &nbsp;
                    {data.clouds.all}%
                </h3>
            </div>
        </div>
    );
}

export default DisplayWeather;