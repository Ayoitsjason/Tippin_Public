import React from "react";
import ReactDOM from "react-dom";
import { toggleBool } from "../utils/helper";

const BackdropHook = ({
  setBackdropOpen,
  backdropOpen,
  setMessageFormOpen,
  messageFormOpen,
}) => {
  const onClick = () => {
    setBackdropOpen(toggleBool(backdropOpen));
    setMessageFormOpen(toggleBool(messageFormOpen));
  };

  const content = (
    <div onClick={onClick} className="backdrop-hook__container"></div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("backdrop-hook")
  );
};

export default BackdropHook;
