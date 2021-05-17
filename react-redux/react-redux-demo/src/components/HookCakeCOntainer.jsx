import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCount } from "../redux/counter/counterAction";

const HookCount = () => {
  const numberCount = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{numberCount}</p>
      <button onClick={() => dispatch(setCount())}>Increment</button>
    </div>
  );
};

export default HookCount;
