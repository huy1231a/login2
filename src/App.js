 import './App.css';
 import React, { useState } from 'react';
 import LoginForm from './components/Loginform';

function App() {

  const adminuser = {
    username: "1@gmail.com",
    password: "1234567890"
  }

  const [user , setUser] = useState({username: "" , email: ""});
  const [error , setError] = useState("");

  const Login = details => {
    console.log(details);
    
    if (details.email == adminuser.email && details.password == adminuser.password){
      alert("ban dang nahp thanh cong")
      setUser({
        name:details.name,
        email: details.email
      });
    }else{
      alert ("ban nhap sai ")
    }
  }

  const logout = () => {
     setUser({name:"" , email:""})
  }


  return (
    <div className="App">
      {(user.email != "")? 
        <div className = "welecome">
          <h2>Welecome, <span>{user.name}</span></h2>
          <button className="btn" onClick={logout}>Logout</button>
        </div>
       : (
        <LoginForm Login={Login} error = {error}/>
      )}
    </div>
  );
}

export default App;
