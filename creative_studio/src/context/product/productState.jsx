import { useState } from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const initialProducts = [{}];
  const [products, setproducts] = useState(initialProducts);

  // Fetch a Product
  const fetchProduct = async () => {
    // TODO: API Call
    const response = await fetch(`/api/product/fetchproducts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setproducts(json);
  };

  // Add a Product
  const addProduct = async (category, name, desc, price, imageURL) => {
    // TODO: API Call
    const response = await fetch(`/api/product/addproducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ category, name, desc, price, imageURL }),
    });
    const product = await response.json();
    setproducts(products.concat(product));
  };

  //Delete a Note
  const deleteProduct = async (id) => {
    // TODO: API Call
    const response = await fetch(`/api/product/deleteproduct/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json;
    console.log(json);
    const newProducts = products.filter((product) => {
      return product._id !== id;
    });
    setproducts(newProducts);
  };

  //Edit a Product
  const updateProduct = async (id, category, name, desc, price, imageURL) => {
    // API Call
    const response = await fetch(`/api/product/updateproducts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ category, name, desc, price, imageURL }),
    });
    const json = await response.json();

    let newProducts = JSON.parse(JSON.stringify(products));
    for (let index = 0; index <= newProducts.length; index++) {
      if (newProducts[index]._id === id) {
        newProducts[index].category = category;
        newProducts[index].name = name;
        newProducts[index].desc = desc;
        newProducts[index].price = price;
        newProducts[index].imageURL = imageURL;
        break;
      }
    }
    setproducts(newProducts);
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProduct,
        addProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
