import { createStore,applyMiddleware } from 'redux'

// 合并多个Reducers
// import { combineReducers } from 'redux'

import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// 合并多个Reducers
// const allReducers = combineReducers({
//     reducer
// })

// 合并多个Reducers
// const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))


export default store



