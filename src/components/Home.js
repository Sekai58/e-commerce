import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Products from "./Products/Products";
import OrderList from "./OrderList";
import { Navigate } from "react-router-dom";
import Main from "./LandingPage/Main";

function Home() {
  const users = localStorage.getItem("auth");
  const auth = JSON.parse(users).map((user) => user.role);
  console.log(auth);
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

            <Route path="/products" element={<Products />} exact />
            <Route
              path="/orderlist"
              element={auth == "ADMIN" ? <OrderList /> : <Navigate to="/" />}
              exact
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default Home;
