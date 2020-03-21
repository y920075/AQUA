import {combineReducers} from 'redux'

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
const sellerEdit = (state = {},action) => {
    switch (action.type) {
        case 'SELLER_EDIT':
            return {...action.data}
        case 'SELLER_UPDATE':
            return {...action.data}
        default:
            return state
    }
}
const coupon = (state = {},action) => {
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
const couponInsert = (state = {},action) => {
    switch (action.type) {
        case 'COUPON_INSERT':
            return action.value
        default:
            return state
    }
}

const sellerInfo = (state = {},action) => {
    switch (action.type) {
        case 'SELLER_INFO':
            return action.value
        default:
            return state
    }
}
// 合併多個reducer (必要，為了要配合瀏覽器開發外掛使用)
const rootReducer = combineReducers({
    // user,
    sellerEdit,
    sellerInfo,
    coupon,
    couponInsert 
})

export { rootReducer }