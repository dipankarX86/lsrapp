<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ShopController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* USER AND AUTH ROUTES */
// Public routes
// Protected routes
Route::post('/users', [UserController::class, 'store']);

/* SHOP ROUTES */
// Public routes
Route::get('/shops', [ShopController::class, 'index']);

// Protected routes
Route::middleware('auth:sanctum')->post('/shops', [ShopController::class, 'store']);

/* TO SEE LATER */
/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */
/* Route::post('/shops', function(Request $request) {
    // 
    // $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
    // $txt = $request;
    // fwrite($myfile, $txt);
    // fclose($myfile);
    // 
    return $request;
}); */
/* Route::resource('shops', ShopController::class); */
