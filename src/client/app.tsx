import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";

const isLoggedIn: boolean = false;

const App: React.FC = () => {
  return <div>{!isLoggedIn ? <Login /> : <Home />}</div>;
};

export default App;
