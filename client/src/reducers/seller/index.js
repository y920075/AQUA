import { combineReducers } from 'redux'

//action = {type, value}

//type: ADD_VALUE,MINUS_VALUE
//ex: action: {type: 'ADD_VALUE', value:10}

// const user = (state = {},action) => {
//     switch (action.type) {
//         case 'USER_REGISTER':
//             return {...action.data, isAuth: true}
//         case 'USER_LOGIN':
//             return {...action.data, isAuth: true}
//         case 'USER_LOGOUT':
//             return { isAuth: false }
//         default:
//             return state
//     }
// }
const sellerEdit = (state = {}, action) => {
  switch (action.type) {
    case 'SELLER_EDIT':
      return { ...action.data }
    case 'SELLER_UPDATE':
      return { ...action.data }
    default:
      return state
  }
}
const coupon = (state = {}, action) => {
  switch (action.type) {
    case 'COUPON_ALL_GET':
      return action.value
    case 'COUPON_GET_INSERT':
      return action.value
    case 'COUPON_INSERT':
      return action.value
    default:
      return state
  }
}
const couponInsert = (state = {}, action) => {
  switch (action.type) {
    case 'COUPON_INSERT':
      return action.value
    default:
      return state
  }
}

const sellerInfo = (state = {}, action) => {
  switch (action.type) {
    case 'SELLER_INFO':
      return action.value
    default:
      return state
  }
}

//----------------------賣家中心課程相關reducer----------------

const sellerClassData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SELLER_CLASSDATA':
      return action.value
    default:
      return state
  }
}

const cityData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CITY_DATA':
      return action.value
    default:
      return state
  }
}

const distData = (state = [], action) => {
  switch (action.type) {
    case 'GET_DIST_DATA':
      return action.value
    default:
      return state
  }
}

const typeDataForSeller = (state = [], action) => {
  switch (action.type) {
    case 'GET_CLASSTYPEDATA_FORSELLER':
      return action.value
    default:
      return state
  }
}

const levelDataForSeller = (state = [], action) => {
  switch (action.type) {
    case 'GET_CLASSLEVELDATA_FORSELLER':
      return action.value
    default:
      return state
  }
}

const addClassDataResponse = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CLASSDATA':
      return action.value
    default:
      return state
  }
}

const delClassDataResponse = (state = {}, action) => {
  switch (action.type) {
    case 'DEL_CLASSDATA':
      return action.value
    default:
      return state
  }
}

//----------------------賣家中心課程相關reducer----------------

// 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
const sellerReducer = combineReducers({
  // user,
  sellerEdit,
  sellerInfo,
  coupon,
  couponInsert,
  sellerClassData,
  cityData,
  distData,
  typeDataForSeller,
  levelDataForSeller,
  addClassDataResponse,
  delClassDataResponse,
})

export { sellerReducer }
