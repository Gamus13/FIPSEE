<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
// use App\Models\Fundraising;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\InfosUserController;
use App\Http\Controllers\UserFollowController;
use App\Http\Controllers\NotificationController;
use Illuminate\Http\Request;
use App\Http\Controllers\Fundraising;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// route pour l'inscription d'un utilisateur
Route::post('/register', [AuthController::class, 'register']);
// route pour la connexion d'un utilisateur
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
// route pour deconnecter l'utilisateur
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
});

// Route::get('/api/user', [UserController::class, 'getUser']);
Route::get('/api/user', [AuthController::class, 'getCurrentUser'])->middleware('auth:sanctum');
// cette route c'est pour recuerer le token de laravel qui cause le csrf mismatch
// Route::get('/csrf-token', function () {
//     return csrf_token();
// });

// route pour les methodes post et get
Route::resource('infosUser',InfosUserController::class);
// route pour la methode update
Route::post('infosUser/{infosUser}', [InfosUserController::class, 'update']);
// route pour la methode delete
Route::delete('infosUser/{infosUser}', [InfosUserController::class, 'destroy']);


Route::post('infosUser/{infosUser}', [UserFollowController::class, 'follow']);
Route::get('/api/users/{userId}', [UserFollowController::class, 'following']);
Route::post('/api/users/{userId}', [UserFollowController::class, 'unfollow']);




// route pour ajouter un projet a la BD

Route::post('/products', [ProductController::class, 'store']);
Route::put('/api/products/{productId}', [ProductController::class, 'put']);
// route pour recuperer tous les projet de la BD
Route::get('/products', [ProductController::class, 'index']);
// route pour recuperer les informations de chaques id de la BD
Route::get('/products/filter', [ProductController::class, 'filterByStatus']);
Route::get('/products/{product}', [ProductController::class, 'show']);
// Route::put('/products/{product}', [ProductController::class, 'update']);
// Route::put('/products/{product}', 'ProductController@update');

Route::delete('/products/{product}', [ProductController::class, 'destroy']);


Route::get('users', [AuthController::class, 'index']); // tout d'abord je creer la route qui va sera appeller dans ma fonctionnalites



Route::post('upload',[NotificationController::class,'saveImage']);

Route::get('list',[NotificationController::class,'getNotificationList']);

Route::get('delete/{id}',[NotificationController::class,'deleteImg']);


Route::get('getLatestRow',[NotificationController::class,'getUnreadNotificationCount']);

Route::post('updateNotification',[NotificationController::class,'markNotificationAsRead']);
