import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { isLoggedIn } from "./controllers/auth";

const App: React.FC = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    isLoggedIn().then(setAuthentication);
  }, [isAuthenticated]);

  return <div>{isAuthenticated ? <Home /> : <Login />}</div>;
};

export default App;
