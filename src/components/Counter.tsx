import { useState } from "react";

export const Counter = () => {
  const [contador, setcontador] = useState(5);
  
  return (
    <div>
      <h3>COUNTER</h3>
      <button onClick={() => setcontador(contador + 1)}>+</button>
      <input value={contador}></input>
      <button
        onClick={() =>
          contador > 0 ? setcontador(contador - 1) : setcontador(contador)
        }
      >
        -
      </button>
    </div>
  );
};
