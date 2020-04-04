import React from 'react'
import PropTypes from 'prop-types'

import { optionsForGraphic, typesGraphic } from './constant'

function Graphic({ type, data, width, height }) {
  const Graphic = type && typesGraphic[type]
  return (
    <Graphic
      data={data}
      width={width}
      height={height}
      options={optionsForGraphic(type, data.id, data.currency)}
    />
  )
}

Graphic.propTypes = {
  data: PropTypes.shape({
    currency: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string,
        data: PropTypes.arrayOf(PropTypes.number),
      })
    ),
  }).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.number,
}

export default Graphic
