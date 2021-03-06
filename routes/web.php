<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('spa');
});

//Auth::routes();

Route::any('/{slug}', function (){
    return view('spa');
});

Route::any('/admin/{slug}', function (){
    return view('spa');
});

Route::any('/products/{slug}', function (){
    return view('spa');
});

Route::any('/products/{id}/{slug}', function (){
    return view('spa');
});
