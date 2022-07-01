import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    const userStorage = localStorage.getItem("user");
    const data = JSON.parse(userStorage);

    console.log("test", data);
    if (
      userData.username === data.username &&
      userData.password === data.password
    ) {
      localStorage.setItem("isLogin", true);
      return navigate("/profile");
    } else {
      return navigate("/register");
    }
  };

  console.log(userData);
  return (
    <div>
      <h1>Login</h1>
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

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
