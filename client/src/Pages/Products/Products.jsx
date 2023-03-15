import React from "react";
import NavBar from "../../Components/Header/NavBar";
import DonateProduct from "./DonateProduct";
import RequestProduct from "./RequestProduct";

const Products = () => {
  return (
    <>
      <NavBar />
      <DonateProduct />
      <RequestProduct />
    </>
  );
};

export default Products;
