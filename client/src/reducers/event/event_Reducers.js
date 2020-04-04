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

//取得活動列表資料(地圖用)
const eventDataForMap = (state = {}, action) => {
  switch (action.type) {
    case 'GET_EVENTDATA_MAP':
      return action.value
    default:
      return state
  }
}

//取得活動類型資料
const eventTypeData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_EVENT_TYPEDATA':
      return action.value
    default:
      return state
  }
}

//取得活動詳細資料
const eventDetailData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_EVENT_DETAIL_DATA':
      return action.value
    default:
      return state
  }
}

//會員取得自己發起的活動資料
const memberEventDataSelf = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MEMBER_EVENT_SELF':
      return action.value
    default:
      return state
  }
}

//會員操作CRUD後，後端回傳的資料
const memberActionResponse = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENTDATA':
      return action.value
    case 'EDIT_EVENTDATA':
      return action.value
    case 'DEL_EVENTDATA':
      return action.value
    case 'APPLY_EVENT':
      return action.value
    case 'UNJOIN_EVENT':
      return action.value
    case 'UNJOIN_OTHER_EVENT':
      return action.value
    default:
      return state
  }
}

//會員取得自己發起的單一筆活動詳細資料
const memberEventDetailData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_EVENTDETAILDATA_FORMEMBER':
      return action.value
    default:
      return state
  }
}

//會員取得聊天室列表
const memberChatListData = (state = [], action) => {
  switch (action.type) {
    case 'MEMBER_GET_CHATLIST':
      return action.value
    default:
      return state
  }
}

//是否按下已過期按鈕
const isEnable = (state = false, action) => {
  switch (action.type) {
    case 'SWITCHBUTTON_ENABLE':
      console.log(action)
      return action.value
    default:
      return state
  }
}

//合併多個reducer(歸納函式)，為了配合瀏覽器開發外掛而必須的
const eventReducer = combineReducers({
  eventData,
  eventDataForMap,
  eventTypeData,
  eventDetailData,
  memberEventDetailData,
  memberEventDataSelf,
  memberActionResponse,
  memberChatListData,
  isEnable,
})
export { eventReducer }
