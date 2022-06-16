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

// PUBLIC ROUTES
// user and auth routes
Route::post('/users/login', [UserController::class, 'login']);
//
// shop routes
Route::get('/shops', [ShopController::class, 'index']);

// PROTECTED ROUTES
Route::group(['middleware' => ['auth:sanctum']], function () {
    // user and auth routes
    Route::post('/users', [UserController::class, 'store']);  // POST, creates a new user
    Route::post('/users/logout', [UserController::class, 'logout']);
    //
    // shop routes
    Route::post('/shops', [ShopController::class, 'store']);  // POST, creates a new shop
});

// $myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
// $txt = $request;
// fwrite($myfile, $txt);
// fclose($myfile);