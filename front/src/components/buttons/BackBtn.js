import "./BackBtn.scss";

const BackBtn = ({ brightness }) => {
  return <button className={brightness > 0.3 ? "back-btn dark" : "back-btn"}>back</button>;
};

export default BackBtn;
