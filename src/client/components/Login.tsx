import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./styles/Login.styles";

const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="landingPage" className={classes.landingContainer}>
      <img
        className={classes.apalanding}
        src="../../assets/apalanding-logo.png"
      />
      <Button className={classes.loginButton}>
        <img
          className={classes.spotifyLogo}
          src="../../assets/Spotify_Icon.png"
        />
        <a href="/login">
          <p className={classes.text}>Login With Spotify</p>
        </a>
      </Button>

      <img className={classes.waves} src="../../assets/waves.png" />
    </div>
  );
};

export default Login;
