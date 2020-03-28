import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

//redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

//導入reducers
import { blogReducer } from './reducers/blog/blog_Reducers'
import { locationReducer } from './reducers/location/location_Reducers'
import { classReducer } from './reducers/class/class_Reducers'
import { eventReducer } from './reducers/event/event_Reducers'
import { itemReducer } from './reducers/item/item_Reducers'
import { orderReducer } from './reducers/order/order_Reducers'
import { memberReducer } from './reducers/member/member_Reducers'
import { sellerReducer } from './reducers/seller/sellerReducer'
import { commentReducer } from './reducers/comment/comment_Reducers'
//引入中介軟體
import thunk from 'redux-thunk'

//合併reducers
const rootReducer = combineReducers({
  blogReducer,
  classReducer,
  eventReducer,
  sellerReducer,
  itemReducer,
  orderReducer,
  locationReducer,
  memberReducer,
  commentReducer,
})

//使用中介軟體時，建立store的方法，需要額外建立一個composeEnhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
