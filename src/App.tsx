import React from "react";
import { Customers } from "./components/Customers";
import { Description } from "./components/Description";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Header />
      <Description />
      <Introduction />
      <Customers/>
    </>
  );
}

export default App;
