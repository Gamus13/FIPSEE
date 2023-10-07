<?php

namespace App\Http\Controllers;

use App\Models\User;
// use App\Models\UserFollow;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserFollowController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function follow(Request $request, $userId)
    {
        // Vérifier l'authentification de l'utilisateur
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Récupérer l'utilisateur actuellement authentifié
        $user = Auth::user();

        // Vérifier si l'utilisateur cible existe
        $targetUser = User::find($userId);
        if (!$targetUser) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Ajouter la relation de suivi entre l'utilisateur actuel et l'utilisateur cible
        $user->following()->attach($targetUser->id);

        return response()->json(['message' => 'User followed successfully']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function getFollowingUsers(Request $request, $userId)
    {
        // Vérifier si l'utilisateur existe
        $user = User::find($userId);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Récupérer les utilisateurs suivis par l'utilisateur cible
        $followingUsers = $user->following;

        return response()->json(['following_users' => $followingUsers]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserFollow $userFollow): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function unfollow(Request $request, $userId)
    {
        // Vérifier l'authentification de l'utilisateur
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Récupérer l'utilisateur actuellement authentifié
        $user = Auth::user();

        // Vérifier si l'utilisateur cible existe
        $targetUser = User::find($userId);
        if (!$targetUser) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Supprimer la relation de suivi entre l'utilisateur actuel et l'utilisateur cible
        $user->following()->detach($targetUser->id);

        return response()->json(['message' => 'User unfollowed successfully']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserFollow $userFollow): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserFollow $userFollow): RedirectResponse
    {
        //
    }
}
