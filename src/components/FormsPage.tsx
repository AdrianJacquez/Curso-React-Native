import { useForm } from "react-hook-form";

type FormImputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormImputs>({
    defaultValues: {
      email: "user@gmail.cum",
      password: "12345",
    },
  });

  const onSubmit = (myForm: FormImputs) => {
    console.log({ myForm });
  };

  console.log(watch("email"));
  console.log(watch("password"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <pre>{JSON.stringify(formState, null, 2)}</pre>
        </div>
      </form>
    </>
  );
};
