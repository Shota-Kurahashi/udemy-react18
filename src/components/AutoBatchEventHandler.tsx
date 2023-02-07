import React, { useState } from "react";

export const AutoBatchEventHandler = () => {
  console.log("AuthBatchEventHandler()");
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  const onClickHandler = () => {
    console.log(state);
    setState((state) => state + 1);
    console.log(state);
    setState2((state2) => state2 + 1);
  };
  return (
    <div>
      <button onClick={onClickHandler}>Stateの更新</button>
      <p>{state}</p>
      <p>{state2}</p>
    </div>
  );
};
