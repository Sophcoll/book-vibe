// STYLE SHEET
import "./Buttons.scss";

const BackBtn = ({ colorBrightness }) => {

  // brightness prop being passed down from 'AddBook', 'Book Details' and parent component. Gauges how bright the user's background color is to evaluate whether button should be dark or light to contrast;
  return <button className={colorBrightness > 0.3 ? "button button--back dark" : "button button--back"}>back</button>;
};

export default BackBtn;
