import React from "react";
import { MdDone } from "react-icons/md";

const Snackbar = (props) => {
  return (
    <div className="popup">
      <h1 className="success-message">
        {props.message}
        <MdDone
          size={35}
          style={{
            color: "#77DD77",
            marginLeft: "14px",
            border: "3px solid white",
            borderRadius: "50%"
          }}
        />{" "}
      </h1>
    </div>
  );
};

export default Snackbar;
