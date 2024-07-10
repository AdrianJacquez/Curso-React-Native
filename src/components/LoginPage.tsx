import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);

  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  }, []);

  if (authStatus === "checking") {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }
  return (
    <>
      <h3>LoginPage</h3>

      {authStatus === "authenticated" ? (
        <div>
          Autenticado como: <pre> {JSON.stringify(user, null, 2)}</pre>
        </div>
      ) : (
        <div>No autenticado</div>
      )}
      {authStatus === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("user@gmail.com", "321")}>Login</button>
      )}
    </>
  );
};
