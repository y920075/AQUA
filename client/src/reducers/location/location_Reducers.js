import { combineReducers } from 'redux'

//取得位置經緯度
const mapmarksGCS = (state = [], action) => {
  switch (action.type) {
    case 'GET_GCSDATA':
      return action.value
    default:
      return state
  }
}
//取得地點列表
const Regions = (state = [], action) => {
  switch (action.type) {
    case 'GET_REGIONDATA':
      return action.value
    default:
      return state
  }
}
//取得詳細資訊
const LocusInfos = (state = [], action) => {
  switch (action.type) {
    case 'GET_INFODATA':
      return action.value
    default:
      return state
  }
}
//合併多個reducer(歸納函式)，為了配合瀏覽器開發外掛而必須的
const locationReducer = combineReducers({
  mapmarksGCS,
  Regions,
  LocusInfos,
})
export { locationReducer }
