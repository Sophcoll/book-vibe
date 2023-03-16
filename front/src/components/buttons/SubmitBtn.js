// STYLE SHEET
import "./Buttons.scss";

const SubmitBtn = ({ brightness }) => {
    return ( 
        <button className={brightness > 0.3 ? "button dark" : "button submit"}>
            Submit
        </button>
     );
}

export default SubmitBtn;