import { BasicTypes } from "./typescript";
import { ObjectLiterals } from "./typescript";
import { CounterWithHook, FormsPage, LoginPage, UserPage } from "./components";
import { Counter } from "./components/Counter";
import { BasicFunctions } from "./typescript";

function App() {
  return (
    <>
      <main>
        <h1> Introduccion a TS - React</h1>
        <BasicTypes />
        <hr style={{ border: "1px solid red", width: "100%" }} />
        <ObjectLiterals></ObjectLiterals>
        <hr style={{ border: "1px solid red", width: "100%" }} />
        <BasicFunctions></BasicFunctions>
        <hr style={{ border: "1px solid red", width: "100%" }} />
        <Counter></Counter>
        <hr style={{ border: "1px solid red", width: "100%" }} />
        <CounterWithHook></CounterWithHook>
        <hr style={{ border: "1px solid red", width: "100%" }} />
        <LoginPage></LoginPage>
        <hr style={{ border: "1px solid red", width: "100%" }} />
        <UserPage></UserPage>
        <hr style={{ border: "1px solid red", width: "100%" }} />
        <FormsPage></FormsPage>
        <hr style={{ border: "1px solid red", width: "100%" }} />
      </main>
    </>
  );
}

export default App;
