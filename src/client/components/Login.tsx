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
  const styleClasses = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={styleClasses.container}>
        <img src="../../assets/apalanding-logo.png" />
        <Button
          className={styleClasses.root}
          variant="contained"
          color="primary"
        >
          <img
            className={styleClasses.spotifyLogo}
            src="../../assets/Spotify_Icon.png"
          />
          Login With Spotify
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Login;
