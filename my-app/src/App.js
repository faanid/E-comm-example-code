import React from "react";

import { BrowserRouter as Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Header />
          <Route exact path="/" element={<Photos />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
