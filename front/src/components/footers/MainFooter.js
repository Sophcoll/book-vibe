import AddBookBtn from "../buttons/AddBookBtn";
import "./Footers.scss";

const MainFooter = () => {
    return ( 
        <footer className="footer footer--main">
            <div className="footer__logo">
                <h1>book vibe ~</h1>
                <p>read a book, rate its vibe.</p>
            </div>
            <AddBookBtn />
        </footer>
     );
}
 
export default MainFooter;