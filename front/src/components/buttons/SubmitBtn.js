import "./SubmitBtn.scss";

const SubmitBtn = ({ brightness }) => {
    return ( 
        <button className={brightness > 0.3 ? "submit-btn dark" : "submit-btn"}>
            Submit
        </button>
     );
}

export default SubmitBtn;