import { combineReducers } from 'redux'


// 第一步：建立reducer
// action = {type, value}
// type: ADD_VALUE, MINUS_VALUE
// ex. action = {type: 'ADD_VALUE', value: 10}
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_VALUE':
            return state + action.value
        case 'MINUS_VALUE':
            return state - action.value
        case 'INIT_VALUE':
            return action.value
        default:
            return state
    }
}





//合併多個reducer(歸納函式)，為了配合瀏覽器開發外掛而必須的
const memberReducer = combineReducers({

})
export { memberReducer }