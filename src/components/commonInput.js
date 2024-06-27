import React, { useState } from "react";
import { Input, Button, Table } from "antd";
import 'antd/dist/antd.css';

const InputHandler = ({ onSubmit, editMode = false, initialData = {} }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError("Both fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }
    setError("");
    onSubmit({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="header-box">
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        style={{ marginBottom: '10px' }}
      />
      <Button type="primary" onClick={handleSubmit}>
        {!!editMode ? "Edit user" : "Add user"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputHandler;
