import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layaout() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-10">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Layaout;
