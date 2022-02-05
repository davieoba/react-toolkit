//====> REACT TOOLKIT CODE
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../features/counterSlice'
import toggleReducer from './../features/toggleSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer
  }
})

export default store
//====> PURE REDUX CODE
// import { createStore } from 'redux'

// const counterReducer = (state = { counter: 0, show: true }, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         counter: state.counter + 1
//       }
//     case 'increase':
//       return {
//         ...state,
//         counter: state.counter + action.payload
//       }
//     case 'decrement':
//       return {
//         ...state,
//         counter: state.counter - 1
//       }
//     case 'toggle':
//       return {
//         ...state,
//         show: !state.show
//       }
//     default:
//       return state
//   }
// }

// const store = createStore(counterReducer)

// export default store
