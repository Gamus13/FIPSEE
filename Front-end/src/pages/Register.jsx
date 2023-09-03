import React from 'react';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
import  Logo from '../images/Logo-fipsee.png'


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






export default function Register() {

	

	const { setUser } = useAuth();
	const [nameError, setNameError] = React.useState('');
	const [lastNameError, setlastNameError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
	// enregistrer l'utilisateur
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, lastName, email, password, cpassword } = e.target.elements;
		const body = {
			name: name.value,
			lastName: lastName.value,
			email: email.value,
			password: password.value,
			password_confirmation: cpassword.value,
		};
		try {
			const resp = await axios.post('/register', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				return <Navigate to="/profile" />;
			}
		} catch (error) {
			if (error.response.status === 422) {
				console.log(error.response.data.errors);
				if (error.response.data.errors.name) {
					setNameError(error.response.data.errors.name[0]);
				} else {
					setNameError('');
				}
				if (error.response.data.errors.lastName) {
					setlastNameError(error.response.data.errors.lastName[0]);
				} else {
					setlastNameError('');
				}
				if (error.response.data.errors.email) {
					setEmailError(error.response.data.errors.email[0]);
				} else {
					setEmailError('');
				}
				if (error.response.data.errors.password) {
					setPasswordError(error.response.data.errors.password[0]);
				} else {
					setPasswordError('');
				}
			}
		}
	};

	return (

		<>
	
			<Container component="main" maxWidth="lg">
				<Box
					sx={{
					marginTop: 8,
					marginLeft: 32,
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
							onSubmit={handleSubmit}
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
							/>
							<TextField
							margin="normal"
							required
							fullWidth
							name="cpassword"
							
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
								Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
							</Grid>
						</Box>
						</Box>
					</Grid>
					</Grid>
				</Box>
			</Container>



			{/*<section className="bg-transparent-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<a
						href="#"
						className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
						<img
							className="w-40 h-43 mr-2"
							src={Logo}
							alt="logo"
						/>
					
					</a>
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 lg:mt-11px sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Créer et compte
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								action="#"
								method="post"
								onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="name"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Nom et prénom
									</label>
									<input
										type="text"
										name="name"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Jhone Doe"
										required
									/>
									{nameError && (
										<p className="text-sm text-red-600">{nameError}</p>
									)}
								</div>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
										required
									/>
									{emailError && (
										<p className="text-sm text-red-600">{emailError}</p>
									)}
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
									{passwordError && (
										<p className="text-sm text-red-600">{passwordError}</p>
									)}
								</div>
								<div>
									<label
										htmlFor="cpassword"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Confirm password
									</label>
									<input
										type="password"
										name="cpassword"
										id="cpassword"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
									/>
								</div>

								<button
									type="submit"
									className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
									Create an account
								</button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{' '}
									<Link
										to="/"
										className="font-medium text-primary-600 hover:underline dark:text-primary-500">
										Login here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>*/}
		</>
	);
}
