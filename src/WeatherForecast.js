import React, { useState } from "react";
import Axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if(loaded){
        return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[1]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[2]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[3]} />
                </div>
                <div className="col">
                    <WeatherForecastDay data={forecast[4]} />
                </div>
            </div>
        </div>
        );
    } 
    else {
        let apiKey= "6d68aadfacdd4f5163bc273049a0cf2d";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      
    
        Axios.get(apiUrl).then(handleResponse);
    
        return null;
        
    }
}