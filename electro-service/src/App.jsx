import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Service from "./Service";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Info from "./Info";
import Login from "./Login";
import Register from "./Register";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import Home from "./Home";

import EditBlog from "./EditBlog";
import AboutDetails from "./AboutDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/details/:id" element={<BlogDetails />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/about-us-details" element={<AboutDetails />} />
      </Routes>

      <Info />
      <Footer />
    </>
  );
}

export default App;
