import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'
import axios from 'axios';

// import {Grid, CardContent, Typography} from "@mui/material"
// import Container from  "@mui/material/Container";
import Card from '../Dashbord/DashbordProjet/Card/Card';




export default function List() {
    const [products, setProducts] = useState([])

    useEffect(()=>{ 
        const fetchProducts = async () => {
            await axios.get(`http://localhost:8000/api/products`).then(({data})=>{
                setProducts(data)
            })
        }

        fetchProducts();
    }, []);


    return (
        <div style={{ display: "flex" }}>
            {products.map((product) => (
                <Card
                    key={product.id}
                    data={product}
                />
            ))}
        </div>
    )
}