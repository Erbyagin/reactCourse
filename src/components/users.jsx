import React from "react";
import User from "../components/user";

const Users = ({ users, length, ...rest }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <User key={item._id} {...item} {...rest} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Users;
