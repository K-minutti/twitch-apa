import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles/Login.styles";

const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="landingPage" className={classes.landingContainer}>
      <img
        alt="Apa image logo"
        className={classes.apalanding}
        src="../../assets/apalanding-logo.png"
      />
      <Button
        aria-label="Click on button to login in using Spotify this will redirect to a new page"
        href="/login"
        className={classes.loginButton}
      >
        <img
          alt="Spotify Icon"
          className={classes.spotifyLogo}
          src="../../assets/Spotify_Icon.png"
        />
        <p className={classes.text}>Login With Spotify</p>
      </Button>

      <img
        alt="Grey waves image"
        className={classes.waves}
        src="../../assets/waves.png"
      />
    </div>
  );
};

export default Login;
