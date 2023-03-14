// STYLE SHEET
import "./Buttons.scss";

const BackBtn = ({ brightness }) => {

  // brightness prop being passed down from 'AddBook' parent component. Gauges how bright the user's background color is to evaluate whether button should be dark or light to contrast;
  return <button className={brightness > 0.3 ? "button button--back dark" : "button button--back"}>back</button>;
};

export default BackBtn;
