import React, { useEffect, useState } from 'react'

function EventWeatherContent(props) {
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    const nowWeatherDataArr = []
    if (props.weatherData[0]) {
      nowWeatherDataArr.push(props.weatherData[0]['1day'])
      nowWeatherDataArr.push(props.weatherData[0]['2day'])
      nowWeatherDataArr.push(props.weatherData[0]['3day'])
      nowWeatherDataArr.push(props.weatherData[0]['4day'])
      nowWeatherDataArr.push(props.weatherData[0]['5day'])
      nowWeatherDataArr.push(props.weatherData[0]['6day'])
      setWeatherData(nowWeatherDataArr)
    }
  }, [props.weatherData])

  return (
    <>
      <div className="d-flex weatherBox">
        {weatherData.map((value, index) => {
          return (
            <div className="col-2">
              <p>{value.date}</p>
              <figure className="WxImg">
                <img src={value.WxImg} alt="" />
              </figure>
              <ul className="d-flex">
                <li>
                  <img src="/images/eventImg/icons/detail/MaxT.svg" alt="" />
                  {value.MaxT + '度'}
                </li>
                <li>
                  <img src="/images/eventImg/icons/detail/MinT.svg" alt="" />
                  {value.MinT + '度'}
                </li>
              </ul>
              <p>{'降雨 ' + value.rain}</p>
              <p>
                <img src="/images/eventImg/icons/detail/waveH.svg" alt="" />
                {value.waveH + '(m)'}
              </p>
              <p>
                <i
                  class="fas fa-angle-double-down"
                  style={{ transform: 'rotate(' + value.waveDirNum + 'deg)' }}
                ></i>
                {'  ' + value.waveDir}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default EventWeatherContent
