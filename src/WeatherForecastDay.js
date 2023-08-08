import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    function day(){
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-day">
                {day()}
            </div>

            <img src={props.weather[0].icon} alt="cloudy"
            className="float-left" />

            <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">
                {maxTemperature()}
            </span>
            <span className="WeatherForecast-temperatures-min">
                {minTemperature()}
            </span>
            </div>
        </div>
    );

}