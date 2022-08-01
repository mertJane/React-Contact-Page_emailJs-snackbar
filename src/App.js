import React from "react";
import Contact from "./components/Contact";
import background from "../public/assets/987.jpg";

import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <img src={background} alt="img" />
      <Contact />
    </div>
  );
};

export default App;
