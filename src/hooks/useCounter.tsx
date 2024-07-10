import { useState } from "react";

export const useCounter = () => {
  const [contador, setcontador] = useState(5);

  return {
    //PROPERTIES
    contador,
    setcontador,
  };
};
