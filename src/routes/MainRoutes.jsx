import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/products/AddProduct";
import EditProduct from "../components/products/EditProduct";
import ProductList from "../components/products/ProductList";
import AddCategory from "../components/products/AddCategory";
import AboutPage from "../pages/AboutPage";
import { ContactPage } from "@mui/icons-material";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductList /> },
    { id: 3, link: "/addProduct", element: <AddProduct /> },
    { id: 4, link: "/editProduct/:id", element: <EditProduct /> },
    { id: 5, link: "/addCategory", element: <AddCategory /> },
    { id: 6, link: "/about", element: <AboutPage /> },
    { id: 7, link: "/contacts", element: <ContactPage /> },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
