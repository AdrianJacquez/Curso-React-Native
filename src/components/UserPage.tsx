import { useUsers } from "../hooks/useUsers";

export const UserPage = () => {
  const { usuarios, prevPage, nextPage } = useUsers();

  return (
    <>
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  style={{
                    borderRadius: "100px",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={nextPage}>Next Page</button>
      <button onClick={prevPage}>Prev Page</button>
    </>
  );
};
