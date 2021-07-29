import React from "react";
import { useStyles } from "./styles/Navigation.styles";

const Navigation: React.FC = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <img aria-label="Apa image logo" src="../../assets/apa.png" />
      <a
        aria-label="Button to logout"
        className={classes.logout}
        href="/logout"
      >
        Logout
      </a>
    </nav>
  );
};

export default Navigation;
