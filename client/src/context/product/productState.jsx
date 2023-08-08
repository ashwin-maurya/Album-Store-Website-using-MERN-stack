import { React, useState } from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const initialProducts = [{}];
  const [products, setProducts] = useState(initialProducts);
  const [success, setSuccess] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  // Fetch a Product
  const fetchProduct = async (page) => {
    try {
      const response = await fetch(`/api/product/fetchproducts?page=${page}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { success, products, totalPages } = await response.json();
      if (success) {
        setTotalPages(totalPages);
        if (page === 1) {
          setProducts(products);
        } else {
          setProducts((prevProducts) => [...prevProducts, ...products]);
        }

        setPage(page);
        setHasMore(page < totalPages); // Set hasMore to true if there are more pages to fetch
      } else {
        setHasMore(false); // Set hasMore to false if there are no more pages to fetch
        alert("Failed. Internal Server Error");
      }
    } catch (error) {
      setHasMore(false); // Set hasMore to false if an error occurred
      alert("An error occurred. Please try again later.");
    }
  };

  // Add a Product
  const addProduct = async (
    category,
    name,
    desc,
    size,
    price,
    imageURLs,
    downloadUrl
  ) => {
    // TODO: API Call
    try {
      const response = await fetch(`/api/product/addproducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          category,
          name,
          desc,
          size,
          price,
          imageURLs,
          downloadUrl,
        }),
      });
      const { success, product } = await response.json();
      console.log(response.status);

      if (success) {
        setProducts(products.concat(product));
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
        setProducts(newProducts);
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
  const updateProduct = async (
    id,
    category,
    name,
    desc,
    size,
    price,
    uimageURLs,
    downloadUrl
  ) => {
    // API Call
    try {
      const response = await fetch(`/api/product/updateproducts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          category,
          name,
          desc,
          size,
          price,
          uimageURLs,
          downloadUrl,
        }),
      });
      const json = await response.json();

      if (json.success) {
        let newProducts = JSON.parse(JSON.stringify(products));
        for (let index = 0; index <= newProducts.length; index++) {
          if (newProducts[index]._id === id) {
            newProducts[index].category = category;
            newProducts[index].name = name;
            newProducts[index].desc = desc;
            newProducts[index].size = size;
            newProducts[index].price = price;
            newProducts[index].imageURLs = uimageURLs;
            newProducts[index].downloadUrl = downloadUrl;
            break;
          }
        }
        setProducts(newProducts);
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
        page,
        totalPages,
        hasMore,
        setHasMore,
        setPage,
        setSuccess,
        fetchProduct,
        addProduct,
        deleteProduct,
        updateProduct,
        setProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
