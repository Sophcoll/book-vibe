import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Landing from "./pages/Landing";
import AddBook from "./pages/AddBook";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";
import UpdateBook from "./pages/UpdateBook";


function App() {
  return (
    <div className="App">

      {/* <AddBook /> */}
      {/* <BookList/> */}
      {/* < Books /> */}
   

      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Landing />} />
          <Route path="/books" element={< Books />} />
          <Route path="/add-book" element={< AddBook />} />
          <Route path="/books/:bookId" element={< BookDetails />} />
          <Route path="/books/:bookId/update" element={< UpdateBook />} />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
