import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userInfo) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          username: userInfo.username,
          age: userInfo.age,
          id: Math.random().toString()
        }
      ];
    });
  };
  // other way
  // const addUserHandler2 = (uName, uAge) => {
  //   setUsersList((prevUsersList) => {
  //     return [...prevUsersList, { username: uName, age: uAge }];
  //   });
  // };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
