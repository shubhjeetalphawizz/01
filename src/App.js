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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Service />} path="/service" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
