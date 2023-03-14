// STYLE SHEET
import "./Buttons.scss";

const SubmitBtn = ({ brightness }) => {
    return ( 
        <button className={brightness > 0.3 ? "button dark" : "button"}>
            Submit
        </button>
     );
}

export default SubmitBtn;