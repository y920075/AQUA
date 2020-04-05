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

const giviAdd = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_GIVIDATA':
      return action.value
    default:
      return state
  }
}
const customer = (state = {}, action) => {
  switch (action.type) {
    case 'CUSTOMER_GET':
      return action.value
    case 'CUSTOMER_USE':
      return action.value
    default:
      return state
  }
}

const cutomeruse = (state = {}, action) => {
  switch (action.type) {
    case 'CUSTOMER_USE':
      return action.value
    default:
      return state
  }
}

const customermailtransfer = (state = {}, action) => {
  switch (action.type) {
    case 'MAIL_TRANSFER':
      return action.value
    default:
      return state
  }
}

const getNowCoupData = (state = {}, action) => {
  switch (action.type) {
    case 'NOWCOUPDATA':
      return action.value
    default:
      return state
  }
}

const getClickData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER_CLICK':
      return action.value
    default:
      return state
  }
}
// const memberEmail = (state = {}, action) => {
//   switch (action.type) {
//     case 'STORE_EMAIL':
//       return [...state, action.data]
//     default:
//       return state
//   }
// }
// const couponIdEmail = (state = {}, action) => {
//   switch (action.type) {
//     case 'STORE_EMAIL':
//       return [...state, action.data]
//     default:
//       return state
//   }
// }
const totalPrice = (state = {}, action) => {
  switch (action.type) {
    case 'TOTAL_DATA':
      return action.value
    default:
      return state
  }
}

//----------------------商品專區相關reducer----------------
const ItemUpload = (state = {}, action) => {
  switch (action.type) {
    case 'UPLOADED_ITEM':
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

const editClassDataResponse = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_CLASSDATA':
      return action.value
    default:
      return state
  }
}

const SellerClassDetailData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CLASSDETAILDATA_FORSELLER':
      return action.value
    default:
      return state
  }
}

const SellerCoachData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_COACH_DATA':
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
  giviAdd,
  customer,
  cutomeruse,
  customermailtransfer,
  getNowCoupData,
  sellerClassData,
  getClickData,
  totalPrice,
  ItemUpload,
  cityData,
  distData,
  typeDataForSeller,
  levelDataForSeller,
  addClassDataResponse,
  delClassDataResponse,
  SellerClassDetailData,
  editClassDataResponse,
  SellerCoachData,
})

export { sellerReducer }
