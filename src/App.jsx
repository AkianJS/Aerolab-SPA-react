import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/Aerolab-SPA-react/" element={<Home />} />
          <Route
            path="/Aerolab-SPA-react/product/:id"
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
