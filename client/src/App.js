import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./page/Product";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
