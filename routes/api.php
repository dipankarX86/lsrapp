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


// $myfile = fopen("TEST.txt", "w") or die("Unable to open file!");
// $txt = $token;
// fwrite($myfile, $txt);
// fclose($myfile);


// ****
// PUBLIC ROUTES
//CSRF token for any session, speciaaly important for: cross siterequests
Route::get('/sanctum/csrf-cookie', function (Request $request) {
    // $token = $request->session()->token();
    $token = csrf_token();
    
    // return the token
    return response($token, 200);
});

// user and auth routes
Route::post('/users/login', [UserController::class, 'login']);

// shop routes
Route::get('/shops', [ShopController::class, 'index']);


// ****
// PROTECTED ROUTES
Route::middleware('auth:sanctum')->post('/users/logout', [UserController::class, 'logout']);

// Master Admin Routes
Route::group(['middleware' => ['auth:sanctum', 'role:1']], function () {
    // user and auth routes
    Route::post('/users', [UserController::class, 'store']);  // POST, creates a new user
    //
    // shop routes
    Route::post('/shops', [ShopController::class, 'store']);  // POST, creates a new shop
});

