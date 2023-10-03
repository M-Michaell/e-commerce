import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";
// import ProductsApp from "../pages/ProductsApp";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import ProductDetails from "../pages/ProductDetails";
// import Cart from "../pages/Cart";
// import NotFound from "../pages/notFound";
const ProductsApp = React.lazy(() => import("../pages/ProductsApp"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const ProductDetails = React.lazy(() => import("../pages/ProductDetails"));
const Cart = React.lazy(() => import("../pages/Cart"));
const NotFound = React.lazy(() => import("../pages/notFound"));

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<ProductsApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
