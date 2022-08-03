import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { WiCloud } from 'react-icons/wi'

const Weather = ({temperature}) => {
  return (
    <div>
      <WiCloud />
      <Typography display="inline" variant="h3">{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
    temperature: PropTypes.any.isRequired
}

export default Weather