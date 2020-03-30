import { combineReducers } from 'redux'

//取得商品列表資料
const itemData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ITEMDATA':
      return action.value
    default:
      return state
  }
}

//取得商品列側欄資料
const asideData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ASIDEDATA':
      return action.value
    default:
      return state
  }
}

//取得商品詳細資料
const itemDetailData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ITEMDETAILDATA':
      return action.value
    default:
      return state
  }
}

//點擊之後+1
const clickUpdateData = (state = {}, action) => {
  switch (action.type) {
    case 'CLICK_UPDATE':
      return action.value
    default:
      return state
  }
}

//合併多個reducer(歸納函式)，為了配合瀏覽器開發外掛而必須的
const itemReducer = combineReducers({
  itemData,
  itemDetailData,
  asideData,
  clickUpdateData,
})
export { itemReducer }
