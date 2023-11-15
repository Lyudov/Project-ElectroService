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
import Login from "./Login";
import Register from "./Register";
import CreateBlog from "./CreateBlog";

function App() {
  return (
    <>
      <Header />
      <Test />
      <Service />
      <About />
      <Blog />
      <Contact />
      <Login />
      <Register />
      <CreateBlog />
      <Info />
      <Footer />
    </>
  );
}

export default App;
