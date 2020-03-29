import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Graphic from './Graphic'
import { GRAPHICS } from './constant'
import './Style/chartstyle.css'

function Chart() {
  return (
    <>
      <div className="App">
        {GRAPHICS.map(graphic => (
          <React.Fragment key={graphic.id}>
            <Graphic
              type={graphic.type}
              width={graphic.width}
              height={graphic.height}
              data={graphic.data}
            />
            <hr className="separator" />
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default Chart
