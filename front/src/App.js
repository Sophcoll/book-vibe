
import { BrowserRouter, Routes, Route } from "react-router-dom";


// COMPONENTS
import Landing from "./pages/Landing";
import AddBook from "./pages/AddBook";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";


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
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
