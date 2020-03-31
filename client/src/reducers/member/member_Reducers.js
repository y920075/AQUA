import { combineReducers } from 'redux'

// register, login, logout, get userinfo
const user = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case 'USER_REGISTER':
      return { ...action.value, isAuth: true }
    case 'USER_LOGIN':
      return { ...action.value, isAuth: true }
    case 'USER_LOGOUT':
      return { ...action.value, isAuth: false }
    case 'GET_USERINFO':
      return { ...action.value, isAuth: true }
    default:
      return state
  }
}

//get user data
const userData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_userData':
      return action.value
    default:
      return state
  }
}

// change user info
const changeData = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_INFO':
      return action.value
    default:
      return state
  }
}


//會員得到優惠券資料
const userCouponData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USERCOUPON':
      return action.value
    default:
      return state
  }
}

// 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
const memberReducer = combineReducers({
  // counter,
  userData,
  user,
  userCouponData,
  changeData
})

export { memberReducer }
