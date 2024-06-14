import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: {},
};

const ProductContextProvider = ({ children }) => {
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
    }
  };
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! create
  const createProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/products");
  };
  //! get
  const getProducts = async () => {
    const { data } = await axios(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  //! getOneProduct
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };
  //!edit
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
  };

  const values = {
    createProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
