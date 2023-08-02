import { useState } from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const initialProducts = [
    {
      _id: "64c91ddc5fe36e836a52adab",
      category: "album",
      name: "new images sd",
      desc: "hey this is a product",
      price: "100rs",
      date: "2023-08-01T14:59:40.535Z",
      __v: 0,
    },
    {
      _id: "64c91ddc5fe36e836a52adab",
      category: "psd",
      name: "new images sd",
      desc: "hey this is a product",
      price: "100rs",
      date: "2023-08-01T14:59:40.535Z",
      __v: 0,
    },
  ];
  const [products, setproducts] = useState(initialProducts);
  return (
    <ProductContext.Provider value={{ products, setproducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
