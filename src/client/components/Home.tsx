import React from "react";
import Navigation from "./Navigation";
import MusicConsole from "./MusicConsole";

const Home: React.FC = () => {
  return (
    <main>
      <Navigation />
      <MusicConsole />
    </main>
  );
};

export default Home;
