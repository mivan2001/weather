import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const Weather = ({temperature}) => {
  return (
    <Typography display="inline" variant="h3">{temperature}</Typography>
  )
}

Weather.propTypes = {
    temperature: PropTypes.any.isRequired
}

export default Weather