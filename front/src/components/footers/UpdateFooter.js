// HOOKS
import { useState } from "react";

// COMPONENTS
import ColorWheel from "../color-wheel/ColorWheel";

// STYLE SHEET
import "./Footers.scss";

const UpdateFooter = ({ userBackgroundColor, handleColor }) => {

  // const [backgroundColor, setBackgroundColor] = useState(bookDetails)

  return (
    <footer className="footer">
      <div className="color-picker">
        <span style={
            userBackgroundColor && userBackgroundColor
              ? { backgroundColor: userBackgroundColor}
              : null
          } className="current-color">
            <input onChange={handleColor} type="color" />
          </span>
        <div className="color-picker__text">
          <h4>Current color vibe</h4>
          <p>
            Colour not quite right? Click the circle on the left to update to one that better suits the vibe of the
            book.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default UpdateFooter;
