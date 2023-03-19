// STYLE SHEET
import "./Buttons.scss";

const DeleteBtn = ({ deleteHandler, bookDetails }) => {
    return ( 
        <button  onClick={deleteHandler} className={bookDetails.brightness > 0.3 || bookDetails.brightness > 0.3 ? "button dark" : "button"}>
            Delete
        </button>
     );
}
 
export default DeleteBtn;