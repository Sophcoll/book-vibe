// HOOKS
import { NavLink } from "react-router-dom";

// COMPONENTS
import AddBookBtn from "../buttons/AddBookBtn";

// STYLE SHEETS
import "./Footers.scss";

const MainFooter = () => {
    return ( 
        <footer className="footer footer--main">
            <div className="footer__logo">
                <h1>book vibe ~</h1>
                <p>read a book, colour its vibe.</p>
            </div>
            <NavLink to={"/add-book"}>
            <AddBookBtn />
            </NavLink>
        </footer>
     );
}
 
export default MainFooter;