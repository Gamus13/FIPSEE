import { useState, useEffect } from 'react';
import axios from 'axios';

const useFilteredProducts = (status) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get(`http://localhost:8000/api/products/filter?filterStatus=${status}`)
      .then(response => {
        const filteredProducts = response.data;
        setProducts(filteredProducts);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [status]);

  return products;
};

export default useFilteredProducts;