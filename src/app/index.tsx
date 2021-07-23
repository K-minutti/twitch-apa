import React from "react";
import { render } from "react-dom";

const Hello: React.FC = () => {
  return (
    <div>
      <h1>Hello ! - ra</h1>,
    </div>
  );
};

render(<Hello />, document.getElementById("app"));
