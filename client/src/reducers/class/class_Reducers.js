import { combineReducers } from 'redux'

//取得課程類型與等級
const classTypeData = (state = [], action) => {
  switch (action.type) {
    case 'GET_TYPEDATA':
      return action.value
    default:
      return state
  }
}

const classData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_CLASSDATA':
      return action.value
    default:
      return state
  }
}

//合併多個reducer(歸納函式)，為了配合瀏覽器開發外掛而必須的
const classReducer = combineReducers({
  classTypeData,
  classData,
})
export { classReducer }
