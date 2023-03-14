// STYLE SHEET
import "./Footers.scss";

// COMPONENT
import ColorWheel from "../color-wheel/ColorWheel";

// handleColor() function being passed through the down from 'AddBook' component. Listens for a change event on the color input field below and feeds back the value of the target element.
const AddBookFooter = ({ handleColor }) => {
  return (
    <footer className="footer">
      <div className="color-picker">
        <ColorWheel handleColor={handleColor} />
        <div className="color-picker__text">
          <h4>Pick a color vibe</h4>
          <p>
            Click the colour wheel to select a colour that suits the vibe of the
            book.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default AddBookFooter;
