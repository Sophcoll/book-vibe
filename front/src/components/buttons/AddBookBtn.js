import "./AddBookBtn.scss";
import addImgBlue from "../../assets/add-book-blue.svg";

const AddBookBtn = () => {
    return ( 
        <button className="add-book-btn">
            <img src={addImgBlue} alt="Plus icon to add a book" />
        </button>
     );
}
 
export default AddBookBtn;