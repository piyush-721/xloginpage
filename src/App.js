import React, {useState} from "react";

function App() {
  const [value, setValue] = useState("user");
  const [password, setPassword] = useState("password");
  const[showUser, setShowUser] = useState(false);
  const [error, setError] = useState("");

  const handleUserChange = (e) => {
    setValue(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value === "user" && password === "password"){
      setShowUser(true);
      setError("");
    }
    else{
      setError("Invalid username or password");
    }
  }

  return (
    <div className="App">

      {showUser? (
        <p>Welcome, {value}</p>
      ) : (
        <form  onSubmit={handleSubmit}>
          <h1>Login Page</h1>
          <label>Username:</label>
          <input type="text" placeholder="username" onChange={handleUserChange} required></input> <br />
          <label>Password:</label>
          <input type="password" placeholder="password" onChange={handlePasswordChange} required></input> <br />
          <button type="submit">Submit</button> 

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>

  );
}

export default App;
