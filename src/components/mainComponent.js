import React, { useState, useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser, editUser } = props;
  const [editingUser, setEditingUser] = useState(null);
  const handleSubmit = ({ name, email }) => {
    if (editingUser) {
      editUser(editingUser.id, { name, email });
      setEditingUser(null);
    } else {
      addUser({ name, email });
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} initalData={editingUser} />
      <SimpleTable dataSource={userState.users} deleteUser={deleteUser} editUser={handleEdit} />
    </div>
  );
}

export default MainComponent;
