import React from "react";
import { useStyles } from "./styles/Navigation.styles";

const Navigation: React.FC = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <img src="../../assets/apa.png" />
      <a className={classes.logout} href="/logout">
        Logout
      </a>
    </nav>
  );
};

export default Navigation;
