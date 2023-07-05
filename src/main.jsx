import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./Global.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./pages/Menu.jsx";
import { About } from "./pages/About.jsx";
import { Help } from "./pages/Contact.jsx";
import { Home } from "./pages/Home.jsx";
import { Error } from "./pages/Error.jsx";
import ViewProducts from "./components/ViewProducts/ViewProducts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Product />} />
          <Route path="menu/:id" element={<ViewProducts />} />
          <Route path="/contact" element={<Help />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
