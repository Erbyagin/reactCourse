import React, { useState } from "react";
import Users from "../components/users";
import SearchStatus from "../components/searchStatus";
import api from "../API";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  console.log(api.users.fetchAll());

  const handleDelete = (userId) => {
    const newTable = users.filter((item) => item._id !== userId);
    setUsers(newTable);
  };

  const [theme, setTheme] = useState("default");

  const handleClick = () => {
    setTheme("red");
  };
  const handleToggelBookmark = (id) => {};
  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        onDelete={handleDelete}
        onBookmark={handleClick}
        theme={theme}
        users={users}
      />
    </>
  );
};

export default App;
