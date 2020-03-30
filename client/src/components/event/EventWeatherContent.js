import React, { useEffect, useState } from 'react'

//傳入參數 props.weatherData = 當地天氣資料
//2020-03-21
function EventWeatherContent(props) {
  const [weatherData, setWeatherData] = useState([]) //存放天氣資料的陣列
  let sliderIndex = 0

  //取出天氣資料存放到本地state
  useEffect(() => {
    const nowWeatherDataArr = []
    //如果天氣資料存在
    if (props.weatherData[0]) {
      //push到新陣列
      nowWeatherDataArr.push(props.weatherData[0]['1day'])
      nowWeatherDataArr.push(props.weatherData[0]['2day'])
      nowWeatherDataArr.push(props.weatherData[0]['3day'])
      nowWeatherDataArr.push(props.weatherData[0]['4day'])
      nowWeatherDataArr.push(props.weatherData[0]['5day'])
      nowWeatherDataArr.push(props.weatherData[0]['6day'])
      setWeatherData(nowWeatherDataArr)
    }
  }, [props.weatherData])

  const handleWeatherSlider = () => {
    const silderBox = document.querySelector('div.silderBox')
    silderBox.style.transform = `translateX(-${sliderIndex * 345}px)`
  }

  return (
    <>
      <div className="weatherBox">
        <div
          className="arrow-left"
          onClick={() => {
            if (sliderIndex <= 0) {
              sliderIndex = 0
            } else {
              sliderIndex = sliderIndex - 1
            }
            handleWeatherSlider()
          }}
        >
          <i class="fas fa-arrow-left"></i>
        </div>
        <div
          className="arrow-right"
          onClick={() => {
            if (sliderIndex >= 2) {
              sliderIndex = 2
            } else {
              sliderIndex = sliderIndex + 1
            }
            handleWeatherSlider()
          }}
        >
          <i class="fas fa-arrow-right"></i>
        </div>
        <div className="d-flex silderBox">
          {weatherData.length > 0 && weatherData[0]
            ? weatherData.map((value, index) => {
                return (
                  <>
                    <div className="col-xl-2 col-6 weatherInfo" key={index}>
                      <p>{value.date}</p>
                      <figure className="WxImg">
                        <img src={value.WxImg} alt="" />
                      </figure>
                      <ul className="d-flex">
                        <li>
                          <img
                            src="/images/eventImg/icons/detail/MaxT.svg"
                            alt=""
                          />
                          {value.MaxT + '度'}
                        </li>
                        <li>
                          <img
                            src="/images/eventImg/icons/detail/MinT.svg"
                            alt=""
                          />
                          {value.MinT + '度'}
                        </li>
                      </ul>
                      <p>{'降雨 ' + value.rain}</p>
                      <p>
                        <img
                          src="/images/eventImg/icons/detail/waveH.svg"
                          alt=""
                        />
                        {value.waveH + '(m)'}
                      </p>
                      <p>
                        <i
                          class="fas fa-angle-double-down"
                          style={{
                            transform: 'rotate(' + value.waveDirNum + 'deg)',
                          }}
                        ></i>
                        {'  ' + value.waveDir}
                      </p>
                    </div>
                  </>
                )
              })
            : ''}
        </div>
      </div>
    </>
  )
}

export default EventWeatherContent
