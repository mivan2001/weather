import React from 'react'
import 'typeface-roboto'
import City from './City'


export default {
    title: "Ciudad",
    component: City
}

export const CiudadExport = () => <City city="Monterrey" country="México" />