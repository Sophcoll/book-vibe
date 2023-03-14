
// COMPONENTS
// import Landing from "./pages/Landing";
import AddBook from "./pages/AddBook";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";


import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  return (
    <div className="App">
      < AddBook />
      {/* < Books /> */}


      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
