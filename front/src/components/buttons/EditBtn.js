// STYLE SHEET
import "./Buttons.scss";

const EditBtn = ({ colorBrightness }) => {
  return (
    <button className={colorBrightness > 0.3 ? "button dark" : "button"}>
      Edit
    </button>
  );
};

export default EditBtn;
