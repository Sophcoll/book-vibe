// COMPONENT
import addImgBlue from "../../assets/add-book-blue.svg";

// STYLE SHEET
import "./Buttons.scss";


const AddBookBtn = () => {
    return ( 
        <button className="button">
            <img src={addImgBlue} alt="Plus icon to add a book" />
        </button>
     );
}
 
export default AddBookBtn;