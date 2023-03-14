// HOOKS
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
// import Landing from "./pages/Landing";
import AddBook from "./pages/AddBook";
import Books from "./pages/Books";

function App() {
  return (
    <div className="App">
      {/* <AddBook /> */}
      < Books />


      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
