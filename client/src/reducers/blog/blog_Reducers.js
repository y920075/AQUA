import { combineReducers } from 'redux'

//取得文章資料
const blogData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_BLOGDATA':
      return action.value
    default:
      return state
  }
}

//取得文章評論資料
const blogCommentsData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_BLOGCOMMENTSDATA':
      return action.value
    default:
      return state
  }
}


//新增文章評論
const contentCommentsData = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTENTCOMMENTSDATA':
      return action.value
    default:
      return state
  }
}

//新增文章
const contentData = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTENTDATA':
      return action.value
    default:
      return state
  }
}

//更新文章
const editContentData = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_CONTENTDATA':
      return action.value
    default:
      return state
  }
}

//合併多個reducer(歸納函式)，為了配合瀏覽器開發外掛而必須的
const blogReducer = combineReducers({
  blogData,
  blogCommentsData,
  contentCommentsData,
  contentData,
  editContentData,
})
export { blogReducer }
