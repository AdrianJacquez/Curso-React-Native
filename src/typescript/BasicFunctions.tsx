export const BasicFunctions = () => {
  const addTwoNumbers = (a: number, b: number): string => {
    // return a + b;
    return `${a + b}`;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar: {addTwoNumbers(36, 87)}</span>
    </>
  );
};
