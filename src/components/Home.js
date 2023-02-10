import React from "react";
import "../App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Carts from "./Carts";
import Products from "./Products";
import Main from "./Main";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/carts" element={<Carts />} exact />
          <Route path="/products" element={<Products />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default Home;
