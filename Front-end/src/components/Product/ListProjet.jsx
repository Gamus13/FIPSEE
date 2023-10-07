import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Dashbord/DashbordProjet/Card/Card';

export default function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get('http://localhost:8000/api/products').then(({ data }) => {
        setProducts(data);
      });
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ height: '80vh', overflow: 'auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '8%', marginRight: '5%', justifyContent: 'flex-end', gap: '18px' }}>
        {products.map((product) => (
          <Card key={product.id} data={product} style={{ flexBasis: 'calc(33.33% - 20px)', zIndex: -1 }} />
        ))}
      </div>
    </div>
  );
}