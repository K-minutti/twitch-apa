import React from "react";

//Load user data to greet user by name

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello! Welcome home.</h1>
      <button>
        <a href="/logout">Logout</a>
      </button>
      <button>
        <a href="/api">Logout</a>
      </button>
    </div>
  );
};

export default Home;
