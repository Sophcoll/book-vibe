import { NavLink } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
  return (
    <NavLink to={'/books'}>
      <div className="landing-page">
        <div className="landing-page__header">
          <h1 className="landing">book vibe</h1>
          <h2 className="landing">read a book, colour its vibe.</h2>
          <p className="logo">~</p>
        </div>
        <p className="landing-page__subtext">click anywhere to begin</p>
      </div>
    </NavLink>
  );
};

export default Landing;
