import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import { WiBarometer,WiDayCloudyHigh, WiDayFog, WiDaySunny,WiDayRain, WiDayThunderstorm  } from 'react-icons/wi'
import { IconContext } from 'react-icons'

const stateByName = {
  cloudy: WiDayCloudyHigh,
  sunny: WiDaySunny,
  rain: WiDayRain,
  fog: WiDayFog,
  thunder: WiDayThunderstorm
}

const renderState = state => {
/* switch (state) {
  case "cloudy": {
    const Icon = stateByName[state]
    return <Icon />
  }
  case "sunny": {
    const Icon = stateByName[state]
    return <Icon />
  }
  case "rain": {
    const Icon = stateByName[state]
    return <Icon />
  }
  case "fog": {
    const Icon = stateByName[state]
    return <Icon />
  }
  case "thunder": {
    const Icon = stateByName[state]
    return <Icon />
  }
  default: {
    const Icon = stateByName["WiBarometer"]
    return <Icon />

  }
 }
*/
// En lugar de hacer todas esas lineas podemos simplificar
/* let Icon = stateByName[state]

  if (Icon === undefined) {
    Icon = stateByName["sunny"]
  }

*/ 
// o de esta forma

  let Icon = stateByName[state] !== "undefined" ? stateByName[state] : stateByName["WiBarometer"]

  return <Icon />

}

const Weather = ({temperature, state}) => {
  return (
    <div>
      <IconContext.Provider value={{size: "3em"}}>
        {renderState(state) }
      </IconContext.Provider>
      <Typography display="inline" variant="h3">{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired

}

export default Weather