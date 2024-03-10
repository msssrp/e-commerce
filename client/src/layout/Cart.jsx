import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Cart;
