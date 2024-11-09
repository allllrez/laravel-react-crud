<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/delete/{id}', [PostController::class, 'delete']);
Route::get('/posts/get/{id}', [PostController::class, 'get']);
Route::post('/posts/save', [PostController::class, 'save']);
Route::post('/posts/update', [PostController::class, 'update']);
