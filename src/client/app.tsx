import React from "react";

const isLoggedIn: boolean = true;

const App: React.FC = () => {
  return <div>{isLoggedIn ? <h1>Hi, your in!</h1> : <h1>Login !</h1>}</div>;
};

export default App;
