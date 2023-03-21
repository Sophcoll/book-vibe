// STYLE SHEET
import "./Buttons.scss";

const SubmitBtn = ({ colorBrightness }) => {
    return ( 
        <button className={colorBrightness > 0.3 ? "button button--big button--margin-left dark" : "button button--big button--margin-left"}>
            Submit
        </button>
     );
}

export default SubmitBtn;