<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\LoginInvestorRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\RegisterInvestor;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller {
    public function index()
    {
        $users = User::all(); //ici je cree une variable $users qui va contenir tous les data de la table User e le rendre en json

        return response()->json([
            "results" => $users
        ],200); // ensuite on cree le composent search.jsx dans notre composant

    }

    // inscrire un nouveaux porteur de projets

    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $existingUser = User::where('email', $data['email'])->first();

        if ($existingUser) {
            return response()->json([
                'message' => 'This email is already taken by another user.'
            ], 409);
        }

        $user = User::create([
            'name' => $data['name'],
            'lastName' => $data['lastName'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 1); // 1 day

        return response()->json([
            'user' => new UserResource($user),
        ])->withCookie($cookie);
    }
    // inscription d'un utilisateur sous le profil investisseur

    public function registerInvestor(RegisterInvestor $request)
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'lastName' => $data['lastName'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role' => 'investisseur', // Ajoute le rôle "investisseur" au nouvel utilisateur
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 1); // 1 day

        return response()->json([
            'user' => new UserResource($user),
        ])->withCookie($cookie);
    }
    // se connecter à un profil porteur de projet

    public function login(LoginRequest $request) {
        $data = $request->validated();

        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json([
                'message' => 'Email or password is incorrect!'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 1); // Un jour

        return response()->json([
            'user' => new UserResource($user),
        ])->withCookie($cookie);
    }

    // se connecter a un profil investisseur
    public function logins(LoginInvestorRequest $request) {

        $data = $request->validated();

        $user = User::where('email', $data['email'])->where('role', 'investisseur')->first();

        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json([
                'message' => 'Email or password is incorrect!'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 1); // 1 day

        return response()->json([
            'user' => new UserResource($user),
        ])->withCookie($cookie);
    }



    // déconnecte une méthode utilisateur
    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();

        $cookie = cookie()->forget('token');

        return response()->json([
            'message' => 'Logged out successfully!'
        ])->withCookie($cookie);
    }

    // récupère la méthode de l'utilisateur authentifié
    public function user(Request $request) {
        return new UserResource($request->user());
    }


    // la logique pour le mot de passe oublier
    public function changePassword()
    {
        $data = [
            'oldPassword' => 'valeur de l\'ancien mot de passe',
            'newPassword' => 'valeur du nouveau mot de passe',
        ];

        return response()->json($data);
    }

    public function updatePassword(Request $request)
    {
        # Validation
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|confirmed',
        ]);

        #Match The Old Password
        if (!Hash::check($request->old_password, auth()->user()->password)) {
            return response()->json([
                'error' => "Old Password Doesn't match!"
            ], 400);
        }

        #Update the new Password
        $user = auth()->user();
        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json([
            'status' => "Password changed successfully!"
        ]);
    }
}


