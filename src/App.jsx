import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";
import userState from "./hooks/userState";

function App() {
  const userInitialState = userState();

  return (
    <UserContext.Provider value={userInitialState}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
