import { combineReducers } from 'redux'

// 新增訂單回傳資料
const memberCheckOutResponse = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_ORDER':
      return action.value
    default:
      return state
  }
}

const orderData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ORDERDETAILDATA':
      return action.value
    default:
      return state
  }
}

const sellerOrderData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SELLERORDERDATA':
      return action.value
    default:
      return state
  }
}

//合併多個reducer(歸納函式)，為了配合瀏覽器開發外掛而必須的
const orderReducer = combineReducers({
  memberCheckOutResponse,
  orderData,
  sellerOrderData,
})
export { orderReducer }
