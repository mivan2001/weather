import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const City = ({city,country}) => {
  return (
    <>
        <Typography display="inline" variant="h3">{city}, </Typography>
        <Typography display="inline" variant="h5">{country}</Typography>
    </>
  )
}

City.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default City