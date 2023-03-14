// STYLE SHEET
import "./ColorWheel.scss";

const ColorWheel = ({ handleColor }) => {

    // handleColor() function being passed down from 'AddBook' component (also goes through 'AddBookFooter'). Listens for a change event on the color input field below and feeds back the value of the target element.
    return ( 
        <div className="color-wheel">
            <input onChange={handleColor} type="color" className="color-wheel__input"/>
        </div>
     );
}
 
export default ColorWheel;