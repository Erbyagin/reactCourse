import React, { useState } from "react";
import api from "../API";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  console.log(api.users.fetchAll());

  let count = users.length;

  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderPhrase = (number) => {
    switch (number) {
      case 0:
        return "Никто не тусанет";
      case 1:
        return number + " человек тусанет";
      case 2:
        return number + " человека тусанут";
      case 3:
        return number + " человека тусанут";
      case 4:
        return number + " человека тусанут";
      default:
        return number + " человек тусанет";
    }
  };

  const handleDelete = (user) => {
    console.log(user.item._id);
    const id = user.item._id;
    const newTable = users.filter((item) => item._id !== id);

    setUsers(newTable);
    console.log(newTable);
  };

  let loadTable = users.map((item) => {
    let qual = item.qualities.map((q) => {
      let classes = "badge m-2 bg-";
      classes += q.color;
      return <span className={classes}>{q.name} </span>;
    });
    return (
      <tr key={item._id}>
        <td>{item.name}</td>
        <td>{qual}</td>
        <td>{item.profession.name}</td>
        <td>{item.completedMeetings}</td>
        <td>{item.rate}/5</td>
        <td>
          <button
            onClick={() => handleDelete({ item })}
            className="badge m-2 bg-danger"
          >
            delete
          </button>
        </td>
      </tr>
    );
  });
  if (count === 0) {
    return (
      <>
        <span className={getBageClasses()}>
          <h5>{renderPhrase(count)} с тобой сегодня</h5>
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className={getBageClasses()}>
          <h5>{renderPhrase(count)} с тобой сегодня</h5>
        </span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{loadTable}</tbody>
        </table>
      </>
    );
  }
};
export default Users;
