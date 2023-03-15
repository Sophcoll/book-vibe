//HOOKS
import { NavLink } from "react-router-dom";
import BookList from "../components/book-list/BookList";

// COMPONENT

import BackBtn from "../components/buttons/BackBtn";
import MainFooter from "../components/footers/MainFooter";

// STYLE SHEET
import "./Books.scss";

const Books = () => {

  return (
    <div>
      <div className="books">
        < BookList />
     

        {/* <NavLink to={'/'}>
          <BackBtn />
        </NavLink> */}
      </div>
      <MainFooter />
    </div>
  );
};

export default Books;
