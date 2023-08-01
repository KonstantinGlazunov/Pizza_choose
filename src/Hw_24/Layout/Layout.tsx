import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout(): JSX.Element {
  return (
    <>
      <header>
        <h1>Pizza choose</h1>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
