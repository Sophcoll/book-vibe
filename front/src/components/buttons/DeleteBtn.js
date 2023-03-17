// STYLE SHEET
import "./Buttons.scss";

const DeleteBtn = ({ deleteHandler }) => {
    return ( 
        <button onClick={deleteHandler} className="button button--small">
            Delete
        </button>
     );
}
 
export default DeleteBtn;