import "./ColorPicker.scss";

const ColorPicker = ({ handleColor }) => {




    return ( 
        <div className="color-wheel">
            <input onChange={handleColor} type="color" className="color-wheel__input"/>
        </div>
     );
}
 
export default ColorPicker;