import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../Redux/slice/counter.slice";

function Counter(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={handleInc}>+</button>
      {count.counter}
      <button onClick={handleDec}>-</button>
    </div>
  );
}

export default Counter;
