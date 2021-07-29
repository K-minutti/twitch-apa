import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { loginSuccessful, refreshTokens } from "./controllers/auth";

const App: React.FC = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const authenticationValid: boolean = loginSuccessful();
    if (authenticationValid) setAuthentication(authenticationValid);
    else {
      refreshTokens();
    }
  }, [isAuthenticated]);

  return <div>{isAuthenticated ? <Home /> : <Login />}</div>;
};

export default App;
