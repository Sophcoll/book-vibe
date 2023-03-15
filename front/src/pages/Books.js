//HOOKS
import { NavLink } from "react-router-dom";
import BooksList from "../components/book-list/BooksList";

// COMPONENT

import BackBtn from "../components/buttons/BackBtn";
import MainFooter from "../components/footers/MainFooter";

// STYLE SHEET
import "./Books.scss";

const Books = () => {

  return (
    <div>
      <div className="books">
        < BooksList />
     

        {/* <NavLink to={'/'}>
          <BackBtn />
        </NavLink> */}
      </div>
      <MainFooter />
    </div>
  );
};

export default Books;
