import React, { useEffect, useState } from 'react'

//傳入參數 props.weatherData = 當地天氣資料
//2020-03-21
function EventWeatherContent(props) {
  const [weatherData, setWeatherData] = useState([]) //存放天氣資料的陣列

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
    console.log(weatherData.length > 0)
  }, [props.weatherData])

  return (
    <>
      <div className="d-flex weatherBox">
        {weatherData.length > 0 && weatherData[0].date
          ? weatherData.map((value, index) => {
              return (
                <>
                  <div className="col-2" key={index}>
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
    </>
  )
}

export default EventWeatherContent
