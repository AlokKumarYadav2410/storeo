import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
  catch (error) {
    throw new Error("Failed to fetch products");
  }
}

export const fetchProductById = async (id) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
};