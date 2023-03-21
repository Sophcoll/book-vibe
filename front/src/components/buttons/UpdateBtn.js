// STYLE SHEET
import "./Buttons.scss";

const UpdateBtn = ({ colorBrightness }) => {

    return ( 
        <button className={colorBrightness > 0.3 ? "button button--big button--margin-left dark" : "button button--big button--margin-left"}>
            Update
        </button>
     );
}

export default UpdateBtn;