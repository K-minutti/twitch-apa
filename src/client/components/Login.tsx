import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./Login.style";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const Login: React.FC = () => {
  return (
    <div className="landing-container">
      <img src="../../assets/apalanding-logo.png" />
      <button>
        <a href="/login">
          <img className="spotify-icon" src="../../assets/Spotify_Icon.png" />
          Login With Spotify
        </a>
      </button>
      <img className="waves" src="../../assets/waves.png" />
    </div>
  );
};

export default Login;
