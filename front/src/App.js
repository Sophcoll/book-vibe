// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing";

import AddBook from "./pages/AddBook";

function App() {
  return (
    <div className="App">
      <AddBook />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
