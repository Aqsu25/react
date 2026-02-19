<?php

use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\admin\SizeController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Front\ProducController;
use App\Http\Controllers\TempController;
use Illuminate\Support\Facades\Route;

Route::post('/admin/login', [AuthenticatedSessionController::class, 'store']);

// latest
Route::get('/latestProduct', [ProducController::class, 'latestProduct']);
// featured
Route::get('/featuredProduct', [ProducController::class, 'featuredProduct']);
// getcategories
Route::get('/getCategories', [ProducController::class, 'getCategories']);
// getbrands
Route::get('/getBrands', [ProducController::class, 'getBrands']);


// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(
    ['middleware' => 'auth:sanctum'],
    function () {
        Route::get('/admin/categories', [CategoryController::class, 'index']);
        Route::get('/admin/categories/{id}', [CategoryController::class, 'show']);
        Route::post('/admin/categories', [CategoryController::class, 'store']);
        Route::get('/admin/categories/edit/{id}', [CategoryController::class, 'edit']);
        Route::put('/admin/categories/{id}', [CategoryController::class, 'update']);
        Route::delete('/admin/categories/{id}', [CategoryController::class, 'destroy']);

        // brands
        Route::resource('/admin/brands', BrandController::class);

        // sizes
        Route::resource('/sizes', SizeController::class);

        // product
        Route::resource('/products', ProductController::class);

        // temp-img
        Route::post('/temp-image', [TempController::class, 'store']);

        // product-img
        Route::get('/defaultImage', [ProductController::class, 'defaultImage']);

        // product-img-del
        Route::delete('/productimg-delete/{id}', [ProductController::class, 'imageDelete']);
    }
);
