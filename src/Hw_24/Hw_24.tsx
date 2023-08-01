import React from "react";
import p from "./images/P.gif";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import P_ch from "./P_Ch/P_ch";
import P_tom from "./P_tom/P_tom";
import P_sa from "./P_sa/P_sa";
import SimplePizza from "./SimplePizza/SimplePizza";

export default function Hw_24(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/simplePizza" element={<SimplePizza />} />
          <Route path="/cheese" element={<P_ch />} />
          <Route path="/tomato" element={<P_tom />} />
          <Route path="/sausage" element={<P_sa />} />
        </Route>
      </Routes>
    </>
  );
}
