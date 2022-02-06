import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  increaseByAmount
} from './../features/counterSlice'
import { toggle } from './../features/toggleSlice'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.value)
  const show = useSelector((state) => state.toggle.value)

  // console.log(counter)
  // console.log(show)
  const toggleCounterHandler = () => {
    dispatch(toggle())
  }

  const incrementHandler = () => {
    dispatch(increment())
  }

  const increaseHandler = () => {
    dispatch(increaseByAmount(5))
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      {/* {toggle && ( */}
      <div>
        <button onClick={incrementHandler}> Increment </button>
        <button onClick={increaseHandler}> Increase by 5 </button>
        <button onClick={decrementHandler}> Decrement </button>
      </div>
      {/* )} */}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
