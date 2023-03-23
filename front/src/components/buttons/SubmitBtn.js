// STYLE SHEET
import "./Buttons.scss";

const SubmitBtn = ({ brightness }) => {
    return ( 
        <button className={brightness > 0.3 ? "button button--big button--margin-left dark" : "button button--big button--margin-left"}>
            Submit
        </button>
     );
}

export default SubmitBtn;