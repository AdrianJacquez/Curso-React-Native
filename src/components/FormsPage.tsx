import { useForm } from "react-hook-form";

type FormImputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register } = useForm<FormImputs>({
    defaultValues: {
      email: "user@gmail.cum",
      password: "12345",
    },
  });

  return (
    <>
      <form>
        <h3>FORMULARIOS</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="email"
            placeholder="Email"
            required
            {...register("email")}
          ></input>
          <input
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          ></input>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </>
  );
};
