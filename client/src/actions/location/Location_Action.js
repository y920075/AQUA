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
