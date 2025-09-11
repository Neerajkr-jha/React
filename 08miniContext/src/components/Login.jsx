import React, { useState, useContext } from "react";
import UserContext from "../context/UsersContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser}=useContext(UserContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser({username,password})
  };

  return (
    <div>
      <h3>Login</h3>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      {" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
}

export default Login;
