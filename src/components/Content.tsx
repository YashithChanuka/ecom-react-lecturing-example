import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import AdminPage from "../pages/AdminPage";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import ProductCatalog from "../pages/ProductCatalog";

type ContentProps = {};

type ContentState = {};

export default class Content extends Component<ContentProps, ContentState> {
  state = {};

  render() {
    return (
      <div className="mt-20 p-4">
        <Routes>
          <Route path="/" element={<ProductCatalog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Routes>
      </div>
    );
  }
}
