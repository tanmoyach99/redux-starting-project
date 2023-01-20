import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  const { counter, showCounter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.showCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment(2));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
