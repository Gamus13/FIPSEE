import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';
import { toast } from "react-toastify";
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
import { useState } from "react";


export default function Login() {

	const [id, idchange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    
   

	const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
       
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }
 
	const { setUser, csrfToken } = useAuth();
	const [error, setError] = React.useState(null);

	// utilisateur de connexion
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		const body = {
			email: email.value,
			password: password.value,
		};
		await csrfToken();
		try {
			const resp = await axios.post('/login', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				return <Navigate to="/profile" />;
			}
		} catch (error) {
			if (error.response.status === 401) {
				setError(error.response.data.message);
			}
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
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}
						>
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
							<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
							/>
							<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							>
							Connexion
							</Button>
							<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
								Forgot password
								</Link>
							</Grid>
							
							<Grid item>
								<Link href="#" variant="body2">
								{" Sign Up"}
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
