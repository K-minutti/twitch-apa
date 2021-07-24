import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";

const isLoggedIn: boolean = false;

const App: React.FC = () => {
  return <>{!isLoggedIn ? <Login /> : <h1>Login !</h1>}</>;
};

export default App;
