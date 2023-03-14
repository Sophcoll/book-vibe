import ColorPicker from "../color-picker/ColorPicker";
import "./Footers.scss";

const AddBookFooter = ({ handleColor }) => {
    return ( 
        <footer className="footer footer--add-book">
            < ColorPicker handleColor={handleColor}/>
        </footer>
     );
}
 
export default AddBookFooter;