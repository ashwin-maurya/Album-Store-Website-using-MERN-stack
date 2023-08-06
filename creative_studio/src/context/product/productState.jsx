import { useState } from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const initialProducts = [{}];
  const [products, setproducts] = useState(initialProducts);
  const [success, setSuccess] = useState(false);

  // Fetch a Product
  const fetchProduct = async () => {
    // TODO: API Call
    try {
      const response = await fetch(`/api/product/fetchproducts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { success, products } = await response.json();
      if (success) {
        setproducts(products);
      } else {
        alert("Failed. Internal Server Error");
      }
    } catch (error) {
      setSuccess(false);
      if (error.response) {
        if (error.response.status === 500) {
          alert("Internal Server Error. Please try again later.", "failed");
        } else {
          alert("An error occurred. Please try again later.", "failed");
        }
      } else {
        alert(
          "Network Error. Please check your internet connection.",
          "failed"
        );
      }
    }
  };

  // Add a Product
  const addProduct = async (category, name, desc, price, imageURL) => {
    // TODO: API Call
    try {
      const response = await fetch(`/api/product/addproducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ category, name, desc, price, imageURL }),
      });
      const { success, product } = await response.json();
      console.log(response.status);

      if (success) {
        setproducts(products.concat(product));
        setSuccess(success);
      } else {
        alert("Failed. Internal Server Error");
      }
    } catch (error) {
      setSuccess(false);
      if (error.response) {
        if (error.response.status === 500) {
          alert("Internal Server Error. Please try again later.", "failed");
        } else {
          alert("An error occurred. Please try again later.", "failed");
        }
      } else {
        alert(
          "Network Error. Please check your internet connection.",
          "failed"
        );
      }
    }
  };

  //Delete a Note
  const deleteProduct = async (id) => {
    // TODO: API Call
    try {
      const response = await fetch(`/api/product/deleteproduct/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      // const json = await response.json;
      const json = await response.json();
      if (json.success) {
        const newProducts = products.filter((product) => {
          return product._id !== id;
        });
        setproducts(newProducts);
        setSuccess(json.success);
      } else {
        alert("Failed. Internal Server Error");
      }
    } catch (error) {
      setSuccess(false);
      if (error.response) {
        if (error.response.status === 500) {
          alert("Internal Server Error. Please try again later.", "failed");
        } else {
          alert("An error occurred. Please try again later.", "failed");
        }
      } else {
        alert(
          "Network Error. Please check your internet connection.",
          "failed"
        );
      }
    }
  };

  //Edit a Product
  const updateProduct = async (id, category, name, desc, price, imageURL) => {
    // API Call
    try {
      const response = await fetch(`/api/product/updateproducts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ category, name, desc, price, imageURL }),
      });
      const json = await response.json();

      if (json.success) {
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
        setSuccess(json.success);
      } else {
        alert("Failed. Internal Server Error");
      }
    } catch (error) {
      setSuccess(false);
      if (error.response) {
        if (error.response.status === 500) {
          alert("Internal Server Error. Please try again later.", "failed");
        } else {
          alert("An error occurred. Please try again later.", "failed");
        }
      } else {
        alert(
          "Network Error. Please check your internet connection.",
          "failed"
        );
      }
    }
  };
  return (
    <ProductContext.Provider
      value={{
        success,
        products,
        setSuccess,
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
