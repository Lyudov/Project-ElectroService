import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Service from "./Service";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Info from "./Info";
import Test from "./Test";
import { getDatabase, push, ref } from "firebase/database";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Test />
      <Service />
      <About />
      <Blog />
      <Contact />
      <Info />
      <Footer />
    </>
  );
}

export default App;
