// COMPONENT
import MainFooter from "../components/footers/MainFooter";

// STYLE SHEET
import "./Books.scss";

const Books = () => {

    return ( 
        <div>
            <div className="books">
                <ul className="books__list">
                    <li className="books__list list-item">
                        <h2>Book one</h2>
                        <h4>01</h4>
                    </li>
                </ul>
            </div>
            <MainFooter />

        </div>
     );
}
 
export default Books;
