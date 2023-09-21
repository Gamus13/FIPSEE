<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
// use App\Models\Fundraising;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StripePaymentController;
use App\Http\Controllers\NotificationController;
use Illuminate\Http\Request;
use App\Http\Controllers\ImageGallary;
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

// cette route c'est pour recuerer le token de laravel qui cause le csrf mismatch
// Route::get('/csrf-token', function () {
//     return csrf_token();
// });

Route::prefix('api')->namespace('App\Http\Controllers')->group(function () {
    Route::get('stripe', 'StripePaymentController@stripe');
    Route::post('stripe', 'StripePaymentController@stripePost')->name('stripe.post');
});



// route pour ajouter un projet a la BD
Route::post('/products', [ProductController::class, 'store']);
// route pour recuperer tous les projet de la BD
Route::get('/products', [ProductController::class, 'index']);
// route pour recuperer les informations de chaques id de la BD
Route::get('/products/{product}', [ProductController::class, 'show']);


Route::get('users', [AuthController::class, 'index']); // tout d'abord je creer la route qui va sera appeller dans ma fonctionnalites



Route::post('upload',[NotificationController::class,'saveImage']);

Route::get('list',[NotificationController::class,'getNotificationList']);

Route::get('delete/{id}',[NotificationController::class,'deleteImg']);


Route::get('getLatestRow',[NotificationController::class,'getUnreadNotificationCount']);

Route::post('updateNotification',[NotificationController::class,'markNotificationAsRead']);
