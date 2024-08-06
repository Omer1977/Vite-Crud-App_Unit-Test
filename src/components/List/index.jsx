const List = ({ users }) => {
  return (
    <table className="table my-4 table-dark table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>İsim</th>
          <th>E-mail</th>
          <th>Yaş</th>
        </tr>
      </thead>
      <tbody data-testid="table-body">
        {users.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.mail}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
