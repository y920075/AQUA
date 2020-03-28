import { combineReducers } from 'redux'

//取得地點留言
const Locationcomment = (state = [], action) => {
  switch (action.type) {
    case 'GET_LOCATIONCOMMENT':
      return action.value
    default:
      return state
  }
}
//取得部落格留言
const Blogcomment = (state = [], action) => {
  switch (action.type) {
    case 'GET_BLOGCOMMENT':
      return action.value
    default:
      return state
  }
}
const donelocationcomment = (state = [], action) => {
  switch (action.type) {
    case 'SENT_COMMENT':
      return action.value
    default:
      return state
  }
}
const commentReducer = combineReducers({
  Locationcomment,
  Blogcomment,
  donelocationcomment,
})
export { commentReducer }
