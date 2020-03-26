import axios from 'axios'

// get 經緯度
export const getMapmarks = data => ({
  type: 'GET_GCSDATA',
  value: data,
})
export const fetchMapmarks = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/divelocation/marks')
      .then(function(response) {
        // Success
        const marks = response.data
        dispatch(getMapmarks(marks))
      })
      .catch(function(error) {
        // Error
        console.log(error)
      })
  }
}

//取得地區所屬地點
export const getRegion = data => ({
  type: 'GET_REGIONDATA',
  value: data,
})
export const fetchRegions = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/divelocation/region')
      .then(function(response) {
        // Success
        const regions = response.data
        dispatch(getRegion(regions))
      })
      .catch(function(error) {
        // Error
        console.log(error)
      })
  }
}

//取得地點詳細資訊
export const getLocationinfo = data => ({
  type: 'GET_INFODATA',
  value: data,
})
export const fetchInfos = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/divelocation/info')
      .then(function(response) {
        // Success
        const infos = response.data
        dispatch(getLocationinfo(infos))
      })
      .catch(function(error) {
        // Error
        console.log(error)
      })
  }
}
//取得圖片
export const getImages = data => ({
  type: 'GET_LOCUSIMAGES',
  value: data,
})
export const fetchImages = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/divelocation/images')
      .then(function(response) {
        // Success
        const Images = response.data
        dispatch(getImages(Images))
      })
      .catch(function(error) {
        // Error
        console.log(error)
      })
  }
}
//取得海況
export const getSeastate = data => ({
  type: 'GET_SEASTATES',
  value: data,
})
export const fetchSeastate = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/divelocation/seastate')
      .then(function(response) {
        // Success
        const Seastate = response.data
        dispatch(getSeastate(Seastate))
      })
      .catch(function(error) {
        // Error
        console.log(error)
      })
  }
}
//取得一周預報
export const getWeeklyreport = data => ({
  type: 'GET_WEEKREPORT',
  value: data,
})
export const fetchWeeklyreport = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/divelocation/weekweather')
      .then(function(response) {
        // Success
        const Weeklyreport = response.data
        dispatch(getWeeklyreport(Weeklyreport))
      })
      .catch(function(error) {
        // Error
        console.log(error)
      })
  }
}
//取得潮汐預報
export const getTidereport = data => ({
  type: 'GET_TIDEREPORT',
  value: data,
})
export const fetchgetTidereport = () => {
  return dispatch => {
    axios
      .get('http://localhost:5000/divelocation/tide')
      .then(function(response) {
        // Success
        const getTidereports = response.data
        dispatch(getTidereport(getTidereports))
      })
      .catch(function(error) {
        // Error
        console.log(error)
      })
  }
}
