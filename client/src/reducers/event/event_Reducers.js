import { combineReducers } from 'redux'

//取得活動列表資料
const eventData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_EVENTDATA':
      return action.value
    default:
      return state
  }
}

const eventTypeData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_EVENT_TYPEDATA':
      return action.value
    default:
      return state
  }
}

//合併多個reducer(歸納函式)，為了配合瀏覽器開發外掛而必須的
const eventReducer = combineReducers({
  eventData,
  eventTypeData,
})
export { eventReducer }
