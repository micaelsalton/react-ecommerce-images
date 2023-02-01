import React from "react"
import {Routes, Route} from "react-router-dom"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"
import Header from "./components/Header"


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;