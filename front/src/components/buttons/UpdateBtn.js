// STYLE SHEET
import "./Buttons.scss";

const UpdateBtn = ({ brightness }) => {

    return ( 
        <button className={brightness > 0.3 ? "button button--big button--margin-left dark" : "button button--big button--margin-left"}>
            Update
        </button>
     );
}

export default UpdateBtn;