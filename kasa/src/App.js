import "./style/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import "./components/Header/Header.sass";
import Footer from "./components/Footer/Footer.jsx";
import "./components/Footer/Footer.css";
import Accommodation from "./pages/Accommodation/Accommodation.jsx";
import APropos from "./pages/APropos/APropos.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`/Accommodation/:id`} element={<Accommodation />} />
          <Route path={"/*"} element={<NotFound />} />
          <Route path={"/a-propos"} element={<APropos />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
