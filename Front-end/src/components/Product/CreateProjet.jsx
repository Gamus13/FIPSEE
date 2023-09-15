import  { useState } from "react";
import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
//import Row from 'react-bootstrap/Row';
///import Col from 'react-bootstrap/Col';
import axios from 'axios'
//import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function CreateProduct() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()
  const [validationError,setValidationError] = useState({})

  const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('title', title)
    formData.append('description', description)
    formData.append('image', image)

    await axios.post(`http://localhost:8000/api/products`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 3,
              borderRadius: 2,
            px: 4,
            py: 6,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              
            </Avatar>
            <Typography component="h1" variant="h5">
              Ajouter un projet
            </Typography>
            <Box component="form" noValidate onSubmit={createProduct} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="Name"
                    label=" Name"
                    autoFocus
                    type="text" 
                    value={title} 
                    onChange={(event)=>{
                      setTitle(event.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Image"
                    label="ajouter une image"
                    name="lastName"
                    autoComplete="file-name"
                    type="file" 
                    onChange={changeHandler}
                  />
                </Grid>
               
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="description"
                    label="description"
                    type="text"
                    id="Description"
                    value={description}
                    onChange={(event)=>{
                      setDescription(event.target.value)
                    }}
                  />
                </Grid>
               
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ajouter le projet
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          
        </Container>
      </ThemeProvider>




      {/*<div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create Product</h4>
                <hr />
                <div className="form-wrapper">
                  {
                    Object.keys(validationError).length > 0 && (
                      <div className="row">
                        <div className="col-12">
                          <div className="alert alert-danger">
                            <ul className="mb-0">
                              {
                                Object.entries(validationError).map(([key, value])=>(
                                  <li key={key}>{value}</li>   
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  <Form onSubmit={createProduct}>
                    <Row> 
                        <Col>
                          <Form.Group controlId="Name">
                              <Form.Label>Title</Form.Label>
                              <Form.Control type="text" value={title} onChange={(event)=>{
                                setTitle(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col>  
                    </Row>
                    <Row className="my-3">
                        <Col>
                          <Form.Group controlId="Description">
                              <Form.Label>Description</Form.Label>
                              <Form.Control as="textarea" rows={3} value={description} onChange={(event)=>{
                                setDescription(event.target.value)
                              }}/>
                          </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group controlId="Image" className="mb-3">
                          <Form.Label>Image</Form.Label>
                          <Form.Control type="file" onChange={changeHandler} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                      Save
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </>
  )
}