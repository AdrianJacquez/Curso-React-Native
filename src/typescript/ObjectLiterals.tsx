interface Person {
  age: number;
  lastName: string;
  fit?: boolean;
  address: Address;
}

interface Address {
  state: string;
  streat: string;
  numHouse: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 17,
    address: {
      state: "sinaloa",
      streat: "montañas",
      numHouse: 2563,
    },
    lastName: "jacquez",
    fit: true,
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
