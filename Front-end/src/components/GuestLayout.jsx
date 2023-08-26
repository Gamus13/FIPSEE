import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function GuestLayout() {
	const { user } = useAuth();

	// si l'utilisateur est connecté, rediriger vers la page de profil
	if (user) {
		return <Navigate to="/profile" />;
	}
	return (
		<>
			<Outlet />
		</>
	);
}
