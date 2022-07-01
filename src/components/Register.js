import { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log("test");
    const data = JSON.stringify(userData);
    localStorage.setItem("user", data);
  };

  console.log(userData);
  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={userData.username}
        name="username"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        value={userData.password}
        name="password"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
