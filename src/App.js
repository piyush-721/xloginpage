import React, {useState} from "react";

function App() {
  const [value, setValue] = useState("user");
  const [password, setPassword] = useState("password");

  const handleUserChange = (e) => {
    setValue(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("success");
  }

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h1>Login Page</h1>
      <label>Username:</label>
      <input type="text" value={value} onChange={handleUserChange} required></input> <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} required></input> <br />
      <button type="submit">Submit</button> 
    </form>
  );
}

export default App;
