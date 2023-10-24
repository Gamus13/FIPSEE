// import {
//     Card,
//     Input,
//     Typography,
//     Select,
//     Option,
//     Button,
//   } from "@material-tailwind/react";
//   import React, { useState, useEffect } from 'react';
// import axios from '../../axios';
//   import { useForm, Controller } from "react-hook-form";
  
//   const AuthInvestisseur = () => {
//     const {
//       control,
//       handleSubmit,
//       formState: { errors },
//       getValues,
//       watch,
//       unregister,
//       reset,
//     } = useForm({
//       mode: "onTouched",
//     });
  
//     const domain = watch("domain");
  
//     // * Remove from FORM
//     useEffect(() => {
//       if (domain !== "others") {
//         unregister("otherdomainname");
//       }
//     }, [domain, unregister]);
  
//     const onSubmit = (data) => console.log(data);
  
//     return (
//       <div className="h-screen grid place-items-center bg-gray-50">
//         <Card color="transparent" shadow={true} className="p-7 bg-white">
//           <Typography variant="h4" color="blue-gray">
//             Sign Up
//           </Typography>
//           <Typography color="gray" className="mt-1 font-normal">
//             Enter your details to register.
//           </Typography>
//           <br />
//           <form
//             className="mb-4 w-[500px] grid grid-cols-2 gap-6"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <div>
//               <Controller
//                 name="Username"
//                 rules={{
//                   required: "Username is Required",
//                   minLength: {
//                     value: 3,
//                     message: "Minimum 3 characters required",
//                   },
//                 }}
//                 control={control}
//                 render={({ field }) => (
//                   <Input
//                     size="lg"
//                     {...field}
//                     label="Username"
//                     error={Boolean(errors?.Username?.message)}
//                   />
//                 )}
//               />
//               {errors?.Username?.message && (
//                 <span className="error-text">{errors?.Username?.message}</span>
//               )}
//             </div>
//             <div>
//               <Controller
//                 name="email"
//                 control={control}
//                 rules={{
//                   required: "Email ID is Required",
//                   pattern: {
//                     value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
//                     message: "Email ID is invaild",
//                   },
//                 }}
//                 render={({ field }) => (
//                   <Input
//                     type="email"
//                     size="lg"
//                     {...field}
//                     label="Email ID"
//                     error={Boolean(errors?.email?.message)}
//                   />
//                 )}
//               />
//               {errors?.email?.message && (
//                 <span className="error-text">{errors?.email?.message}</span>
//               )}
//             </div>
//             <div>
//               <Controller
//                 name="domain"
//                 control={control}
//                 rules={{
//                   required: "Domain is Required",
//                 }}
//                 render={({ field }) => (
//                   <Select
//                     label="Select Domain"
//                     {...field}
//                     error={Boolean(errors?.domain?.message)}
//                   >
//                     <Option value="designer">Designer</Option>
//                     <Option value="dev">Developer</Option>
//                     <Option value="tester">Tester</Option>
//                     <Option value="others">Others</Option>
//                   </Select>
//                 )}
//               />
//               {errors?.domain?.message && (
//                 <span className="error-text">{errors?.domain?.message}</span>
//               )}
//             </div>
//             {domain === "others" && (
//               <div>
//                 <Controller
//                   name="otherdomainname"
//                   control={control}
//                   rules={{
//                     required: "Domain Name is Required",
//                   }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       size="lg"
//                       label="Type Here"
//                       error={Boolean(errors?.otherdomainname?.message)}
//                     />
//                   )}
//                 />
//                 {errors?.otherdomainname?.message && (
//                   <span className="error-text">
//                     {errors?.otherdomainname?.message}
//                   </span>
//                 )}
//               </div>
//             )}
//             <div>
//               <Controller
//                 name="password"
//                 control={control}
//                 rules={{
//                   required: "Password is Required",
//                   pattern: {
//                     value:
//                       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
//                     message: "Password not strong enough",
//                   },
//                 }}
//                 render={({ field }) => (
//                   <Input
//                     type="password"
//                     {...field}
//                     size="lg"
//                     label="Password"
//                     error={Boolean(errors?.password?.message)}
//                   />
//                 )}
//               />
//               {errors?.password?.message && (
//                 <span className="error-text">{errors?.password?.message}</span>
//               )}
//             </div>
//             <div>
//               <Controller
//                 name="confirmpassword"
//                 control={control}
//                 rules={{
//                   required: "Confirm Password is Required",
//                   validate: (value) =>
//                     getValues("password") === value || "Passwords do not match",
//                 }}
//                 render={({ field }) => (
//                   <Input
//                     type="password"
//                     {...field}
//                     size="lg"
//                     label="Confirm Password"
//                     error={Boolean(errors?.confirmpassword?.message)}
//                   />
//                 )}
//               />
//               {errors?.confirmpassword?.message && (
//                 <span className="error-text">
//                   {errors?.confirmpassword?.message}
//                 </span>
//               )}
//             </div>
//             <div className="col-span-2 grid grid-cols-2 gap-3">
//               <Button type="reset" variant="outlined" onClick={() => reset()}>
//                 Reset
//               </Button>
//               <Button type="submit">Create Account</Button>
//             </div>
//           </form>
//         </Card>
//       </div>
//     );
//   };
  
//   export default AuthInvestisseur;

import React from 'react';
// import axios from '../axios';
import { useAuth } from '../../contexts/AuthContext';
// import  Logo from '../images/Logo-fipsee.png'
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


export default function AuthInvestisseur() {

    const { setUser } = useAuth();
    const [emailError, setEmailError] = useState('');
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
            const resp = await axios.post('/register/investor', body); // Appel à l'API /register
            if (resp.status === 200) {
            setUser(resp.data.user);
            return <Navigate to="/Dashbord_Investisseur" />;
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                console.log(error.response.data.message);
                const emailErrorMessage = error.response.data.errors.email[0]; // Récupérer la première valeur du tableau d'erreurs
                console.log(emailErrorMessage); // Afficher le message d'erreur dans la console
                setEmailError(emailErrorMessage);
                // Réinitialiser les autres messages d'erreur si nécessaire
                setNameError('');
                setlastNameError('');
                setPasswordError('');
            } else if (error.response && error.response.status === 422) {
                console.log(error.response.data.errors);
                // Gérer d'autres erreurs de validation du formulaire
                // ...
            } else {
                console.log("Une erreur s'est produite lors de l'inscription.", error.response.data.errors);
            }
            }
    };

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
							error={!!emailError}
							helperText={emailError} // Utiliser emailError pour afficher la valeur d'erreur
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



			
		</>
	);
}


