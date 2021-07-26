import React from "react";
import Navigation from "./Navigation";

const Home: React.FC = () => {
  return (
    <div>
      <Navigation />
      <h1>Hello! Welcome home.</h1>
      <figure>
        <figcaption>Spotify preview url test</figcaption>
        <audio
          controls
          src="https://p.scdn.co/mp3-preview/0a128a305bb16b4e731f5d839f4cdb22d247f1dd?"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </div>
  );
};

export default Home;
