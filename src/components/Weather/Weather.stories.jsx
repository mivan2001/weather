import React from 'react'
import 'typeface-roboto'
import Weather from './Weather'


export default {
    title: "Weather",
    component: Weather
}

export const WeatherTest = () => <Weather temperature={10} />