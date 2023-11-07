

import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import {useState, useEffect, useRef} from 'react';
import axios from '../../axios';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

	export default function AuthInvestisseur() {
			const { register, handleSubmit, formState: { errors } } = useForm();
			// const { setUser } = useAuth();
			const [emailError, setEmailError] = useState('');
		
			const handlesLoginSubmit = async (data, e) => {
			e.preventDefault();
			const { name, lastName, email, password, cpassword } = data;
			const body = {
				name: name,
				lastName: lastName,
				email: email,
				password: password,
				password_confirmation: cpassword,
			};
		
			try {
				const resp = await axios.post('/register/investor', body);
				if (resp.status === 200) {
				setUser(resp.data.user);
				// Redirection vers "/Dashbord_Investisseur"
				}
			} catch (error) {
				if (error.response && error.response.status === 409) {
				console.log(error.response.data.message);
				const emailErrorMessage = error.response.data.errors.email[0];
				console.log(emailErrorMessage);
				setEmailError(emailErrorMessage);
				} else if (error.response && error.response.status === 422) {
				console.log(error.response.data.errors);
				} else {
				console.log("Une erreur s'est produite lors de l'inscription.", error.response.data.errors);
				}
			}
			};
			// const { setUser } = useAuthInvest();
			// const { register, handleSubmit, formState: { errors }, control } = useForm();
			// const history = useHistory(); // Utilisez useHistory pour effectuer la redirection
		  
			// const [emailError, setEmailError] = useState('');
		  
			// const handleRegister = async (data) => {
			//   try {
			// 	const { name, lastName, email, password, cpassword } = data;
			// 	const body = {
			// 	  name: name,
			// 	  lastName: lastName,
			// 	  email: email,
			// 	  password: password,
			// 	  password_confirmation: cpassword,
			// 	};
		  
			// 	const resp = await axios.post('/register/investor', body);
			// 	if (resp.status === 200) {
			// 	  setUser(resp.data.user);
			// 	  history.push('/investisseur'); // Redirection vers "/Dashbord_Investisseur" après une inscription réussie
			// 	}
			//   } catch (error) {
			// 	if (error.response && error.response.status === 409) {
			// 	  console.log(error.response.data.message);
			// 	  const emailErrorMessage = error.response.data.errors.email[0];
			// 	  console.log(emailErrorMessage);
			// 	  setEmailError(emailErrorMessage);
			// 	} else if (error.response && error.response.status === 422) {
			// 	  console.log(error.response.data.errors);
			// 	}
			//   }
			// };
			// const onSubmit = handleSubmit(handleRegister);
		
		return (

			<>
		
				<Container component="main" maxWidth="lg">
					<Box
						sx={{
						marginTop: 1,
						marginLeft: 10,
						}}
					>
						<Grid container>
						<CssBaseline />
						<Grid
							item
							xs={false}
							sm={4}
							md={7}
							sx={{
							backgroundImage: "url(https://source.unsplash.com/random)",
							backgroundRepeat: "no-repeat",
							backgroundColor: (t) =>
								t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
							backgroundSize: "cover",
							backgroundPosition: "center",
							}}
						/>
						<Grid
							item
							xs={12}
							sm={8}
							md={5}
							component={Paper}
							elevation={6}
							square
						>
							<Box
							sx={{
								my: 6, //ici on peut modifier les dimension vertical de notre composent formulaire d'inscription
								mx: 4,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
							}}
							>
							<Typography component="h1" variant="h5">
								Inscription
							</Typography>
							<Box
								component="form"
								action="#"
								method="post"
								noValidate
								onSubmit={handleSubmit(handlesLoginSubmit)}
								// onSubmit={handleSubmit}
								sx={{ mt: 1 }}
							>	
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
									<TextField
										autoComplete="given-name"
										name="name"
										required
										fullWidth
										id="name"
										{...register("name", {
											required: "votre nom est requis.",
											// pattern: {
											// 	value: /^{5,}$/,
											// 	message: 'Veuillez entrer un mot de passe correct 	',
											// },
										})}
										error={Boolean(errors.name)}
										helperText={errors.name?.message}
										
										label="Noms"
										autoFocus
									/>
									</Grid>
									<Grid item xs={12} sm={6}>
									<TextField
										required
										fullWidth
										id="lastName"
										label="Prenoms"
										name="lastName"
										{...register("lastName", {
											required: "votre Prenoms est requis.",
											// pattern: {
											// 	value: /^{5,}$/,
											// 	message: 'Veuillez entrer un mot de passe correct 	',
											// },
										})}
										error={Boolean(errors.lastName)}
										helperText={errors.lastName?.message}
										autoComplete="family-name"
									/>
									</Grid>
								</Grid>
								<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								autoFocus
								{...register("email", { 
									required: "Email est requis.", 
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Veuillez entrer un email valide ',
									},
								})}
								error={Boolean(errors.email)}
								helperText={errors.email?.message}
								/>
								<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Mot de passe"
								type="password"
								id="password"
								autoComplete="current-password"
								{...register("password", {
									required: "votre Mot de passe est requis.",
									// pattern: {
									// 	value: /^{5,}$/,
									// 	message: 'Veuillez entrer un mot de passe correct 	',
									// },
								})}
								error={Boolean(errors.password)}
								helperText={errors.password?.message}
								/>
								<TextField
								margin="normal"
								required
								fullWidth
								name="cpassword"
								{...register("cpassword", {
									required: "votre Mot de passe n'est pas confirmer.",
									// pattern: {
									// 	value: /^{5,}$/,
									// 	message: 'Veuillez entrer un mot de passe correct 	',
									// },
								})}
								error={Boolean(errors.cpassword)}
								helperText={errors.cpassword?.message}
								label="confirmation"
								type="password"
								id="cpassword"
								autoComplete="current-password"
								/>
								
								<Button
								type="submit"
								fullWidth
								variant="contained"
								
								
								sx={{ mt: 2, mb: 2 }} // ceci defini la taille du formulaire en effectuant les divers modifications elle s'adapte
								>
								S' inscrire
								</Button>
								<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Connexion
									</Link>
								</Grid>
								<Grid item>
									{/* <Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
									</Link> */}
								</Grid>
								</Grid>
							</Box>
							</Box>
						</Grid>
						</Grid>
					</Box>
				</Container>



				
			</>
		);
	}


