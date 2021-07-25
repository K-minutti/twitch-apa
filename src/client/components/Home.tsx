import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello! Welcome home.</h1>
      <button>
        <a href="/logout">Logout</a>
      </button>
    </div>
  );
};

export default Home;
