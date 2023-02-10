import React from "react";
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
        <main
          style={{
            backdropFilter: "initial",
            backgroundColor: "rgb(233, 255, 219)",
            color: "rgb(7, 4, 29)",
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} exact />
            <Route path="/carts" element={<Carts />} exact />
            <Route path="/products" element={<Products />} exact />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default Home;
