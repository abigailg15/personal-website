import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup(props) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!props.trigger) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
      }, 300);
    } else {
      setIsClosing(false);
    }
  }, [props.trigger]);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      props.setTrigger(false);
    }, 300);
  };

  return props.trigger ? (
    <div className="overlay">
      <div className={`popup ${isClosing ? "popup-closing" : ""}`}>
        <div className="popup-inner">
          <button className="close" onClick={closePopup}>
            X
          </button>
          {props.children}
        </div>
      </div>
    </div>
  ) : null;
}

export default Popup;
