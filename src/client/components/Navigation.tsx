import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav>
      <a href="/">
        <img className="nav-logo" src="../../assets/apalanding-logo.png" />
      </a>
      <a href="/logout">Logout</a>
    </nav>
  );
};

export default Navigation;
