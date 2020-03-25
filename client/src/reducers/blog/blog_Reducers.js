import { combineReducers } from 'redux'

const blogData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_BLOGDATA':
      return action.value
    default:
      return state
  }
}

//合併多個reducer(歸納函式)，為了配合瀏覽器開發外掛而必須的
const blogReducer = combineReducers({
  blogData,
})
export { blogReducer }
