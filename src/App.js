import React from "react";
import "./Global.css";
import "./animation.css";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Service from "./Pages/Service";
import Blog from "./Components/Blog";
import Contact from "./Pages/Contact";
import BlogDetails from "./Pages/BlogDetails";
import ServiceDetails from './Pages/ServiceDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Service />} path="/service" />
        <Route element={<ServiceDetails />} path="/service/:slug" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<BlogDetails />} path="/blog/:slug" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
