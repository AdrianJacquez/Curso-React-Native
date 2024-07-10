import { useCounter } from "../hooks/useCounter";

export const CounterWithHook = () => {
  const { contador, setcontador } = useCounter();

  return (
    <div>
      <h3>COUNTER CON HOOK useCounter</h3>
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
