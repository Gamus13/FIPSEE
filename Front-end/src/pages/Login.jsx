import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function Login() {
	const { register, handleSubmit, watch, formState: { errors }} = useForm();
	const onSubmit = (data) => console.log(data);
	const Notify = () => {
		toast.green("Vos informations ont bien été soumis - veuillez patienter " , {
		  position: toast.POSITION.TOP_LEFT
		})
	}

	const { setUser, csrfToken } = useAuth();
	const [error, setError] = React.useState(null);

	// utilisateur de connexion
	const handleLoginSubmit = async (data) => {
		const body = {
			email: data.email,
			password: data.password,
		};
		await csrfToken();
		try {
			const response = await axios.post('/login', body);
			const { data: user } = response;
			setUser(user);
			Notify();
		} catch (error) {
			setError(error.response.data.message);
		}
	};
	

	return (
		<>

			<Container component="main" maxWidth="lg">
				<Box
					sx={{
					marginTop: 8,
					marginLeft: 40, //ceci va centrer le formulaire pour les grand ecran
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
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
						>
						<Typography component="h1" variant="h5">
							Se connecter
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit(handleLoginSubmit)}
							
							sx={{ mt: 1 }}
						>
							<TextField
							margin="normal"
							required
							fullWidth
							id="outlined-basic"
							label="email"
							name="email"
							autoComplete="email"
							variant='outlined'
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
							id="outlined-basic"
							autoComplete="current-password"
							variant='outlined'
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
							<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="se souvenir de moi"
							/>
							<Button
							type="submit"
							fullWidth
							onClick={ e => Notify()}
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							>
							Connexion
							</Button>
							<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
								Mot de passe oublier?
								</Link>
							</Grid>
							
							<Grid item>
								<Link href="/" variant="body2">
								{"S'inscrire"}
								</Link>
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
