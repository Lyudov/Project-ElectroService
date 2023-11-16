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

import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-blog" element={<CreateBlog />} />
      </Routes>
      <Info />
      <Footer />
    </>
  );
}

export default App;
