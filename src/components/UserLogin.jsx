import React, { useState } from "react";
import axios from "axios";

const UserLogin = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", credentials);
      if (response.data.success) {
        setMessage(response.data.message);
        // Redirect or handle success action
        alert("User Login Successful!");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error during user login:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserLogin;
