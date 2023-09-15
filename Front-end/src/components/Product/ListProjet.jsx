import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'
import axios from 'axios';

// import {Grid, CardContent, Typography} from "@mui/material"
// import Container from  "@mui/material/Container";
import Card from '../Dashbord/DashbordProjet/Card/Card';




export default function List() {
    const [products, setProducts] = useState([])

    // useEffect(()=>{ 
    //     const fetchProducts = async () => {
    //         await axios.get(`http://localhost:8000/api/products`).then(({data})=>{
    //             setProducts(data)
    //         })
    //     }

    //     fetchProducts();
    // }, []);


    // const deleteProduct = async (id) => {
    //     const isConfirm = await Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         return result.isConfirmed
    //       });

    //       if(!isConfirm){
    //         return;
    //       }

    //       await axios.delete(`http://localhost:8000/api/products/${id}`).then(({data})=>{
    //         Swal.fire({
    //             icon:"success",
    //             text:data.message
    //         })
    //         fetchProducts()
    //       }).catch(({response:{data}})=>{
    //         Swal.fire({
    //             text:data.message,
    //             icon:"error"
    //         })
    //       })
    // }

    // console.log("Modal is open :", modalIsOpen);
    // console.log("Current index :", currentIndex);

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